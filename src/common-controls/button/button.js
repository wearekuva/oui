import React from 'preact-compat'
// import radium from 'radium'
import { base, highlight } from '../../controls/styles'

let defaultStyle = {
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    padding: '1em',
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

let Button = props => <button {...props} style={{ ...base, ...defaultStyle, ...props.style }} >{ props.label }</button>


// Button = radium( Button )

Button.defaultProps = {

    label: 'Button'

}

Button.propTypes = {


    /**
     * A text label
     */
    label: React.PropTypes.string,


    /**
     * Optional component styling
     */
    style: React.PropTypes.object


}

export default Button
