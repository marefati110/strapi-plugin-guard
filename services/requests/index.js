'use strict';
const ctypto = require('crypto');
const { requests } = require('../../config/guard.config');
// const { has } = require('lodash');
module.exports = {
  reqAdm: async ({ ip, url, method }) => {
    // check global limitaion
    for (const item of requests.global) {
      const hashKey = ctypto
        .createHash('md5')
        .update(ip + item.limit)
        .digest('hex');
      let num = await strapi.redis.get(hashKey);
      if (num) {
        num = parseInt(num);
        if (num + 1 > item.limit) return false;
        await strapi.redis.incr(hashKey);
      } else {
        await strapi.redis.set(hashKey, 1, 'EX', item.time);
      }
    }
    // specific limitaion
    const limitaion = [];
    requests.urls.map((item) => {
      if ((item.method = method && url.search(item.url) !== -1))
        limitaion.push(item);
    });
    console.log(limitaion);
    //
    for (const item of limitaion) {
      const hashKey = ctypto
        .createHash('md5')
        .update(ip + url + +item.limit)
        .digest('hex');
      let num = await strapi.redis.get(hashKey);
      if (num) {
        num = parseInt(num);
        if (num + 1 > item.limit) return false;
        await strapi.redis.incr(hashKey);
      } else {
        await strapi.redis.set(hashKey, 1, 'EX', item.time);
      }
    }
    return true;
  },
};
