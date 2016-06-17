'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _numericstepper = require('../numericstepper');

var _numericstepper2 = _interopRequireDefault(_numericstepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Slider', () => {

    it('contains a numeric stepper', () => {

        const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_slider2.default, { value: 5 }));
        expect(wrapper.find(_numericstepper2.default)).toBeTruthy();
    });

    it('renders the correct label', () => {

        const label = 'A label';
        const component = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, { label: label, value: 5 }));
        expect(component.find('label').text()).toBe(label);
    });

    it('triggers an `onChange`', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const component = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, { value: 4, onChange: on.change }));
        component.find('svg').simulate('mousedown', { preventDefault: _ => _, clientX: 10 });
        expect(on.change).toHaveBeenCalled();
    });

    it('triggers an `onChange` from the NumericStepper', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const component = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, { value: 4, onChange: on.change }));
        const stepper = component.find(_numericstepper2.default);
        stepper.find('input').get(0).value = 5;
        stepper.find('input').simulate('change');
        expect(on.change).toHaveBeenCalledWith(5);
    });

    it('triggers an `onChange` from the mousemove', () => {

        let on = { change: _ => _ };
        spyOn(on, 'change');
        const component = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, { value: 4, onChange: on.change }));
        component.find('svg').simulate('mousedown', { preventDefault: _ => _, clientX: 10 });
        component.find('svg').simulate('mousemove', { preventDefault: _ => _, clientX: 12 });
        component.find('svg').simulate('mouseup', { preventDefault: _ => _, clientX: 10 });
        expect(on.change).toHaveBeenCalled();
    });

    it('does not render a `NumericStepper` if `includeStepper` is false', () => {

        const label = 'A label';
        const component = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, { includeStepper: false, value: 5, label: label }));
        expect(component.find(_numericstepper2.default).length).toBe(0);
    });
});