
/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/

import * as React from 'react'

export default Component => (

    React.isValidElement( <Component/> )
        && Component.propTypes
        && typeof Component.propTypes === 'object'
        && typeof Component.propTypes.value === 'function'

)
