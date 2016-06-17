'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', () => {

    it('renders the correct label', () => {

        const label = 'A label';
        const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_checkbox2.default, { label: label }));
        expect(wrapper.text()).toBe(label);
    });

    it('renders the correct value', () => {

        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_checkbox2.default, { value: true }));
        expect(wrapper.find('input[checked="checked"]')).toBeTruthy();
    });

    it('expects the `onChange` event to be called with the correct value', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_checkbox2.default, { value: false, onChange: on.change }));
        wrapper.simulate('click');
        expect(on.change).toHaveBeenCalledWith(true);
    });
});
// import sinon from 'sinon';