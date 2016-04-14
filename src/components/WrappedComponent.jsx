import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'

/*
    This is a wrapper component that simply retains a `propKey` property that
    which it passes back in onChange events. This allows children components
    to implement shouldComponentUpdate easier without passing back key references
*/

var style = {
    borderTop: '1px solid rgb(210, 210, 210)'
}

class WrappedComponent extends React.Component {

    constructor(){

        super()

        this.onChildChange = change => this.props.onChange( this.props.propKey, change )

    }

    render() {

        return React.cloneElement( this.props.children, {
            onChange: this.onChildChange//,
            //style: [].concat([ style, this.props.children.props.style ])
        })
    }
}

export default WrappedComponent
