'use strict';

var _validators = require('./validators');

var _colorConverter = require('./color-converter');

// Validators


describe('ColorPicker', () => {

    it('validates an RGB Array', () => expect((0, _validators.rgbArray)([0.5, 0.2, 0.0, 1.0])).toBeTruthy());

    it('validates an RGB object', () => expect((0, _validators.rgbObject)({ r: 0.5, g: 0.2, b: 0.0, a: 1.0 })).toBeTruthy());

    it('validates an HSV object', () => expect((0, _validators.hsvObject)({ h: 180, s: 0.2, v: 0.0, a: 1.0 })).toBeTruthy());

    // it( 'converts an RGB array to HSV and back', () => {
    //     let arr = [ 1, 1, 1, 1.0 ]
    //     t.deepEqual( arr, rgbArr2Hsv.invert( rgbArr2Hsv( arr )))
    // })
    //
    // it( 'Converts an RGB object to HSV and back', () => {
    //     let rgb = { r: 0.5, g:0.2, b:0.0, a:1.0 }
    //     t.deepEqual( rgb, rgb2Hsv.invert( rgb2Hsv( rgb )))
    // })
});

//test( 'Validates an HSL object', t => t.true( hslObject({ h:180, s:0.2, l:0.0, a:1.0 })))

// Converters

// test( 'Converts an HSL object to HSV and back', t => {
//     var hsl = { h:160, s:50, l:100 }
//     t.deepEqual( hsl, hsl2Hsv.invert( hsl2Hsv( hsl )))
// })