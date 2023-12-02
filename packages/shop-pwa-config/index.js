const withPWA = require('next-pwa');
const nextCache = require('./cache');

module.exports = ({ time = 0, ...rest }) => {
  const plugins = [];
  const isProd = process.env.NODE_ENV === 'production';

  plugins.push(
    withPWA({
      disable: !isProd,
      dest: 'public',
      sw: `/sw.js?v=${time}`,
      register: true,
      skipWaiting: true,
      reloadOnOnline: true,
      cacheStartUrl: false,
      dynamicStartUrl: false,
      buildExcludes: [/middleware-manifest\.json$/],
      publicExcludes: ['!robots.txt', '!version.json'],
      runtimeCaching: nextCache,
      ...rest,
    })
  );

  return plugins;
};
