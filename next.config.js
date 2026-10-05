const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root detection warning when multiple lockfiles exist
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;

