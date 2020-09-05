'use strict';

const { reqAdm, ipAdm } = require('../../services');

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        // console.log(ctx.request.header['x-real-ip']);
        const ip = '89.165.42.171';
        // const ip = ctx.request.header && ctx.request.header['x-real-ip'];
        if (!ip) return await next();
        
        const ipIsValid = await ipAdm(ip);
        const reqIsvaild = await reqAdm({
          ip: ip,
          url: ctx.request.url,
          method: ctx.request.method,
        });
        if (reqIsvaild && ipIsValid) await next();
        else if (!reqIsvaild) await ctx.throw(429);
        else if (!ipIsValid)
          await ctx.throw(403, 'your ip or your country have no access');
      });
    },
  };
};
