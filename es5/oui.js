'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oui = undefined;

var _imperativeApi = require('./imperative-api');

var _imperativeApi2 = _interopRequireDefault(_imperativeApi);

var _annotate = require('./annotate');

var _colorpicker = require('./controls/colorpicker');

var _combobox = require('./controls/combobox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let oui = exports.oui = (0,
// p.panel = panel
// p.annotate = annotate
_imperativeApi2.default)();exports.default = { panel: _imperativeApi2.default, annotate: _annotate.annotate, color: _colorpicker.color, combo };