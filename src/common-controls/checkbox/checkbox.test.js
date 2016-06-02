import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon';
import Checkbox from './checkbox'

test('renders correct label', t => {
    const label = 'A label'
    const wrapper = shallow(<Checkbox label={label}/>)
    t.is( wrapper.text(), label )
});

test('change event fires with correct value', t => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Checkbox value={false} onChange={onChange}/>)
    wrapper.find('label').simulate('click');
    t.is( onChange.calledWith( true ), true )
});
