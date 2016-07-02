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

// Passing params to request
app.use(function(req,res,next){
  req.myParam = 'hello global param';
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
