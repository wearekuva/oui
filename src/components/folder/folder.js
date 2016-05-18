import React, { Component, PropTypes } from 'react'
import radium from 'radium'
import { base } from '../styles'
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdExpandMore from 'react-icons/lib/md/expand-more'

/*
    The Folder is a container component that can be toggled opened and closed.
    To render it's children, it takes an function that returns an array of react
    elements.
*/

class Folder extends Component {

    constructor(){

        super()

        this.state = { open: false }

        this.toggleOpen = _ => this.setState({ open:!this.state.open })

    }


    render(){

        let { label, value, style } = this.props,
            { open } = this.state

        return <div style={[base, style]}>
            <div onClick={this.toggleOpen}>{ label }{ open ? <MdExpandMore style={floatRight}/> : <MdChevronLeft style={floatRight}/> }</div>
            { open ? <div>{ value() }</div> : null }
        </div>

    }
}


Folder = radium( Folder )


Folder.defaultProps = {

    label: 'Folder',
    onChange: a=>a

}


Folder.propTypes = {

    value : PropTypes.func.isRequired,

    onChange: PropTypes.func,

    label: PropTypes.string,

    style: PropTypes.object

}

var floatRight = {
    float: 'right'
}

export default Folder
