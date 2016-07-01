/** @jsx React.h */
import React, { h } from 'preact'
import PropTypes from 'proptypes'
import { base, highlight } from '../../controls/styles'

let defaultStyle = {
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    padding: '1em',
    borderRadius: 2,
    verticalAlign: 'middle',
    textAlign: 'center',
    lineHeight: '50%',
    ':hover':{
        backgroundColor: highlight.color,
        color: 'white'
    }
}

/**
    The Button, arguably most basic of all components. You hover, you click, you rollout.
    Pretty self explanatory. Documentation included for completeness
*/

let Button = props => <button {...props} style={{ ...base, ...defaultStyle, ...props.style }} onClick={props.value} >{ props.label }</button>


Button.defaultProps = {

    label: 'Button'

}

Button.propTypes = {

    /*
        function to call on click
    */
    value: PropTypes.func.isRequired,

    /**
     * A text label
     */
    label: PropTypes.string,


    /**
     * Optional component styling
     */
    style: PropTypes.object


}

export default Button
