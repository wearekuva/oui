var config = require('./webpack.base.config')
var path = require( 'path' )

module.exports = Object.assign( {}, config, {
    // devtool: 'inline-source-map',
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    module: Object.assign({}, config.module, {
        postLoaders: [{
          test: /\.(js|jsx)$/,
          include: [ path.resolve(__dirname, "../es2015")],
          exclude: /(\S*\.test\.js|node_modules)/,
          loader: 'istanbul-instrumenter'
        }]
    }),

})
