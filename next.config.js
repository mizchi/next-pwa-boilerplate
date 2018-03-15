const routes = require('./src/routes')

module.exports = {
  async exportPathMap() {
    return routes
  },
  webpack(config, _options) {
    return config
  }
}
