import React from 'react'
import dom from 'react-dom'
import createTree from './render-tree'
import primitives from './primitive-components'
import BaseComponent from './components/BaseComponent.jsx'


export default ( object, element, onChange ) => {

    let renderList = createTree( object, primitives, onChange )
    return <BaseComponent>{ renderList }</BaseComponent>

}
