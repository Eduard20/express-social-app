'use strict';

module.exports = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS') {
      if (req.headers[ 'access-control-request-headers' ]) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', req.headers[ 'access-control-request-headers' ]);
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Access-Control-Allow-Credentials', 'true');
      }
      return res.end();
    }
    next();
  } catch (err) {
    next(err);
  }
};
