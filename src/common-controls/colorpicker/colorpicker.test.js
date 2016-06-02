import test from 'ava'


// Validators
import { rgbArray, rgbObject, hslObject, hsvObject } from './validators'

test( 'Validates an RGB Array' , t => t.true( rgbArray([ 0.5, 0.2, 0.0, 1.0 ])))

test( 'Validates an RGB object', t => t.true( rgbObject({ r:0.5, g:0.2, b:0.0, a:1.0 })))

//test( 'Validates an HSL object', t => t.true( hslObject({ h:180, s:0.2, l:0.0, a:1.0 })))

test( 'Validates an HSV object', t => t.true( hsvObject({ h:180, s:0.2, v:0.0, a:1.0 })))


// Converters

import { rgb2Hsv, rgbArr2Hsv, hsl2Hsv } from './color-converter'

test( 'Converts an RGB array to HSV and back', t => {
    let arr = [ 1, 1, 1, 1.0 ]
    t.deepEqual( arr, rgbArr2Hsv.invert( rgbArr2Hsv( arr )))
})

test( 'Converts an RGB object to HSV and back', t => {
    let rgb = { r: 0.5, g:0.2, b:0.0, a:1.0 }
    t.deepEqual( rgb, rgb2Hsv.invert( rgb2Hsv( rgb )))
})

// test( 'Converts an HSL object to HSV and back', t => {
//     var hsl = { h:160, s:50, l:100 }
//     t.deepEqual( hsl, hsl2Hsv.invert( hsl2Hsv( hsl )))
// })
