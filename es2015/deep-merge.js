/*
    This module deeply mutatively merges properties of change `b` into `a`
*/
import warn from './warn'


const isWritable = ( obj, prop ) => {
    let propDesc = Object.getOwnPropertyDescriptor( obj, prop )
    return propDesc ? propDesc.writable === true : true
}

let deepmerge = ( a, b ) => {

    let isFrozen = Object.isFrozen( a ) || !Object.isExtensible( a )
    warn( isFrozen, 'The merge target is frozen and cannot be mutated' )
    if( isFrozen ) return a

    for( var prop in b ){
        if( typeof a[prop] === 'object' ){

            let isFrozen = Object.isFrozen( a[prop] )
            warn( isFrozen, 'The property `' + prop + '` is frozen and cannot be mutated.' )
            if( !isFrozen ) deepmerge( a[prop], b[prop] )

        }else{

            let writable = isWritable( a, prop )
            warn( !writable, 'The property `' + prop + '` is not writable and cannot be mutated.' )
            if( writable ) a[prop] = b[prop]
            
        }
    }
    return a
}

export default deepmerge
