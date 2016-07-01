'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Preact = require('Preact');

var _Preact2 = _interopRequireDefault(_Preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component => _Preact2.default.isValidElement(_Preact2.default.createElement(Component, null)) && Component.propTypes && typeof Component.propTypes === 'object' && typeof Component.propTypes.value === 'function';
/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/