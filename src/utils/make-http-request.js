'use strict';

const rp = require('request-promise');

module.exports = ({method, url, headers = {}, form = {}}) => {
  return rp({
    method,
    url,
    headers,
    form,
    json: true
  });
};
