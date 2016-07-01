/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
export function index(req, res) {
  res.json([{name: 'one thing', info: 'one thing info...'}]);
}
