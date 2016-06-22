'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const rgbObject = exports.rgbObject = color => 'r' in color && typeof color.r === 'number' && 'g' in color && typeof color.g === 'number' && 'b' in color && typeof color.b === 'number';

const rgbArray = exports.rgbArray = color => color instanceof Array && color.length >= 3;

const hslObject = exports.hslObject = color => 'h' in color && typeof color.h === 'number' && 's' in color && typeof color.s === 'number' && 'l' in color && typeof color.l === 'number';

const hsvObject = exports.hsvObject = color => 'h' in color && typeof color.h === 'number' && 's' in color && typeof color.s === 'number' && 'v' in color && typeof color.v === 'number';