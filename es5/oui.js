'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imperativeApi = require('./imperative-api');

var _imperativeApi2 = _interopRequireDefault(_imperativeApi);

var _combobox = require('./controls/combobox');

var _combobox2 = _interopRequireDefault(_combobox);

var _colorpicker = require('./controls/colorpicker');

var _annotate = require('./annotate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let oui = (0, _imperativeApi2.default)();

exports.default = { oui, panel: _imperativeApi2.default, annotate: _annotate.annotate, oneOf: _combobox.oneOf, color: _colorpicker.color };