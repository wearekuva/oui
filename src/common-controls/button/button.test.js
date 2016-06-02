import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon';
import Button from './button'

test('renders correct label', t => {
    const label = 'A label'
    const wrapper = shallow(<Button label={label}/>)
    t.is( wrapper.text(), label )
});

test('click event fires', t => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick}/>)
    wrapper.find('button').simulate('click');
    t.is( onButtonClick.calledOnce, true )    
});
