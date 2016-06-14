var config = require('./webpack.base.config')

module.exports = Object.assign( {}, config, {
    module:{
        loaders:[
            { test: /\.json$/, loader: "json-loader" },
            {
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    compact: true,
                    // babelrc: false,
                    presets: ["es2015",  'react' ],
                    "plugins": ["transform-es2015-modules-commonjs", "transform-object-rest-spread"]
                }
            }
        ]
    }
})
