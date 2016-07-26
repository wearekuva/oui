/** @jsx React.h */
import React, { Component } from 'preact'
import SVG from 'preact-svg'
import PropTypes from 'proptypes'
import NumericStepper from '../numericstepper'
import shallowCompare from '../../shallow-compare'
import { map, clamp } from '../../math'
// import radium from 'radium'
import throttle from '../utils/throttle'
import { base, secondary, highlight } from '../styles'


/**
    A classic numerical slider, useful for representing numbers within a bounded
    range. It also contains a `NumericalStepper` for displaying the text value
    and entering values directly.
*/

class Slider extends React.Component{

    constructor(){

        super()


        this.state = {drag:false, rect:null}


        this.validate = value => {

            let { onChange, min, max, step } = this.props

            value = clamp( value, min, max )
            value = Math.round( value * ( 1 / step )) / ( 1 / step )

            return value
        }


        this.onNumericStepperChange = value => {
            this.props.onChange( this.validate( value ))
        }


        /*
            Compute the numerical value from a touch/mouse event
        */

        let computeValuefromMouseEvent = ( e, bounds ) =>
            map( e.clientX === undefined ? e.touches[0].clientX : e.clientX, bounds.left, bounds.right, this.props.min, this.props.max )



        /*
            Computes the value on mouse/touch down and triggers an `onChange`
        */

        this.onMouseDown = e => {

            e.preventDefault()

            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round( clamp( v, min, max ) * ( 1 / step )) / ( 1 / step )


            /*
                For performance reasons we pre calculate the bounding rect on
                mouse down, this means we don't need to do this on every mouse move
                event and therefore we avoid any layout thrashing.

                The caveat is that any sizing changes that occur between mousedown
                will cause mean the cached boundingRect is invalid and causes incorrect
                results. However because of performance gains, this is acceptable
                behaviour as changes to size are expected to be rare enough
            */
            var rect = e.currentTarget.getBoundingClientRect()


            this.setState({drag:true, rect })
            onChange( validate( computeValuefromMouseEvent( e, rect )))
        }



        /*
            On mouse/touch move, trigger an onChange event
        */

        this.onMouseMove = throttle( e => {
            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round( clamp( v, min, max ) * ( 1 / step )) / ( 1 / step )

            onChange( validate( computeValuefromMouseEvent( e, this.state.rect )))
        })


        this.onTouchMove = throttle( e => {

            e.preventDefault()

            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round( clamp( v, min, max ) * ( 1 / step )) / ( 1 / step )

            onChange( validate( computeValuefromMouseEvent( e, this.state.rect )))
        })


        /*
            changes the dragging state
        */

        this.onMouseUp = e => {
            this.setState({drag:false})
        }
    }


    shouldComponentUpdate( nextProps, nextState ){
        return shallowCompare( this, nextProps, nextState )
    }


    componentDidUpdate (props, state) {
        if (this.state.drag && !state.drag) {
          document.addEventListener('mousemove', this.onMouseMove)
          document.addEventListener('mouseup', this.onMouseUp)
          document.addEventListener('touchmove', this.onTouchMove)
          document.addEventListener('touchend', this.onMouseUp)
        } else if (!this.state.drag && state.drag) {
          document.removeEventListener('mousemove', this.onMouseMove)
          document.removeEventListener('mouseup', this.onMouseUp)
          document.removeEventListener('touchmove', this.onTouchMove)
          document.removeEventListener('touchend', this.onMouseUp)
        }
    }



    render(){

        let { value, label, min, max, step, onChange, includeStepper, style } = this.props,
            stepperProps = { value, label, min, max, step, onChange }

        let offsetPercentage = map( clamp( value, min, max ), min, max, 0, 100 ) + '%'
        value = this.validate( value )

        return <div style={ base }>
            { includeStepper ? <NumericStepper {...stepperProps} onChange={ this.onNumericStepperChange }/> : null }
            <SVG width='100%' height="1em"
                style={ defaultStyle }
                onMouseDown={this.onMouseDown}
                onTouchStart={this.onMouseDown}>
                <rect width='100%' height="100%" style={{ ...defaultStyle, ...backgroundBar, ...style.backgroundBar }}/>
                <rect width='100%' height="100%" style={{ ...defaultStyle, ...bar, ...style.bar }} width={ offsetPercentage }/>
                <circle cy={'50%'} cx={offsetPercentage} r='0.5em' style={{ ...defaultStyle, ...thumb, ...style.thumb }}/>
            </SVG>
        </div>
    }
}

// Slider = radium( Slider )

Slider.propTypes = {

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
     *  If false, the numeric stepper is not displayed
     */
    includeStepper: PropTypes.bool,


    /**
     * Optional component styling
     */
    style: PropTypes.object,


}

Slider.defaultProps = {

    label: 'Slider',
    includeStepper: true,
    min: 0,
    max: 100,
    step: 1,
    onChange: a=>a,
    style:{width:'100%'}

}


var defaultStyle = {
    display: 'block',
    overflow:'visible',
    cursor: 'default',
    stroke: 'none',

    rx:2,
    ry:2
}

var thumb = {
    fill: 'none'
}

var backgroundBar = {
    fill: secondary.color
}

var bar = {
    fill: highlight.color
}


export default Slider
