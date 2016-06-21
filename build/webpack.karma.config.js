var config = require('./webpack.base.config')
var path = require( 'path' )
var webpack = require('webpack')

module.exports = Object.assign( {}, {}, {
    // devtool: 'inline-source-map',
    // externals: {
    //   'react/addons': true,
    //   'react/lib/ExecutionEnvironment': true,
    //   'react/lib/ReactContext': true
    // },
    module: Object.assign({}, config.module, {
        postLoaders: [{
          test: /\.(js|jsx)$/,
          include: [ path.resolve(__dirname, "../es2015")],
          exclude: /(\S*\.test\.js|node_modules)/,
          loader: 'istanbul-instrumenter'
        }]
    }),

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    ]

})
