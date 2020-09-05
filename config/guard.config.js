module.exports = {
  ipAdmin: {
    default: 'allow', // or can be 'disallow'
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
    global: [], // { time: 10, limit: 30 }
    urls: [], // { url: '/comments', method: 'GET', time: 15, limit: 2}
  },
};
