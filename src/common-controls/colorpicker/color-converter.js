/*
    A set of validators for common color formats such as;
    {r, g, b}, {h, s, v}, {h, s, l} and [ r, g, b ]
*/

import { rgbObject, hslObject, rgbArray } from './validators'
import Colr from 'colr'

let withAlpha = ( color, a ) => a !== undefined ? { a, ...color } : color

export let rgb2Hsv = c => withAlpha( Colr.fromRgbObject(c).toRawHsvObject(), c.a )
export let rgbArr2Hsv = c => withAlpha( Colr.fromRgbArray(c.map( channel => channel * 255 )).toRawHsvObject(), c[3] )
export let hsv2Hsv = c => c

rgb2Hsv.invert = c => withAlpha( Colr.fromHsvObject(c).toRawRgbObject(), c.a )
rgbArr2Hsv.invert = c => Colr.fromHsvObject(c).toRawRgbArray().map( channel => channel / 255 ).concat([ c.a ])
hsv2Hsv.invert = c => c

export default value => {

    let converter = hsv2Hsv

    if ( rgbObject( value )) converter = rgb2Hsv
    else if( rgbArray( value ) ) converter = rgbArr2Hsv

    return converter

}
