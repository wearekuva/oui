var version = process.env.VERSION || require('../package.json').version
var webpack = require('webpack')

var banner =
  '\n' +
  'Oui.js v' + version + '\n' +
  '© ' + new Date().getFullYear() + ' Mark Lundin\n' +
  'Released under the MIT License.\n'

module.exports = {
    entry: './es2015/index',
    module:{
        loaders:[
            { test: /\.json$/, loader: "json-loader" },
            {
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                //     // compact: false,
                    // babelrc: false,
                    presets: [/*"es2015",*/  'react' ],
                    "plugins": [
                        "transform-es2015-modules-commonjs",
                        "transform-object-rest-spread",
                        ["transform-runtime", {
                            "polyfill": false,
                            "regenerator": false
                        }]
                    ]
                //     // plugins: ["]
                }
            }
        ]
    }
}
