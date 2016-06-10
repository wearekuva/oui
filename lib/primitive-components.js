'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slider = require('./controls/slider');

var _slider2 = _interopRequireDefault(_slider);

var _checkbox = require('./controls/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _textinput = require('./controls/textinput');

var _textinput2 = _interopRequireDefault(_textinput);

var _folder = require('./controls/folder');

var _folder2 = _interopRequireDefault(_folder);

var _withChangeObject = require('./controls/with-change-object');

var _withChangeObject2 = _interopRequireDefault(_withChangeObject);

var _withTree = require('./controls/with-Tree');

var _withTree2 = _interopRequireDefault(_withTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new Map([['number', (0, _withChangeObject2.default)(_slider2.default)], ['string', (0, _withChangeObject2.default)(_textinput2.default)], ['boolean', (0, _withChangeObject2.default)(_checkbox2.default)], ['object', (0, _withChangeObject2.default)((0, _withTree2.default)(_folder2.default))]]);