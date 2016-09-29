
/*
    This HOC wraps the HSV ColorPicker in a stateful way to prevent loss of
    information in degenerate color conversions.

    Mapping { h, s, v } => { r, g, b } and back again, will lose information if
    { s, v } === 0

*/

/** @jsx React.h */
import React from 'preact'

let isDegenerate = ({ h, s, v }) => ( s === 0 || v === 0 )

export default Comp => class RGB2HSV extends React.Component {

    constructor(){
        super()

        this.state = {value:null}

        this.conditionalChange = value => {
            this.setState( isDegenerate( value ) ? { value } : { value:null })
            this.props.onChange( value )
        }

    }

    render(){

        return <Comp { ...this.props }
            value={ this.state.value || this.props.value }
            onChange={change => this.conditionalChange( change )} />

    }
}
