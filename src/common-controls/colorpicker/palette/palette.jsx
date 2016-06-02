import React from 'react'
import radium from 'radium'
import Colr from 'colr'
import { PropTypes } from 'react'
import Button from '../../button'
import { base } from '../../styles'

/**
 * The ColorButton is simply a coloured button used as
 * square glyph in the colour palette
 */
let ColorButton = props => {

    let { value, onClick } = props

    let color = Colr.fromHsvObject( value ).toHex()

    let style = {
        backgroundColor: color,
        width: '1em', height: '1em',
        marginLeft: '0.3em',
        marginBottom: '0.5em',
        marginRight: '0.3em',
        padding: '0.7em',
        display: 'inline-block',
        ':hover':{
            backgroundColor: color
        }
    }

    return <Button {...props} style={style} />

}


class Palette extends React.Component {

    constructor(){
        super()
        this.state = {hover:null}
    }

    render(){

        let { values, onSelect, onDeselect } = this.props,
            { hover } = this.state

        //
        let areColoursRemoveable = onDeselect !== undefined

        // If we have no colors then don't bother showing anything
        if( !values || values.length === 0 ) return null

        return <div>
            { values.map(( color, i ) => <ColorButton key={i} value={color}
                label={ i === hover ? '-' : '' }
                onMouseOver={ e => ( areColoursRemoveable && e.shiftKey ? this.setState({hover:i}) : null )}
                onMouseOut={ areColoursRemoveable ? e => this.setState({hover:null}) : null }
                onClick={ e => ( e.shiftKey ? onDeselect( color, i ) : onSelect( color ))}/>
            )}
        </div>

    }
}

Palette.defaultProps = {

    /**
     * An array of colors
     */

    values: [],

    onSelect: a=>a
}

Palette.propTypes = {


    values: PropTypes.arrayOf(
        PropTypes.shape({ h: PropTypes.number.isRequired, s: PropTypes.number.isRequired, v: PropTypes.number.isRequired })
    ).isRequired,


    onSelect: PropTypes.func,


    onDeselect: PropTypes.func,


    /**
     * Optional component styling
     */
    style: React.PropTypes.object
}

var style = {
    margin: '0.5em'
}

export default Palette
