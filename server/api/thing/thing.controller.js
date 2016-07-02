/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
export function index(req, res) {
  console.log('GOT ds ', req.ds);
  incrementLoveInDs(req.ds, 'test_site_id', function(err, count) {
    //callbackRead
    console.log('read completed', err, count);
    res.json({loveCount: count, list: [{name: 'one thing', info: 'one thing info...'}]});
  }, function (err, count) {
    console.log('transaction completed', err, count);
  });
}

function incrementLoveInDs(ds, metasiteId, callbackRead, callback) {
  var error;
  var count = 0;

  ds.runInTransaction(function(transaction, done) {
    readLoveFromDs(ds, metasiteId, function (err, data) {
      console.log('got res count from datastore', err, data);
      if(typeof data !== 'undefined') {
        console.log('got count from datastore', err, data);
        count = data + 1;
      }
      callbackRead(err, count);
      updateLoveInDs(ds, metasiteId, count, function (err, data) {
        console.log('got response from datastore', err, data);
        error = err;
        done();
      })
    });
  }, function(transactionError) {
    if (transactionError || error) {
      callback(transactionError || error);
    } else {
      // The transaction completed successfully.
      callback(null, count);
    }
  });
}

function updateLoveInDs (ds, metasiteId, count, callback) {
  var key = ds.key(['love', metasiteId]);

  var entity = {
    key: key,
    data: {
      name: 'count',
      value: count,
      excludeFromIndexes: true
    }
  };

  ds.save(
    entity,
    function (err) {
      callback(err, err ? null : entity.key);
    }
  );
}
function readLoveFromDs (ds, metasiteId, callback) {
  var key = ds.key(['love', metasiteId]);
  ds.get(key, function (err, entity) {
    if (err) {
      return callback(err);
    }
    if (!entity) {
      return callback({
        code: 404,
        message: 'Not found'
      });
    }
    callback(null, entity.data.value);
  });
}
