/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/
/** @jsx React.h */
import React from 'preact'

let VNode = React.h('').constructor
const REACT_ELEMENT_TYPE = (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7
let isValidElement = element => element && ((element instanceof VNode) || element.$$typeof === REACT_ELEMENT_TYPE)

export default Component => (

  isValidElement(<Component/>) &&
    Component.propTypes &&
    typeof Component.propTypes === 'object' &&
    typeof Component.propTypes.value === 'function'

)
