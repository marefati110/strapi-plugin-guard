'use strict';
const { lookupFor } = require('./func');
const { ipAdmin } = require('../../config/guard.config');
module.exports = {
  ipAdm: async (ip) => {
    let hasPersmission = false;
    const country = await lookupFor(ip);

    if (ipAdmin.default === 'allow') {
      if (
        !ipAdmin.country.disallow.includes(country) &&
        !ipAdmin.static.disallow.includes(ip)
      ) {
        console.log(!ipAdmin.country.disallow.includes(country));
        hasPersmission = true;
      }
    } else if (ipAdmin.default === 'disallow') {
      if (
        ipAdmin.country.allow.includes(country) ||
        ipAdmin.static.allow.includes(ip)
      ) {
        hasPersmission = true;
      }
    }
    return hasPersmission;
  },
};
