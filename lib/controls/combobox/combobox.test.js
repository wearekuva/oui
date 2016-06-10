'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _combobox = require('./combobox');

var _combobox2 = _interopRequireDefault(_combobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ComboBox', () => {

    it('renders the correct label', () => {

        const label = 'A label';
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_combobox2.default, { label: label }));
        console.log(wrapper.text());
        expect(wrapper.text()).toBe(label);
    });

    // it( 'renders the correct value', () => {
    //
    //     const wrapper = mount(<ComboBox value={'Test'}/>)
    //     expect( wrapper.find('input[checked="checked"]') ).toBeTruthy()
    //
    // })

    // it( 'expects the `onChange` event to be called with the correct value', () => {
    //
    //     let on = { change : _ => _ }
    //     spyOn( on, 'change' )
    //     const wrapper = shallow(<ComboBox value={true} onChange={on.change}/>)
    //     wrapper.find('select').simulate('change', { target:{ value: false }});
    //     expect( on.change ).toHaveBeenCalledWith( false )
    //
    // })
});
// import sinon from 'sinon';