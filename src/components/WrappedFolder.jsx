import React, { Component } from 'react'
import Folder from 'core-controllers/components/folder'
import createTree from '../render-tree'
import primitives from '../primitive-components'
import assign from 'fast.js/object/assign'


/**
    The `core-controllers` Folder component generates it's children using a function
    passed in it's props. This is only called when it's open meaning that the whole
    render tree is lazily instantiated, and only as much as neccesary.

    This Component wraps the `core-controllers/Folder` by providing the default
    `render-tree` function to generate the render list. Doing this in it's own
    component rather than directly on the Folder component itself means we can
    normalize the api in 'render-tree'
*/

class WrappedFolder extends Component {

    constructor(){

        super()

        let mergeWithKey = ( key, change ) => {

            let slot = this.props.value

            if( typeof change === 'object' ){

                assign( slot[key], change )

            }else{
                slot[key] = change
            }

            return slot

        }

        let onChange = ( key, change ) => this.props.onChange( mergeWithKey( key, change ))
        this.tree = _ => createTree( this.props.value, primitives, onChange )

    }

    render(){

        return <Folder { ...this.props } value={this.tree} />

    }
}

export default WrappedFolder
