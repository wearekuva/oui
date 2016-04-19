import React from 'react'
import dom from 'react-dom'
import createTree from './render-tree'
import primitives from './primitive-components'
import assign from 'fast.js/object/assign'
import BaseComponent from './components/BaseComponent.jsx'



var element = document.createElement( 'div' )
element.style.position = 'absolute'
element.style.top = '0.5em'
document.body.appendChild( element )


/*
    This is the only stateful part of the library, we maintain a reference to
    the onChange handle. We do this to preserve an identical function
    across renders which means the entire component tree does not get re rendered
    every time.
*/

var objectMergeMap = new WeakMap()

let mergeWithObject = ( object, cb ) => {

    let mergeWithKey = ( key, change ) => {

        if( typeof change === 'object' ){

            assign( object[key], change )

        }else{
            object[key] = change
        }

        return object

    }

    objectMergeMap.set( object, mergeWithKey )

    return mergeWithKey
}


export default ( object, callback ) => {


    // if( callback && typeof callback !== 'function ') // WARNING

    let onChange = objectMergeMap.get( object ) || mergeWithObject( object, callback || function(){} )

    let renderList = createTree( object, primitives, onChange )
    dom.render( <BaseComponent>{ renderList }</BaseComponent>, element )

}
