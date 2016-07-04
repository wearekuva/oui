'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imperativeApi = require('./imperative-api');

var _imperativeApi2 = _interopRequireDefault(_imperativeApi);

var _annotate = require('./annotate');

var _annotate2 = _interopRequireDefault(_annotate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let p = (0, _imperativeApi2.default)();
p.panel = _imperativeApi2.default;
p.annotate = _annotate2.default;
exports.default = p;