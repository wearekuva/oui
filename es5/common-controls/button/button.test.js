'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('renders correct label', t => {
    const label = 'A label';
    const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_button2.default, { label: label }));
    t.is(wrapper.text(), label);
});

(0, _ava2.default)('click event fires', t => {
    const onButtonClick = _sinon2.default.spy();
    const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_button2.default, { onClick: onButtonClick }));
    wrapper.find('button').simulate('click');
    t.is(onButtonClick.calledOnce, true);
});