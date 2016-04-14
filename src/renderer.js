import React from 'react'
import dom from 'react-dom'
import createTree from './render-tree'
import primitives from './primitive-components'
import merge from 'lodash.merge'
import BaseComponent from './components/BaseComponent.jsx'



var element = document.createElement( 'div' )
element.style.position = 'absolute'
element.style.top = '0.5em'
document.body.appendChild( element )

var objectMergeMap = new WeakMap()

let mergeWithObject = ( object, cb ) => {

    let mergeWithKey = ( key, change ) => cb( merge( object, { [key]: change }))

    objectMergeMap.set( object, mergeWithKey )

    return mergeWithKey
}


export default ( object, callback ) => {


    // if( callback && typeof callback !== 'function ') // WARNING

    let onChange = objectMergeMap.get( object ) || mergeWithObject( object, callback || function(){} )

    let renderList = createTree( object, primitives, onChange )
    dom.render( <BaseComponent>{ renderList }</BaseComponent>, element )

}
