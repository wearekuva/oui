import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon';
import TextInput from './textinput'

describe( 'TextInput', () => {


    it('renders the correct label', () => {

        const label = 'A label'
        const wrapper = shallow(<TextInput label={label}/>)
        expect( wrapper.text() ).toBe( label )

    })


    it('renders the correct value', () => {

        const value = 'A value'
        const wrapper = shallow(<TextInput value={value}/>)
        expect( wrapper.find({ value })).toBeTruthy()

    })


    it('change event fires with correct value', () => {

        const onChange = sinon.spy();
        const change = 'Change!'
        const wrapper = shallow(<TextInput onChange={onChange}/>)
        wrapper.find('input').simulate('change', { target:{ value: change}});
        expect( onChange.calledWith( change )).toBeTruthy()

    })

})
