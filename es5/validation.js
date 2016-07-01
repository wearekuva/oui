'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidControl = exports.validateProp = undefined;

var _warn = require('./warn');

var _warn2 = _interopRequireDefault(_warn);

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateProp = exports.validateProp = (prop, propName, Comp) => {

    let name = Comp.displayName || Comp.name;
    let err = Comp.propTypes.value(prop, propName, name, 'prop');
    (0, _warn2.default)(err, err ? err.message : '');
};

/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/

/*
    Validates an object against a components `propTypes`
*/

const isValidControl = exports.isValidControl = Control => _preact2.default.isValidElement(_preact2.default.createElement(Control, null)) && Control.propTypes && typeof Control.propTypes === 'object' && typeof Control.propTypes.value === 'function';