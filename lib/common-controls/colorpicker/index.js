'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colorpicker = require('./colorpicker');

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _annotate = require('../../annotate');

var _withChangeObject = require('../../controls/with-change-object');

var _withChangeObject2 = _interopRequireDefault(_withChangeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _colorpicker2.default;
let color = exports.color = options => (0, _annotate.annotate)(_extends({}, options, { control: (0, _withChangeObject2.default)(_colorpicker2.default) }));