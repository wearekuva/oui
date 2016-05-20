import React from 'react'
import radium from 'radium'
import { clamp } from 'math'
import { base, secondary, highlight } from '../styles'
import shallowCompare from 'react-addons-shallow-compare'


/**
    This component is an alternative way to control a number. It's generally used
    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
    although you can optionally supply either.
*/

class NumericStepper extends React.Component{


    shouldComponentUpdate( nextProps, nextState ){
        return shallowCompare( this, nextProps, nextState )
    }


    render(){

        let { label, min, max, step, style } = this.props,
            validate = v => Math.round( clamp( v, min, max ) * ( 1 / step )) / ( 1 / step ),
            value = validate( this.props.value ),
            onChange = e => {

                e.preventDefault()

                let value = parseFloat( e.currentTarget.value )

                if( !isNaN( value )) this.props.onChange( validate( value ))
            }

        return <div style={[ base, style ]}>
            <label >{ label }</label>
            <style>{`
                input[type=number] {
                    -moz-appearance:textfield;
                }

                input::-webkit-inner-spin-button,
                input::-webkit-outer-spin-button{
                    margin: 0;
                    -webkit-appearance: none;
                }
            `}</style>
            <input type='number' {...this.props} style={ defaultStyle } value={value} onInput={ onChange } onChange={ onChange } ref={ref => (this.domRef = ref )} />
        </div>
    }
}

// NumericStepper = radium( NumericStepper )

NumericStepper.propTypes = {

    /**
     *  A text label
     */
    label: React.PropTypes.string,


    /**
     *  The value of the slider
     */
    value: React.PropTypes.number.isRequired,


    /**
     *  Specifies the minimum value for the component
     */
    min: React.PropTypes.number,


    /**
     *  Specifies the maximum value for the component
     */
    max: React.PropTypes.number,


    /**
     * Specifies the intervals step
     */
    step: React.PropTypes.number,


    /**
	 * A callback triggered when the component updates
	 */
    onChange: React.PropTypes.func,


    /**
     * Optional component styling
     */
    style: React.PropTypes.object

}

NumericStepper.defaultProps = {

    label:'NumericStepper',
    min: 0,
    max: 100,
    style:{width:'100%'},
    step: 0.1,
    onChange: a=>a

}

var defaultStyle = {
    fontFamily: 'inherit',
    borderWidth : 1,
    borderStyle: 'solid',
    borderColor: secondary.color,
    borderRadius: 2,
    backgroundColor : 'transparent',
    outline: 'none',
    textAlign: 'center',
    // float:'right',
    ":focus":{
        borderColor : highlight.color
    },
    ":hover":{
        borderColor : highlight.color,
    }
}


export default NumericStepper
