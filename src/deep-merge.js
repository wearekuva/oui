/*
    This module deeply merges properties of change `b` into `a`
*/

let deepmerge = ( a, b ) => {
    for( var prop in b ){
        if( typeof a[prop] === 'object' ){
            deepmerge( a[prop], b[prop] )
        }else{
            a[prop] = b[prop]
        }
    }

    return a
}

export default deepmerge
