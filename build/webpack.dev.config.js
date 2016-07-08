var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './test/index',
  resolve: {
      alias: {
          'oui' : '../es2015'
        //   'controls': '../es2015/controls'
      }
  },
  output: {
    path: path.resolve( __dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        query: {
            compact: true,
            // loose:false,
            babelrc: false,
            presets: ["es2015",  'react' ],
            "plugins": [
                "transform-es2015-modules-commonjs",
                "transform-object-rest-spread",
                // ["transform-runtime", {
                //     "polyfill": false,
                //     "regenerator": false
                // }]
            ]
        }
    }]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   })
  // ],
  devServer: {
    contentBase: './test',
    noInfo: true
  },
  devtool: 'source-map'
}
