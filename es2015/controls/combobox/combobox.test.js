import React from 'react'
import { shallow, mount } from 'enzyme'
// import sinon from 'sinon';
import ComboBox from './combobox'

describe( 'ComboBox', () => {

    it( 'renders the correct label', () => {

        const label = 'A label'
        const wrapper = mount(<ComboBox label={label}/>)
        console.log( wrapper.text() )
        expect( wrapper.text() ).toBe( label )

    })


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

})
