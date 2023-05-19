const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8081;

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: `http://localhost:${PORT}`, // Replace with your Node.js server URL
      changeOrigin: true,
    })
  );
};
