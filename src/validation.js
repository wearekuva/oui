
/*
    Validates an object against a components `propTypes`
*/

import warn from './warn'


export const validateProp = ( prop, propName,  Comp ) => {

    let name = Comp.displayName || Comp.name
	let err = Comp.propTypes.value( prop, propName, name, 'prop' )
    warn( err, err ? err.message : '' );

}


/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/

import React from 'react'

export const isValidControl = Control => (

    React.isValidElement( <Control/> )
        && Control.propTypes
        && typeof Control.propTypes === 'object'
        && typeof Control.propTypes.value === 'function'

)
