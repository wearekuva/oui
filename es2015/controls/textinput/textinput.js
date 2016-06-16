import React from 'preact-compat'
// import radium from 'radium'
import { base, highlight, secondary } from '../styles'

/**

	A simple wrapper around a editable text field. It pretty much does what you'd
	expect it to.

*/

class TextInput extends React.Component {


	render() {

		const { value, label, onChange, style } = this.props

		return <div style={{ ...base, ...style, display:'flex' }}>
			<label>{ label }</label>
	        <input type="text" value={value}
	            style={{ ...defaultStyle }} onInput={evt => onChange( evt.target.value )}/>
		</div>
	}
}

// TextInput = radium( TextInput )

TextInput.propTypes = {

	/**
	 * The default value for the text input field
	 */
	value: React.PropTypes.string,


	/**
	 * A function called when the text field changes
	 */
	onChange: React.PropTypes.func,


	/**
	 * A text label for the input field
	 */
	label: React.PropTypes.string,


    /**
     * Optional component styling
     */
    style: React.PropTypes.object

}

TextInput.defaultProps = {

    value: '',
    style: {width:'100%'},
	label: 'Text Input',
    onChange: a=>a

}

var defaultStyle = {
    fontFamily: 'inherit',
	fontSize: 'inherit',
	color: 'inherit',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: 'none',
    marginLeft:'auto',
    textAlign: 'right',
    borderBottom : '1px solid ' + secondary.color,
    backgroundColor : 'transparent',
    ":focus":{
        outline: 'none',
        borderBottom : '1px solid ' + highlight.color
    },
    ":hover":{
        borderBottom : '1px solid ' + highlight.color,
    }
}

export default TextInput
