var config = require('./webpack.base.config')

module.exports = Object.assign( {}, config, {
    // devtool: 'inline-source-map',
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
 })
