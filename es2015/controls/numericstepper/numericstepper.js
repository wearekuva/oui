/** @jsx React.h */
import React from 'preact'
import PropTypes from 'proptypes'
// import radium from 'radium'
import { clamp } from '../../math'
import { base, secondary, highlight } from '../styles'
import shallowCompare from '../../shallow-compare'

/**
    This component is an alternative way to control a number. It's generally used
    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
    although you can optionally supply either.
*/

class NumericStepper extends React.Component {

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    let { label, min, max, step, style, value } = this.props
    value = clamp(value, min, max)
    let validate = v => step !== undefined
      ? Math.round(v * (1 / step)) / (1 / step)
      : v

    value = validate(value)
    let onChange = e => {
      e.preventDefault()
      let value = parseFloat(e.currentTarget.value)
      if (!isNaN(value)) this.props.onChange(validate(value))
    }

    return <div style={{ ...base, display: 'flex', alignItems: 'baseline', ...style }}>
      <label>{label}</label>
      <style>
       {`
        input[type=number] {
            -moz-appearance:textfield
        }

        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button{
            margin: 0
            -webkit-appearance: none
        }
      `}
      </style>
      <input type='number' {...this.props} style={defaultStyle} value={value} onInput={onChange} onChange={onChange} ref={ref => (this.domRef = ref)} />
    </div>
  }
}

// NumericStepper = radium( NumericStepper )

NumericStepper.propTypes = {

  /**
   *  A text label
   */
  label: PropTypes.string,

  /**
   *  The value of the slider
   */
  value: PropTypes.number.isRequired,

  /**
   *  Specifies the minimum value for the component
   */
  min: PropTypes.number,

  /**
   *  Specifies the maximum value for the component
   */
  max: PropTypes.number,

  /**
   * Specifies the intervals step
   */
  step: PropTypes.number,

  /**
	 * A callback triggered when the component updates
	 */
  onChange: PropTypes.func,

  /**
   * Optional component styling
   */
  style: PropTypes.object

}

NumericStepper.defaultProps = {
  label: 'NumericStepper',
  min: 0,
  max: 100,
  style: {width: '100%'},
  onChange: a => a

}

var defaultStyle = {
  fontFamily: 'inherit',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: secondary.color,
  borderRadius: 2,
  backgroundColor: 'transparent',
  outline: 'none',
  textAlign: 'left',
  width: 30,
  fontSize: base.fontSize,
  // lineHeight: '15  px',
  color: base.color,
  // float:'right',
  marginLeft: 'auto',
  ':focus': {
    borderColor: highlight.color
  },
  ':hover': {
    borderColor: highlight.color
  }
}

export default NumericStepper
