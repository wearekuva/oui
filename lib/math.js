"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const PI2 = exports.PI2 = 2.0 * Math.PI;
const HALF_PI = exports.HALF_PI = Math.PI * 0.5;
const DEG2RAD = exports.DEG2RAD = Math.PI / 180.0;
const RAD2DEG = exports.RAD2DEG = 180.0 / Math.PI;
const EPS = exports.EPS = 10e-6;

//Constants

/*
 * Lineary interpolates between a->b, using n as a weight
 */
const mix = exports.mix = (n, a, b) => a * (1 - n) + b * n;

/*
 * Linearly maps n from a->b to x->y
 */
const map = exports.map = (n, a, b, x, y) => x + (n - a) * (y - x) / (b - a);

/*
 * Linearly maps n from a->b to 0-1
 */
const normalize = (n, a, b) => math.map(n, a, b, 0, 1);

/*
 * Clamp n within range a->b
 */
const clamp = exports.clamp = (n, a, b) => n < a ? a : n > b ? b : n;

/*
 * Returns a pseudo-random floating point number within the range a->b, if b is not supplied it
 * returns within the range 0-a
*/
const random = exports.random = (a, b) => b === undefined ? Math.random() * a : Math.random() * (b - a) + a;

// export default {
//     mix, map, normalize, clamp, random,
//     PI2, HALF_PI, DEG2RAD, RAD2DEG, EPS }