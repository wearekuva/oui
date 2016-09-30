/** @jsx React.h */
import React from 'preact'
import PropTypes from 'proptypes'
import { base } from '../styles'

/**
 	Another stupidly simple component, it effectively wraps the native checkbox.
	Documentation included for completeness
 */
class Checkbox extends React.Component {

  render () {
    const { value, label, onChange } = this.props

    return <div style={{ ...base, ...defaultStyle, alignItems: 'center' }} onClick={evt => onChange(!value)}>
			<label style={base}>{label}</label>
			<input checked={value} style={alignRight} type='checkbox' onChange={evt => onChange(evt.target.checked)} />
		</div>
  }
}

// Checkbox = radium( Checkbox )

Checkbox.propTypes = {

  /**
   * A text label
   */
  label: PropTypes.string,

  /**
   * Determines whether the element is checked or not.
   */
  value: PropTypes.bool,

  /**
   * A callback triggered when the checkbox is toggled
   */
  onChange: PropTypes.func

}

Checkbox.defaultProps = {
  label: 'Checkbox',
  value: false,
  onChange: a => a
}

var defaultStyle = {
  display: 'flex'
}

var alignRight = {
  marginLeft: 'auto'
}

export default Checkbox
