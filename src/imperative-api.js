import React from 'react'
import dom from 'react-dom'
import Tree from './render-tree'
import Panel from './components/panel'
import domElement from './dom'

export default opts => {

    let element = document.createElement('div')
    domElement.appendChild( element )

    return {

        render( api ){
            if( element ) return dom.render( <Panel { ...opts } >{ Tree( api )}</Panel>, element )
        },

        destroy(){
            dom.unmountComponentAtNode( element )
            domElement.removeChild( element )
            element = null
        }
    }
}
