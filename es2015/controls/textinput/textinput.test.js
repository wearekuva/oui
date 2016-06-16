import React from 'react'
import {shallow, mount} from 'enzyme'
//import sinon from 'sinon';
import TextInput from './textinput'

describe( 'TextInput', () => {


    it('renders the correct label', () => {

        const label = 'A label'
        const wrapper = mount(<TextInput label={label}/>)
        expect( wrapper.text() ).toBe( label )

    })


    it('renders the correct value', () => {

        const value = 'A value'
        const wrapper = mount(<TextInput value={value}/>)
        expect( wrapper.find({ value })).toBeTruthy()

    })


    it('change event fires with correct value', () => {

        let on = { change: _ => _ }
        spyOn( on, 'change' )
        const change = 'Change!'
        const wrapper = mount(<TextInput onChange={on.change}/>)
        wrapper.find('input').simulate('input', { target:{ value: change}});
        expect( on.change ).toHaveBeenCalled()

    })

})
