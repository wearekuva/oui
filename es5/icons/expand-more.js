'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _preactSvg = require('preact-svg');

var _preactSvg2 = _interopRequireDefault(_preactSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = props => _preact2.default.h(
    _preactSvg2.default,
    {
        fill: 'currentColor',
        fit: 'true',
        height: '1em', width: '1em',
        viewBox: '0 0 40 40',
        preserveAspectRatio: 'xMidYMid meet',
        style: _extends({ verticalAlign: 'middle' }, props.style) },
    _preact2.default.h(
        'g',
        null,
        _preact2.default.h('path', { d: 'm27.7 14.3l2.3 2.3-10 10-10-10 2.3-2.3 7.7 7.7z' })
    )
);