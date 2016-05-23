import React, { PropTypes } from 'react'
import radium from 'radium'
import { base } from '../styles'


let defaultStyle = {
    float:'right',
    ":focus":{
        outline:'none'
    }
}

/**
    Another simple component. The Combobox provides a basic wrapper around the
    native form element with support for an array of strings, an array
    of key value tuples, or an object.
*/

let ComboBox = ({ label, options, value, onChange }) => {

    let isArray = Array.isArray( options )

    var optionsElems = [<option key={ value.toString() } value={value}>{ isArray? value: value.toString() }</option>]

    for( var i in options ){
        optionsElems.push( <option key={i} value={options[i]}>{ isArray? options[i] : i }</option> )
    }

    return <div style={base}>
        <label>{ label }</label>
        <select onChange={ e => onChange( e.target.value )} style={defaultStyle}>{ optionsElems }</select>
    </div>

}

ComboBox = radium( ComboBox )

ComboBox.defaultProps = {

    /**
	 * A text label
	 */
    label:'ComboBox',

    /**
	 * An array of options to populate the combobox
	 */
    options:[],

    /**
	 * A callback triggered when the component updates
	 */
    onChange:a=>a
}

ComboBox.propTypes = {

    label: PropTypes.any,

    options: PropTypes.oneOfType([
        PropTypes.arrayOf( PropTypes.string ).isRequired,
        PropTypes.arrayOf( PropTypes.arrayOf( PropTypes.any )).isRequired,
        PropTypes.objectOf( PropTypes.any ).isRequired,
    ]),

    value: PropTypes.bool.isRequired,

    onChange: PropTypes.func

}

export default ComboBox
