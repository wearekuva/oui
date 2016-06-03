var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './test/index',
  resolve: {
      alias: {
          'oui' : '../src',
          'common-controls': '../src/common-controls',
        //   'react': 'preact-compat',
        //   'react-dom': 'preact-compat'
      }
  },
  output: {
    path: path.resolve( __dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
            compact: true,
            // loose:false,
            babelrc: false,
            presets: ["es2015",  'react' ],
            "plugins": ["transform-es2015-modules-commonjs", "transform-object-rest-spread"]
        }
        }
    ]
  },
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
