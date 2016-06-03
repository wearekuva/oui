import React, { Component, PropTypes } from 'react'
import HSVColorPicker from './hsv/hsv-colorpicker'
import Colr from 'colr'
import Palette from './palette/palette'
import FaAdd from 'react-icons/lib/md/add';
import Button from '../button'
import { base, secondary, highlight } from '../styles'
import getConverterForColorType from './color-converter'
import { rgbObject, rgbArray, hsvObject, hslObject } from './validators'


/**

A collapsible color picker with colour palette. One is assigned by you, the
developer, the other is defined by the end user which persists across page refreshes.
This means that in addition to any pallete you provide, the user can also add and save
their own colours, much in the same way as photoshop.

To save the current color click the `+` icon to save it to the users palette.
Shift click to remove it.

The users colour palette is saved to [localStorage](localStorage), this means
each domain will have it's own unique user pallete, meaning `localhost` will differ
from `staging.com`.

*/


class ColorPicker extends Component {

    constructor(){
        super()
        this.state = {colors:[]}


        this.getSystemColors = _ => JSON.parse( localStorage.getItem( 'oui.colorpicker' )) || []
        this.setSystemColors = colors => localStorage.setItem( 'oui.colorpicker', JSON.stringify( colors ))

        this.onColorChange = hsv => {

            let color = getConverterForColorType( this.props.value ).invert( hsv )
            this.props.onChange( color )
        }
    }


    onAddColorClick( color ){

        let colors = this.getSystemColors()
        colors.push( color )
        this.setSystemColors( colors )
        this.forceUpdate()
    }


    onRemoveColorClick( color, index ){

        let colors = this.getSystemColors()
        colors.splice( index, 1 )
        this.setSystemColors( colors )
        this.forceUpdate()
    }


    componentWillMount(){
        this.setState({ open: this.props.open })
    }


    render(){

        let { value, label, onChange, style, palette } = this.props,
            { colors, open } = this.state,
            toHsv = getConverterForColorType( value ),
            hsvColor = toHsv( value )


        return <div style={{ ...base, ...style, height:'auto'}}>
            <div onClick={ v => this.setState({open:!open})}>
                { label }
                <span style={{ ...colorDropletStyle, backgroundColor:Colr.fromHsvObject( hsvColor ).toHex() }}></span>
            </div>
            { open ?
                <div>
                    <HSVColorPicker style={ style } value={ hsvColor } onChange={ this.onColorChange } />
                    <Palette key={'user-palette'} values={ palette.map( toHsv ) } onSelect={ this.onColorChange } />
                    <Palette key={'system-palette'} values={ this.getSystemColors() } onSelect={ this.onColorChange } onDeselect={ this.onRemoveColorClick.bind( this ) } />
                    <span style={{ ...base, ...addButton }}><FaAdd onClick={ e => this.onAddColorClick( toHsv( value )) }/></span>
                </div>
            : null }
        </div>
    }
}

ColorPicker.displayName = 'ColorPicker'


let ValuePropTypeError = ( propName, componentName ) => new Error( 'Invalid prop `' + propName + '` supplied to' +
  ' `' + componentName + '`. Validation failed.' )


let rgbObjectPropType = ( props, propName, componentName ) => {
    if( !rgbObject( props[propName] )){
        return ValuePropTypeError( propName, componentName )
    }
}

let rgbArrayPropType = ( props, propName, componentName ) => {
    if( !rgbArray( props[propName] )){
        return ValuePropTypeError( propName, componentName )
      }
}

let hsvObjectPropType = ( props, propName, componentName ) => {
    if( !hsvObject( props[propName] )){
        return ValuePropTypeError( propName, componentName )
    }
}

ColorPicker.propTypes = {


    /**
     * The text label to display
     */
    label: PropTypes.string,


    /**
     *  If true, the color picker will be initially open
     */
    open : PropTypes.bool,


    /**
     *  An color object
     */
    value: PropTypes.oneOfType([
        rgbObjectPropType,
        rgbArrayPropType,
        hsvObjectPropType
    ]),


    /**
     * An array of colors used as a palette
     */
    palette: PropTypes.oneOfType([
        PropTypes.arrayOf( rgbObjectPropType ),
        PropTypes.arrayOf( rgbArrayPropType ),
        PropTypes.arrayOf( hsvObjectPropType )
    ]),


    /**
     * Optional component styling
     */
    style: PropTypes.object,


    /**
     *  A function triggered when the color changes
     */
    onChange: PropTypes.func


}


ColorPicker.defaultProps = {
    open: false,
    label: 'ColorPicker',
    value:{h:1,s:50,v:50},
    palette: [],
    onChange: a=>a
}

var addButton = {
    ':hover': secondary,
    // marginLeft: '0.3em',
    // marginRight: '0.3em'
}


var colorDropletStyle = {
    borderRadius:"50%",
    width: '1em',
    height: '1em',
    float:'right'
}

export default ColorPicker
