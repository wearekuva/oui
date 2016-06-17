'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidControl = exports.validateProp = undefined;

var _warn = require('./warn');

var _warn2 = _interopRequireDefault(_warn);

var _preactCompat = require('preact-compat');

var React = _interopRequireWildcard(_preactCompat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateProp = exports.validateProp = (prop, propName, Comp) => {}

// let name = Comp.displayName || Comp.name
// let err = Comp.propTypes.value( prop, propName, name, 'prop' )
// warn( err, err ? err.message : '' );

/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/

;
/*
    Validates an object against a components `propTypes`
*/

const isValidControl = exports.isValidControl = Control => React.isValidElement(React.createElement(Control, null)) && Control.propTypes && typeof Control.propTypes === 'object' && typeof Control.propTypes.value === 'function';