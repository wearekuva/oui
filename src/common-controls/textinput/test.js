import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon';
import TextInput from './textinput'

test('renders correct label', t => {
    const label = 'A label'
    const wrapper = shallow(<TextInput label={label}/>)
    t.is( wrapper.text(), label )
});

test('renders correct value', t => {
    const value = 'A value'
    const wrapper = shallow(<TextInput value={value}/>)
    t.is( wrapper.find({ value }).length, 1 )
});

test('change event fires with correct value', t => {
    const onChange = sinon.spy();
    const change = 'Change!'
    const wrapper = shallow(<TextInput onChange={onChange}/>)
    wrapper.find('input').simulate('change', { target:{ value: change}});
    t.is( onChange.calledWith( change ), true )
});
