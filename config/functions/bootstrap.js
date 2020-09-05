'use strict';

const Redis = require('ioredis');
const guardConfig = require('../guard.config');

module.exports = async () => {
  if (strapi.redis) {
    const redis = new Redis({
      port: 6379,
      host: process.env.REDIS_HOST || '127.0.0.1',
      db: 1,
    });
    strapi.redis = redis;
  }
  // combine config to strapi object
  strapi.guard = guardConfig;
};
