const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack(config, { isServer }){
    if(isServer){
      require('./utils/sitemap')
    }

    return config
  }
})
