'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hsv2Hsv = exports.rgbArr2Hsv = exports.rgb2Hsv = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                      A set of validators for common color formats such as;
                                                                                                                                                                                                                                                                      {r, g, b}, {h, s, v}, {h, s, l} and [ r, g, b ]
                                                                                                                                                                                                                                                                  */

var _validators = require('./validators');

var _colr = require('colr');

var _colr2 = _interopRequireDefault(_colr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let withAlpha = (color, a) => a !== undefined ? _extends({ a }, color) : color;

let rgb2Hsv = exports.rgb2Hsv = c => withAlpha(_colr2.default.fromRgbObject(c).toRawHsvObject(), c.a);
let rgbArr2Hsv = exports.rgbArr2Hsv = c => withAlpha(_colr2.default.fromRgbArray(c.map(channel => channel * 255)).toRawHsvObject(), c[3]);
let hsv2Hsv = exports.hsv2Hsv = c => c;

rgb2Hsv.invert = c => withAlpha(_colr2.default.fromHsvObject(c).toRawRgbObject(), c.a);
rgbArr2Hsv.invert = c => _colr2.default.fromHsvObject(c).toRawRgbArray().map(channel => channel / 255).concat([c.a]);
hsv2Hsv.invert = c => c;

exports.default = value => {

    let converter = hsv2Hsv;

    if ((0, _validators.rgbObject)(value)) converter = rgb2Hsv;else if ((0, _validators.rgbArray)(value)) converter = rgbArr2Hsv;

    return converter;
};