var config = require('./webpack.base.config')
var path = require( 'path' )
var webpack = require('webpack')

module.exports = {
    // devtool: 'inline-source-map',
    // externals: {
    //   'react/addons': true,
    //   'react/lib/ExecutionEnvironment': true,
    //   'react/lib/ReactContext': true
    // },
    module: {
        loaders:[
            { test: /\.json$/, loader: "json-loader" },
            {
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                //     // compact: false,
                    // babelrc: false,
                    presets: [/*"es2015",*/  'react' ],
                    "plugins": ["transform-es2015-modules-commonjs", "transform-object-rest-spread"]
                //     // plugins: ["]
                }
            }
        ],
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

}
