import React, { Component, PropTypes } from 'preact-compat'
import radium from 'radium'
import NumericStepper from '../numericstepper'
import throttle from '../utils/throttle'
import shallowCompare from 'react-addons-shallow-compare'
import { base, highlight, secondary} from '../styles'
import { normalize, map, clamp } from 'math'


/**

    Another numerical control, that provides similar functionality to the
    [Slider](#Slider) but with different layout and more suited for touch
    enabled devices.

*/

class Dial extends Component {

    constructor(){

        super()

        this.state = {drag:false}

        this.onMouseDown = e => {
            e.preventDefault()
            this.setState({drag:true, value: this.props.value, dragValue: e.clientY == undefined ? e.touches[0].clientY : e.clientY })
        }

        this.onMouseUp = e => {
            this.setState({drag:false})
        }

        this.onMouseMove = throttle( e => {
            e.preventDefault()
            let y = e.clientY == undefined ? e.touches[0].clientY : e.clientY
            this.props.onChange( this.state.value + (( y- this.state.dragValue ) * -0.1 ))
        })
    }


    shouldComponentUpdate( nextProps, nextState ){
        return shallowCompare( this, nextProps, nextState )
    }


    componentDidUpdate (props, state) {
        if (this.state.drag && !state.drag) {
          document.addEventListener('mousemove', this.onMouseMove)
          document.addEventListener('mouseup', this.onMouseUp)
          document.addEventListener('touchmove', this.onMouseMove)
          document.addEventListener('touchend', this.onMouseUp)
        } else if (!this.state.drag && state.drag) {
          document.removeEventListener('mousemove', this.onMouseMove)
          document.removeEventListener('mouseup', this.onMouseUp)
          document.removeEventListener('touchmove', this.onMouseMove)
          document.removeEventListener('touchend', this.onMouseUp)
        }
    }



    render(){

        let { label, value, min, max, step, style, onChange } = this.props,
            stepperProps = { label, value, min, max, onChange }


        value = clamp( value, min, max )
        value = Math.round( value * ( 1 / step )) / ( 1 / step )
        value = normalize( value, min, max )

        let radius = style.width * 0.5,
            range = 0.8,
            circumference = 2.0 * Math.PI * radius,
            a = [ circumference * value * range, circumference ].join(' '),
            b = [ circumference , circumference ].join(' '),
            transform = 'rotate(' + String((( 1.0 - range ) * 0.5 ) * 360 + 90 ) + 'deg )'


        /*
            Using a styling trick with the stroke-dasharray property to create
            the dial outline.

            See https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/
            for future reference
        */

        return <div  style={[base, style, { height:'auto'}]}>
            <NumericStepper { ...stepperProps }/>
            <svg style={[svgStyle, {transform}]} width={style.width} height={style.width} xmlns="http://www.w3.org/2000/svg"
                ref={ref => this.domRef = ref}
                onMouseDown={this.onMouseDown}
                onTouchStart={this.onMouseDown}>
            <circle r={radius} cx={radius} cy={radius} strokeDasharray={b} fill='transparent' stroke={secondary.color} strokeWidth={radius}></circle>
            { value > 0 ? <circle r={radius} cx={radius} cy={radius} strokeDasharray={a} fill='transparent' stroke={highlight.color} strokeWidth={radius}/> : null }
            </svg>
        </div>
    }
}

Dial = radium( Dial )

Dial.propTypes = {

    /**
     *  A text label
     */
    label: PropTypes.string,


    /**
     *  The default value
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
    style: React.PropTypes.object,

}


Dial.defaultProps = {

    label: 'Dial',
    min: 0,
    max: 10,
    value: 5,
    step: 0.1,
    onChange: a=>a,
    style:{width:100, display:'inline-block'}

}


var svgStyle = {
    cursor: 'default',
    borderRadius: "50%"
}


export default Dial
