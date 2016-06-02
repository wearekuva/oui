import test from 'ava'
import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon';
import NumericStepper from './numericstepper'

test('renders correct label', t => {
    const label = 'A label'
    const component = shallow(<NumericStepper label={label}/>)
    t.is( component.find('label').text(), label )
});

test('renders correct value', t => {
    const value = 4
    const component = shallow(<NumericStepper value={value}/>)
    t.is( component.find({ value }).length, 1 )
});

test('responds to change events', t => {
    const onChange = sinon.spy()
    const component = mount(<NumericStepper value={4} onChange={onChange}/>)
    component.find('input').get(0).value = 5
    component.find('input').simulate( 'change' )
    t.is( onChange.called, true )
});

test('satisfies minimum constraint', t => {
    const value = 4
    const min = 5
    const component = mount(<NumericStepper value={value} min={min}/>)
    t.is( parseFloat( component.find('input').get(0).value ), min )
});

test('satisfies maximum constraint', t => {
    const value = 4
    const max = 3
    const component = mount(<NumericStepper value={value} max={max}/>)
    t.is( parseFloat( component.find('input').get(0).value ), max )
});

// test.todo( 'Validates input' )
// test.todo( 'Change even fires with correct value' )

// test('change event fires with correct value', t => {
//     const onChange = sinon.spy();
//     const change = 'Change!'
//     const wrapper = shallow(<TextInput onChange={onChange}/>)
//     wrapper.find('input').simulate('change', { target:{ value: change}});
//     t.is( onChange.calledWith( change ), true )
// });
