var fs = require('fs')
var zlib = require('zlib')
var path = require('path')
// var rollup = require('rollup')
var uglify = require('uglify-js')
var webpack = require("webpack");
// var babel = require('rollup-plugin-babel')
// var replace = require('rollup-plugin-replace')
// var npm = require( 'rollup-plugin-node-resolve' )
// var commonjs = require('rollup-plugin-commonjs')
// var alias = require('rollup-plugin-alias')
var version = process.env.VERSION || require('../package.json').version
var webpackconfig = require( './webpack.config.js' )


console.log( 'Building Oui...' )

var banner =
  '\n' +
  'Oui.js v' + version + '\n' +
  '© ' + new Date().getFullYear() + ' Mark Lundin\n' +
  'Released under the MIT License.\n'

// update main file
var main = fs
  .readFileSync('src/index.js', 'utf-8')
  .replace(/Oui\.version = '[\d\.]+'/, "Oui.version = '" + version + "'")
fs.writeFileSync('src/index.js', main)


// CommonJS build.
// this is used as the "main" field in package.json
// and used by bundlers like Webpack and Browserify.
var commonjsConfig = Object.assign( webpackconfig, {
    output:{
        library: 'oui',
        path: 'dist',
        filename: 'oui.common.js',
        libraryTarget: 'commonjs'
    }
})
webpack( commonjsConfig ).run( buildInfo( commonjsConfig.output ))



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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
})

webpack( productionConfig ).run( buildInfo( productionConfig.output ))


// Standalone Dev Build
var devConfig = Object.assign( webpackconfig, {
    output:{
        library: 'oui',
        path: 'dist',
        filename: 'oui.js'
    },
    plugins: [
        new webpack.BannerPlugin( banner ),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]
})

webpack( devConfig ).run( buildInfo( devConfig.output ) )


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
    fs.readFile( path.join( output.path, output.filename ), 'utf8', function (err, code ) {
        if( err ) return
        console.log( blue( '    Built:  ' ), output.filename )
        console.log( blue( '    Size:   ' ), getSize( code ))
        console.log( '' )
    })
}


// rollup.rollup({
//   entry: 'src/index.js',
//   plugins: [
//
//     alias({
//         'react': 'node_modules/preact-compat/dist/preact-compat.js',
//         'react-dom': 'node_modules/preact-compat/dist/preact-compat.js'
//     }),
//     npm({
//       main: true
//     }),
//
//     commonjs({
//       include: 'node_modules/**'
//     }),
//     babel({
//       exclude: 'node_modules/**'
//     }),
//
//     //babel(/*{ loose: 'all' }*/)
//   ]
// })
// .then(function (bundle) {
//   return write('dist/oui.common.js', bundle.generate({
//     format: 'cjs',
//     banner: banner
//   }).code)
// })
// // Standalone Dev Build
// .then(function () {
//   return rollup.rollup({
//     entry: 'src/index.js',
//     plugins: [
//       npm({ jsnext: true, main: true }),
//       replace({
//         'process.env.NODE_ENV': "'development'"
//       }),
//       babel({
//         loose: 'all'
//       })
//     ]
//   })
//   .then(function (bundle) {
//     return write('dist/oui.js', bundle.generate({
//       format: 'umd',
//       banner: banner,
//       moduleName: 'Vue'
//     }).code)
//   })
// })
// .then(function () {
//   // Standalone Production Build
//   return rollup.rollup({
//     entry: 'src/index.js',
//     plugins: [
//       npm({ jsnext: true, main: true }),
//       replace({
//         'process.env.NODE_ENV': "'production'"
//       }),
//       babel({
//         loose: 'all'
//       })
//     ]
//   })
//   .then(function (bundle) {
//     var code = bundle.generate({
//       format: 'umd',
//       moduleName: 'Oui',
//       banner: banner
//     }).code
//     var res = uglify.minify(code, {
//       fromString: true,
//       outSourceMap: 'oui.min.js.map',
//       output: {
//         preamble: banner,
//         ascii_only: true
//       }
//     })
//     // fix uglifyjs sourcemap
//     var map = JSON.parse(res.map)
//     map.sources = ['oui.js']
//     map.sourcesContent = [code]
//     map.file = 'oui.min.js'
//     return [
//       write('dist/oui.min.js', res.code),
//       write('dist/oui.min.js.map', JSON.stringify(map))
//     ]
//   })
//   .then(zip)
// })
// .catch(logError)

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
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
