
export const rgbObject = color => (
    'r' in color && typeof color.r === 'number' &&
    'g' in color && typeof color.g === 'number' &&
    'b' in color && typeof color.b === 'number'
)

export const rgbArray = color => (
    color instanceof Array &&
    color.length >= 3
)

export const hslObject = color => (
    'h' in color && typeof color.h === 'number' &&
    's' in color && typeof color.s === 'number' &&
    'l' in color && typeof color.l === 'number'
)

export const hsvObject = color => (
    'h' in color && typeof color.h === 'number' &&
    's' in color && typeof color.s === 'number' &&
    'v' in color && typeof color.v === 'number'
)
