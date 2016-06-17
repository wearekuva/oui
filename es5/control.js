'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preactCompat = require('preact-compat');

var React = _interopRequireWildcard(_preactCompat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Component => React.isValidElement(React.createElement(Component, null)) && Component.propTypes && typeof Component.propTypes === 'object' && typeof Component.propTypes.value === 'function';
/*
    Validates a control.

    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
    object containing a `value` field. `onChange` and `label` are optional.*
*/