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

var _withChangeObject = require('./controls/with-change-object');

var _withChangeObject2 = _interopRequireDefault(_withChangeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let oui = (0, _imperativeApi2.default)();

// oui.annotate = annotate
// oui.panel = panel
// oui.oneOf = oneOf

exports.default = { oui, panel: _imperativeApi2.default, annotate: _annotate.annotate, oneOf: _combobox.oneOf, color: _colorpicker.color };
// export { panel, oneOf }
// export oneOf