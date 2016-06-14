import React, { Component, PropTypes } from 'preact-compat'
// import radium from 'radium'
// import Tree from "../../render-tree"
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

        console.log( open )

        return <div style={base}>
                <div onClick={this.toggleOpen} style={{display:'flex', alignItems: 'center'}}>
                    <label>{ label }</label>
                    <Chevron style={{marginLeft: 'auto'}}/>
                </div>
                { open ? <div style={{padding:'1em', backgroundColor: 'rgba( 1, 1, 1, 0.04 )', borderRadius:2}}>{ value() }</div> : null }
        </div>
    }
}


// Folder = radium( Folder )


Folder.defaultProps = {

    label: 'Folder',
    onChange: a=>a

}


Folder.propTypes = {

    // value : PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.array,
    // ]).isRequired,

    value: PropTypes.func.isRequired,


    onChange: PropTypes.func,


    label: PropTypes.string,


    style: PropTypes.object

}

var floatRight = {
    // float: 'right'
}

export default Folder
