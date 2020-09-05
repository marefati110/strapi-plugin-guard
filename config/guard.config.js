module.exports = {
  ipAdmin: {
    default: 'allow',
    country: {
      allow: [],
      disallow: [],
    },
    static: {
      allow: [],
      disallow: [],
    },
  },
  requests: {
    global: [{ time: 10, limit: 3 }],
    urls: [],
    // { url: '/qas', method: 'GET', time: 15, limit: 10 }
  },
};
