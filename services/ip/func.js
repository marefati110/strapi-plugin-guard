'use strict';
const geoip = require('geoip-lite');

module.exports = {
  lookupFor: async (ip) => {
    const geo = geoip.lookup(ip);
    return geo.country;
  },
};
