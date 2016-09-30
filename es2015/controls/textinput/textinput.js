/** @jsx React.h */
import React from 'preact'
import PropTypes from 'proptypes'
// import radium from 'radium'
import { base, highlight, secondary } from '../styles'

/**

	A simple wrapper around a editable text field. It pretty much does what you'd
	expect it to.

*/

class TextInput extends React.Component {

  render () {
    const { value, label, onChange, style, pattern, onSubmit } = this.props
		const conditionOnChange = value => pattern.test(value) ? onChange(value) : null
		const conditionOnSubmit = value => pattern.test(value) ? onSubmit(value) : null

    return <div style={{ ...base, ...style, display: 'flex' }}>
       <label>{label}</label>
       <input type='text' value={value} style={{ ...defaultStyle }} maxLength='6'
         onInput={evt => conditionOnChange(evt.target.value)}
         onChange={evt => conditionOnSubmit(evt.target.value)} />
     </div>
  }
}

// TextInput = radium( TextInput )

TextInput.propTypes = {

  /**
   * The default value for the text input field
   */
  value: PropTypes.string,

  /**
   * A function called when the text field changes
   */
  onChange: PropTypes.func,

  /**
   * A function called when the enter key is pressed
   */
  onSubmit: PropTypes.func,

  /**
   * A text label for the input field
   */
  label: PropTypes.string,

  /**
   * Optional component styling
   */
  style: PropTypes.object,

  /**
     * Optional regexp to validate user input
     */
  pattern: PropTypes.object

}

TextInput.defaultProps = {
  value: '',
  style: {width: '100%'},
  label: 'Text Input',
  onChange: a => a,
  onSubmit: a => a,
  pattern: /.*/

}

var defaultStyle = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: 'none',
  marginLeft: 'auto',
  textAlign: 'right',
  borderBottom: '1px solid ' + secondary.color,
  backgroundColor: 'transparent',
  ':focus': {
    outline: 'none',
    borderBottom: '1px solid ' + highlight.color
  },
  ':hover': {
    borderBottom: '1px solid ' + highlight.color
  }
}

export default TextInput
