'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _numericstepper = require('./numericstepper');

var _numericstepper2 = _interopRequireDefault(_numericstepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Stepper', () => {

    it('renders the correct label', () => {

        const label = 'A label';
        const component = (0, _enzyme.shallow)(_react2.default.createElement(_numericstepper2.default, { value: 5, label: label }));
        expect(component.find('label').text()).toBe(label);
    });

    it('renders the correct value', () => {

        const value = 4;
        const component = (0, _enzyme.shallow)(_react2.default.createElement(_numericstepper2.default, { value: value }));
        expect(component.find({ value })).toBeTruthy();
    });

    it('responds to change events', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const component = (0, _enzyme.mount)(_react2.default.createElement(_numericstepper2.default, { value: 4, onChange: on.change }));
        component.find('input').get(0).value = 5;
        component.find('input').simulate('change');
        expect(on.change).toHaveBeenCalledWith(5);
    });

    it('satisfies minimum constraint', () => {

        const value = 4;
        const min = 5;
        const component = (0, _enzyme.mount)(_react2.default.createElement(_numericstepper2.default, { value: value, min: min }));
        expect(parseFloat(component.find('input').get(0).value)).not.toBeGreaterThan(min);
    });

    it('satisfies maximum constraint', () => {

        const value = 4;
        const max = 3;
        const component = (0, _enzyme.mount)(_react2.default.createElement(_numericstepper2.default, { value: value, max: max }));
        expect(parseFloat(component.find('input').get(0).value)).not.toBeLessThan(max);
    });

    // test.todo( 'Validates input' )
    // test.todo( 'Change even fires with correct value' )
});
// import sinon from 'sinon';