
/*
    This is our merge strategy. Simppy assign
*/

export default ( obj, key, change ) => {

    if( typeof change === 'object' ){

        Object.assign( obj[key], change )

    }else{
        obj[key] = change
    }

    return obj
}
