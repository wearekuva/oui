var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index',
  // resolve: {
  //     alias: {
  //         'react': 'preact-compat',
  //         'react-dom': 'preact-compat'
  //     }
  // },
  output: {
    path: path.resolve( __dirname, './dist'),
    filename: 'oui.dev.js',
    library: 'oui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  // babel: {
  //   loose: 'all'
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devServer: {
    contentBase: './test',
    noInfo: true
  },
  devtool: 'source-map'
}
