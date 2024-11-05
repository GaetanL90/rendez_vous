const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000; // Main server port

// Proxy routes to each package
app.use('/website', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/patient-portal', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/doctor-portal', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/admin-portal', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Main server running on http://localhost:${PORT}`);
});
