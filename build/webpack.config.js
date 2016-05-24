var version = process.env.VERSION || require('../package.json').version
var webpack = require('webpack')

var banner =
  '\n' +
  'Oui.js v' + version + '\n' +
  '© ' + new Date().getFullYear() + ' Mark Lundin\n' +
  'Released under the MIT License.\n'

module.exports = {
    entry: './src/index.js',
    module:{
        loaders:[
            {
                loader: 'babel',
                exclude: 'node_modules',
                query: {
                    babelrc: false,
                    presets: ["es2015", "stage-2", "react" ]
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin( banner ),
        new webpack.optimize.DedupePlugin()
    ],
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
}
