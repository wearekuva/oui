'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _textinput = require('./textinput');

var _textinput2 = _interopRequireDefault(_textinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextInput', () => {

    it('renders the correct label', () => {

        const label = 'A label';
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_textinput2.default, { label: label }));
        expect(wrapper.text()).toBe(label);
    });

    it('renders the correct value', () => {

        const value = 'A value';
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_textinput2.default, { value: value }));
        expect(wrapper.find({ value })).toBeTruthy();
    });

    it('change event fires with correct value', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const change = 'Change!';
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_textinput2.default, { onChange: on.change }));
        wrapper.find('input').simulate('input', { target: { value: change } });
        expect(on.change).toHaveBeenCalled();
    });
});
//import sinon from 'sinon';