/*
    The `core-controllers` Folder component generates it's children using a function
    passed in it's props. This is only called when it's open meaning that the whole
    render tree is lazily instantiated, and only as much as neccesary.

    This Component wraps the `core-controllers/Folder` by providing the default
    `render-tree` function to generate the render list. Doing this in it's own
    component rather than directly on the Folder component itself means we can
    normalize the api in 'render-tree'
*/

import Tree from "../render-tree"
import React, { PropTypes } from 'react'


export default ( FolderComponent ) => {

    // let style = {
    //     paddingBottom: '0.5em',
    //     paddingTop: '0.5em',
    //     borderBottom: '1px solid rgb( 230, 230, 230 )'
    // }

    class WrappedComponent extends FolderComponent {

        constructor(){

            super()
            this.tree = _ => Tree( this.props.value, this.props.onChange )

        }

        render(){

            return <FolderComponent { ...this.props } value={ this.tree } />

        }
    }

    WrappedComponent.propTypes = {

        value : PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
        ]).isRequired,

        onChange: PropTypes.func,

        label: PropTypes.string,

        style: PropTypes.object

    }

    return WrappedComponent

}
