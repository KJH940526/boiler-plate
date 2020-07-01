const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({ //프론트엔드 포트번호 3000번에서 5000으로 주겠다
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};