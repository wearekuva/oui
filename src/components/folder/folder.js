import React, { Component, PropTypes } from 'react'
import radium from 'radium'
import Tree from "../../render-tree"
import { base } from '../styles'
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdExpandMore from 'react-icons/lib/md/expand-more'

/*
    The Folder is a container component that can be toggled opened and closed.
    To render it's children, it accepts an array or object of react elements.
*/

class Folder extends Component {

    constructor(){

        super()

        this.state = { open: false }

        this.toggleOpen = _ => this.setState({ open:!this.state.open })

    }


    render(){

        let { label, value, style } = this.props,
            { open } = this.state,
            Chevron = open ? MdExpandMore : MdChevronLeft

        return <div style={base}>
            <div onClick={this.toggleOpen} style={{display:'flex'}}>
                <label>{ label }</label>
                <MdChevronLeft style={{marginLeft:'auto', display: open ? 'none' : 'visible'}} />
                <MdExpandMore style={{marginLeft:'auto', display: open ? 'visible' : 'none'}} />
            </div>
            { open ? <div>{ Tree( this.props.value, this.props.onChange ) }</div> : null }
        </div>

    }
}


// Folder = radium( Folder )


Folder.defaultProps = {

    label: 'Folder',
    onChange: a=>a

}


Folder.propTypes = {

    value : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),

    onChange: PropTypes.func,

    label: PropTypes.string,

    style: PropTypes.object

}

var floatRight = {
    // float: 'right'
}

export default Folder
