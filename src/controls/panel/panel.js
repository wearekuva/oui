import React, { Component } from 'react'
import { base } from '../styles'

class BaseComponent extends Component {

    render(){

        let { children } = this.props

        return <div style={{ ...base, ...style }} class='oui-panel' >
            <header style={{lineHeight:'11px'}}>
                <label>Panel</label>
                <hr style={{border:'1px solid rgb(210,210,210)', borderBottom: 0 }}/>
            </header>
            { children }
        </div>
    }
}

var style = {
    boxSizing: 'border-box',

    lineHeight: '2em',

    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'baseline',
    overflow:'scroll',
    width: 300,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 2,
    padding: '1em',
    // border: 'green'
    margin: 0,
    // marginBottom: '0'
}

// element.style.flexDirection = 'column'
// element.style.flexWrap = 'wrap'
// element.style.alignItems = 'flex-start'
// element.style.alignContent = 'flex-start'

export default BaseComponent
