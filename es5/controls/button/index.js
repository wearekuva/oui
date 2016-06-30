'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _annotate = require('../../annotate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;
let button = exports.button = options => (0, _annotate.annotate)(_extends({}, options, { control: _button2.default }));