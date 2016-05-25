var config = require('./webpack.base.config')

module.exports = Object.assign( {}, config, {
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
})
