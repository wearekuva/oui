
/*
    Validates an object against a components `propTypes`
*/

import warn from './warn'


export default ( prop, propName,  Comp ) => {

    let name = Comp.displayName || Comp.name
	let err = Comp.propTypes.value( prop, propName, name, 'prop' )
    warn( err, err ? err.message : '' );

}
