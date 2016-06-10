'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oneOf = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _combobox = require('./combobox');

var _combobox2 = _interopRequireDefault(_combobox);

var _annotate = require('../../annotate');

var _withChangeObject = require('../with-change-object');

var _withChangeObject2 = _interopRequireDefault(_withChangeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _combobox2.default;
let oneOf = exports.oneOf = options => (0, _annotate.annotate)(_extends({}, options, { control: (0, _withChangeObject2.default)(_combobox2.default) }));