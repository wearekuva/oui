export const PI2 = 2.0 * Math.PI
export const HALF_PI = Math.PI * 0.5
export const DEG2RAD = Math.PI / 180.0
export const RAD2DEG = 180.0 / Math.PI
export const EPS = 10e-6

// Constants

/*
 * Lineary interpolates between a->b, using n as a weight
 */
export const mix = (n, a, b) => a * (1 - n) + b * n

/*
 * Linearly maps n from a->b to x->y
 */
export const map = (n, a, b, x, y) => x + (n - a) * (y - x) / (b - a)

/*
 * Linearly maps n from a->b to 0-1
 */
export const normalize = (n, a, b) => map(n, a, b, 0, 1)

/*
 * Clamp n within range a->b
 */
export const clamp = (n, a, b) => ((n < a) ? a : ((n > b) ? b : n))

/*
 * Returns a pseudo-random floating point number within the range a->b, if b is not supplied it
 * returns within the range 0-a
*/
export const random = (a, b) => ((b === undefined) ? Math.random() * a : Math.random() * (b - a) + a)

// export default {
//     mix, map, normalize, clamp, random,
//     PI2, HALF_PI, DEG2RAD, RAD2DEG, EPS }
