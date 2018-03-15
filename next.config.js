const routes = require('./src/routes')
module.exports = {
  async exportPathMap() {
    return routes
  },
  webpack(config, { dev }) {
    return config
  }
}
