const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8081', // Replace with your Node.js server URL
      changeOrigin: true,
    })
  );
};
