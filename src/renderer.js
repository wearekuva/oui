import React from 'react'
import dom from 'react-dom'
import createTree from './render-tree'
import primitives from './primitive-components'
import merge from 'lodash.merge'



var element = document.createElement( 'div' )
document.body.appendChild( element )

export default ( obj, onChange ) => {

    onChange = change => merge( obj, change )

    let renderList = createTree( obj, primitives, onChange )
    dom.render( <div>{ renderList }</div>, element )

}
