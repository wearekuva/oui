'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imperativeApi = require('./imperative-api');

var _imperativeApi2 = _interopRequireDefault(_imperativeApi);

var _annotate = require('./annotate');

var _annotate2 = _interopRequireDefault(_annotate);

var _colorpicker = require('./controls/colorpicker');

var _combobox = require('./controls/combobox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let oui = (0, _imperativeApi2.default)();
// p.panel = panel
// p.annotate = annotate
exports.default = { oui, panel: _imperativeApi2.default, annotate: _annotate2.default, controls: { color: _colorpicker.color, combo } };