import React, { PropTypes } from 'react'
import { annotate } from '../../annotate'
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

class ComboBox extends React.Component {

    render({ label, options, value, onChange }) {

        let isArray = Array.isArray( options )
        let valueSelected = false

        var optionsElems = [],
            arrOptions = []

        for( var i in options ){
            let element;
            arrOptions.push( options[i] )
            if( options[i] === value && !valueSelected){
                valueSelected = true
                element = <option key={i} value={options[i]} selected >{ isArray? options[i] : i }</option>
            } else {
                element = <option key={i} value={options[i]}>{ isArray? options[i] : i }</option>
            }
            optionsElems.push( element )
        }

        return <div style={base}>
            <label>{ label }</label>
            <select onChange={ e => onChange( arrOptions[e.target.selectedIndex] )} style={defaultStyle}>{ optionsElems }</select>
        </div>

    }
}

// ComboBox = radium( ComboBox )

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
        PropTypes.arrayOf( PropTypes.any ).isRequired,
        PropTypes.objectOf( PropTypes.any ).isRequired,
    ]),

    value: PropTypes.any.isRequired,

    onChange: PropTypes.func

}

export default ComboBox
