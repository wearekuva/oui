var webpack = require('karma-webpack');
var webpackconfig = require('./webpack.karma.config')


module.exports = config => {
    config.set({

        frameworks: [ 'jasmine' ],

        // basePath:'../',

        files: [
            // { pattern: 'src/**/*.js', included: false, served: false },
            '../test/*.test.js',
            // 'src/controls/folder/*.test.js'
            'tests.js'
        ],

        plugins:[ webpack, 'karma-jasmine', 'karma-chrome-launcher' ],

        browsers: ['Chrome'],

        exclude: [
            // 'src/**/*.test.js',
            // 'src/**/test.js'
        ],

        preprocessors: {
            'tests.js': ['webpack'],
            // 'src/**/*.js': ['webpack'],
            // 'src/controls/folder/*.test.js': ['webpack'],
            // 'src/controls/folder/*.js': ['webpack'],

            '../test/*.test.js': ['webpack']
        },

        webpack: webpackconfig,

        webpackServer: { noInfo: true },

        reporters: ['progress'],

    })
}
