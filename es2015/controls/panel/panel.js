/** @jsx React.h */
import React, { Component, h } from 'preact'
import PropTypes from 'propTypes'
import { base, secondary } from '../styles'
import MdChevronLeft from '../../icons/expand-less'
import MdExpandMore from '../../icons/expand-more'

class Panel extends React.Component {

    constructor(){

        super()

        this.state = { open: true }

        this.toggleOpen = _ => this.setState({ open:!this.state.open })

    }

    render(){

        let { children } = this.props,
            { open } = this.state,
            Chevron = open ? MdExpandMore : MdChevronLeft

        return <div style={{ ...base, ...style }} class='oui-panel' >
            <header style={{lineHeight:'11px'}} onClick={this.toggleOpen}>
                <div style={{display:'flex'}}>
                    <label>Panel</label>
                    <Chevron style={{marginLeft:'auto'}} />
                </div>
                { open ? <hr style={ lineStyle }/> : null }
            </header>
            { open ?
                <div style={{overflowY:'scroll', maxHeight: '90%'}}>{ children }</div>
            : null }

        </div>
    }
}

var lineStyle = {
    borderWidth: '0px 0px 1px 0px',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopColor: secondary.color,
    borderRightColor: secondary.color,
    borderLeftColor: secondary.color,
    borderBottomColor: secondary.color
}

var style = {
    boxSizing: 'border-box',
    lineHeight: '2em',
    display: 'flex',
    flexDirection: 'column',
    width: 275,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 2,
    padding: '1em',
    margin: 0
}

export default Panel
