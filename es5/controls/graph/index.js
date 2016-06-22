'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graph = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

var _annotate = require('../../annotate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _graph2.default;
let graph = exports.graph = options => (0, _annotate.annotate)(_extends({}, options, { control: _graph2.default }));