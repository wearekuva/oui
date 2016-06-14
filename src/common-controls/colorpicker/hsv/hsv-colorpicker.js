import React from 'preact-compat'
import hsvCatch from './catch-degenerate-hsv'
import Slider from '../../../controls/slider'
import NumericStepper from '../../../controls/numericstepper'
import { map } from '../../../math'
import throttle from '../../../controls/utils/throttle'
import { base, secondary } from '../../../controls/styles'
import shallowCompare from '../../../shallow-compare'


class HSVColorPicker extends React.Component {

    constructor(){

        super()

        this.state = {drag:false, boundingRect: null};

        let computeHsvaFromMouseEvent = ( e, bounds ) => {

            let x = e.clientX === undefined ? e.touches[0].clientX : e.clientX,
                y = e.clientY === undefined ? e.touches[0].clientY : e.clientY

            let value = this.props.value

            let h = value.h,
                s = ( x - bounds.left ) / bounds.width * 100,
                v = ( bounds.height - ( y - bounds.top )) / bounds.height * 100,
                a = this.props.value.a

            return a === undefined ? { h, s, v } : { h, s, v, a }
        }


        this.onMouseDown = e => {

            e.preventDefault()

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

            let hsv = computeHsvaFromMouseEvent( e, rect )
            this.setState({drag:true, boundingRect: rect })
            this.props.onChange( hsv )
        }


        this.onMouseMove = throttle( e => {
            e.preventDefault()
            if( this.state.drag ) this.props.onChange( computeHsvaFromMouseEvent( e, this.state.boundingRect ))
        })


        this.onMouseUp = e => {
            this.setState({drag:false})
        }


        this.onHueChange = h => {
            let { s, v, a } = this.props.value
            //
            // if( isDegenerate( this.props.value ) ){
            //     this.setState({ value:{ h, s, v, a }})
            // }else{
            //     this.setState({value:null})
                this.props.onChange({ h, s, v, a })
            // }
        }

        this.onSaturationChange = s => {
            let { h, v, a } = this.props.value
            this.props.onChange({ h, s, v, a })
        }

        this.onValueChange = v => {
            let { h, s, a } = this.props.value
            this.props.onChange({ h, s, v, a })
        }

        this.onAlphaChange = a => {
            let { h, s, v } = this.props.value
            this.props.onChange({ h, s, v, a })
        }
    }


    // shouldComponentUpdate( nextProps, nextState ){
    //
    //     let { h, s, v, a } = this.props.value,
    //         color = nextProps.value
    //
    //     return ( h !== color.h
    //         || s !== color.s
    //         || v !== color.v
    //         || a !== color.a )
    //         && shallowCompare( this, nextProps, nextState )
    //
    // }





    render(){


        let { label, onChange, value, style } = this.props,
            { h, s, v, a } = value


        // Preact does not pick up Components defaultProps
        style = style || HSVColorPicker.defaultProps.style


        // Used to prevent collisions between fill() refs
        let uuid = Math.floor( Math.random() * 999999999999999 )


        return <div>
            <div style={{ ...base, ...style }}>
                <svg width='100%' height='100%' version="1.1" xmlns="http://www.w3.org/2000/svg"
                    style={defaultStyle}
                    onMouseDown={this.onMouseDown}
                    onMouseMove={this.state.drag ? this.onMouseMove : null}
                    onMouseUp={this.onMouseUp}
                    onTouchStart={this.onMouseDown}
                    onTouchMove={this.state.drag ? this.onMouseMove : null}
                    onTouchEnd={this.onMouseUp}>
                    <defs>
                        <linearGradient id={"horizontal-gradient" + uuid }>
                            <stop offset="0%" stop-color="white"/>
                            <stop offset="100%" stop-color={"hsl("+h+",100%,50%)"}/>
                        </linearGradient>
                        <linearGradient id={"vertical-gradient" + uuid } x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="black" stop-opacity="0"/>
                            <stop offset="100%" stop-color="black"/>
                        </linearGradient>
                        <linearGradient id="alpha-gradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stop-color={"hsl("+h+",100%,50%)"} stop-opacity="0"/>
                            <stop offset="100%" stop-color={"hsl("+h+",100%,50%)"} stop-opacity="100"/>
                        </linearGradient>
                        <linearGradient id='hsv-gradient'>{ stops }</linearGradient>
                    </defs>
                    <rect width='100%' height='100%' style={rect} fill={'url(#horizontal-gradient'+uuid+')'}/>
                    <rect width='100%' height='100%' style={rect} fill={'url(#vertical-gradient'+uuid+')'}/>
                    <circle fill='none' stroke='white' stroke-width="1.5" r='0.3em' cx={s+'%'} cy={(100 - v)+'%'}/>
                </svg>
            </div>
            <Slider includeStepper={false} label={''} step={1} min={1} max={360} value={h} style={hueSlider} onChange={this.onHueChange}/>
            { a !== undefined ? <Slider includeStepper={false} label={'alpha'} step={0.001} min={0} max={1} value={a} style={alphaSlider} onChange={this.onAlphaChange}/> : null }
            <div style={{ ...base, ...stepperStyle }}>
                <NumericStepper key="h" style={componentLabels} step={1} min={1} max={360} value={Math.round(h)} onChange={this.onHueChange} label={'H'}/>
                <NumericStepper key="s" style={componentLabels} step={1} min={1} max={100} value={Math.round(s)} onChange={this.onSaturationChange} label={'S'}/>
                <NumericStepper key="v" style={componentLabels} step={1} min={1} max={100} value={Math.round(v)} onChange={this.onValueChange} label={'V'}/>
            </div>
        </div>

    }
}


HSVColorPicker.defaultProps = {
    label: 'HSVColorPicker',
    style:{ width:'100%', height: 150 },
    value:{ h:0, s:80, l:50 }
}

HSVColorPicker.propTypes = {

    /**
     *  A text label
     */
    label: React.PropTypes.string,


    /**
     * The default color of the component
     */
    value: React.PropTypes.shape({
        h: React.PropTypes.number.isRequired,
        s: React.PropTypes.number.isRequired,
        v: React.PropTypes.number.isRequired
    }).isRequired,


    /**
     * Optional component styling
     */
    style: React.PropTypes.object

}

let defaultStyle = {
    cursor: 'default',
    display: 'block'
 }

var hueSlider = {
    backgroundBar:{ fill:'url(#hsv-gradient)'},
    bar: { fill : 'none' },
    thumb: { fill : 'white' },
    padding: '1em'
}

var alphaSlider = {
    backgroundBar:{ fill:'url(#alpha-gradient)'},
    bar: { fill : 'none' },
    thumb: { fill : 'white' },
    padding: '1em'
}

var stepperStyle = {
    // marginLeft: '0.3em',
    // marginRight: '0.3em'
}

var componentLabels = {display:'inline'}

var colorDrop = {
    borderRadius:"50%",
    width: '1em',
    height: '1em',
    float:'right'
}

var rect ={
    rx: base.borderRadius,
    ry: base.borderRadius,
}


/*
    Creates an array of svg `<stop>` elements representing a full linear gradient
    from hue 0 -> 360 in a given number of steps
*/

var createLinearGradientOfSVGStops = steps => {

    let l = 0,
        i = 100/steps,
        stops = []

    while( l++ < steps ){
        stops.push(<stop offset={String(i*l)+"%"} key={l} stop-color={"hsl( "+(l*360/steps)+", 100%, 50% )"} />)
    }

    return stops
}

/*
    Pre calculate an array of `<stops>` to use as the slider gradient
*/
var stops = createLinearGradientOfSVGStops( 100 )




export default hsvCatch( HSVColorPicker )
