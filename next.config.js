module.exports = {
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(__dirname)
    return config;
  },
  env: {
    FB_ACCESS_TOKEN: process.env.FB_ACCESS_TOKEN,
  }
}
