var fs = require('fs')
var zlib = require('zlib')
var path = require('path')
var webpack = require("webpack");
var version = process.env.VERSION || require('../package.json').version
var webpackconfig = require( './webpack.build.config.js' )

console.log( 'Building Oui...' )

var banner =
  '\n' +
  'Oui.js v' + version + '\n' +
  '© ' + new Date().getFullYear() + ' Mark Lundin\n' +
  'Released under the MIT License.\n'

// update main file
var main = fs
  .readFileSync('src/index.js', 'utf-8')
  .replace(/oui\.version = '[\d\.]+'/, "oui.version = '" + version + "'")
fs.writeFileSync('src/index.js', main)


// CommonJS build.





// Standalone Dev Build
var devConfig = Object.assign( webpackconfig, {
    output:{
        library: 'oui',
        path: 'dist',
        filename: 'oui.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.BannerPlugin( banner ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        // new webpack.optimize.UglifyJsPlugin()
    ]
})

webpack( devConfig ).run( buildInfo( devConfig.output ) )





// Standalone Production Build
var productionConfig = Object.assign( webpackconfig, {
    output:{
        library: 'oui',
        path: 'dist',
        filename: 'oui.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.BannerPlugin( banner ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        new webpack.optimize.UglifyJsPlugin()
    ]
})

webpack( productionConfig ).run(( err, stats ) => {
  buildInfo( productionConfig.output )( err, stats )
  zip()
})


function buildInfo( output ){
    return function onBuilt(err, stats) {

        if( err ) return console.log( err )
        if( !stats.hasErrors() ){
            chunkinfo( output )
        }else{
            stats.toJson( true ).errors.forEach( function(error){ console.log( error ) })
        }
    }
}


function chunkinfo( output ){
    var code = fs.readFileSync( path.join( output.path, output.filename ), 'utf8' )
    console.log( blue( '    Built:  ' ), output.filename )
    console.log( blue( '    Size:   ' ), getSize( code ))
    console.log( '' )
}


function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue('   min+gzip ' + getSize(code)))
      resolve()
    })
  })
}

function zip () {
  return new Promise(function (resolve, reject) {
    fs.readFile('dist/oui.min.js', function (err, buf) {
      if (err) return reject(err)
      zlib.gzip(buf, function (err, buf) {
        if (err) return reject(err)
        write('dist/oui.min.js.gz', buf).then(resolve)
      })
    })
  })
}

function getSize (code) {
  return Math.ceil(code.length / 1024) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
