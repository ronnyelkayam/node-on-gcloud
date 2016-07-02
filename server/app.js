/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
var gcloud = require('gcloud');
var ds = gcloud.datastore({
  projectId: 'test-app1-1360'
});

// Passing params to request
app.use(function(req,res,next){
  req.ds = ds;
  next();
});
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
