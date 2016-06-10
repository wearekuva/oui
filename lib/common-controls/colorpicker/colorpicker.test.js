'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _validators = require('./validators');

var _colorConverter = require('./color-converter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('Validates an RGB Array', t => t.true((0, _validators.rgbArray)([0.5, 0.2, 0.0, 1.0])));

// Validators


(0, _ava2.default)('Validates an RGB object', t => t.true((0, _validators.rgbObject)({ r: 0.5, g: 0.2, b: 0.0, a: 1.0 })));

//test( 'Validates an HSL object', t => t.true( hslObject({ h:180, s:0.2, l:0.0, a:1.0 })))

(0, _ava2.default)('Validates an HSV object', t => t.true((0, _validators.hsvObject)({ h: 180, s: 0.2, v: 0.0, a: 1.0 })));

// Converters

(0, _ava2.default)('Converts an RGB array to HSV and back', t => {
    let arr = [1, 1, 1, 1.0];
    t.deepEqual(arr, _colorConverter.rgbArr2Hsv.invert((0, _colorConverter.rgbArr2Hsv)(arr)));
});

(0, _ava2.default)('Converts an RGB object to HSV and back', t => {
    let rgb = { r: 0.5, g: 0.2, b: 0.0, a: 1.0 };
    t.deepEqual(rgb, _colorConverter.rgb2Hsv.invert((0, _colorConverter.rgb2Hsv)(rgb)));
});

// test( 'Converts an HSL object to HSV and back', t => {
//     var hsl = { h:160, s:50, l:100 }
//     t.deepEqual( hsl, hsl2Hsv.invert( hsl2Hsv( hsl )))
// })