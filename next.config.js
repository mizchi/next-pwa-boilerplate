module.exports = {
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  webpack(config, options) {
    if (!options.defaultLoaders) {
      throw new Error(
        'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
      )
    }

    if (options.isServer) {
      config.externals = ['react', 'react-dom', ...config.externals]
    }

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    })

    return config
  }
}
