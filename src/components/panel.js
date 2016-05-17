import React, { Component } from 'react'

class BaseComponent extends Component {

    render(){

        let { children } = this.props

        return <div style={style}>
            { children }
        </div>
    }
}

var style = {
    width: 250,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 3,
    padding: '0.5em'
}

export default BaseComponent
