/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
export function index(req, res) {
  console.log('GOT ds ', req.ds);
  readLoveFromDs(req.ds, 'test_site_id', function (err, data) {
    var count = 0;
    console.log('got res count from datastore', err, data)
    if(typeof data !== 'undefined') {
      console.log('got count from datastore', err, data);
      count = data + 1;
    }
    res.json({loveCount: count, list: [{name: 'one thing', info: 'one thing info...'}]});
    updateLoveInDs(req.ds, 'test_site_id', count, function (err, data) {
      console.log('got response from datastore', err, data);
    })
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
