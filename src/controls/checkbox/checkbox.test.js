import React from 'react'
import { shallow, mount } from 'enzyme'
// import sinon from 'sinon';
import Checkbox from './checkbox'

describe( 'Checkbox', () => {

    it( 'renders the correct label', () => {

        const label = 'A label'
        const wrapper = shallow(<Checkbox label={label}/>)
        expect( wrapper.text() ).toBe( label )

    })


    it( 'renders the correct value', () => {

        const wrapper = mount(<Checkbox value={true}/>)
        expect( wrapper.find('input[checked="checked"]') ).toBeTruthy()

    })


    it( 'expects the `onChange` event to be called with the correct value', () => {

        let on = { change : _ => _ }
        spyOn( on, 'change' )
        const wrapper = shallow(<Checkbox value={false} onChange={on.change}/>)
        wrapper.simulate('click');
        expect( on.change ).toHaveBeenCalledWith( true )

    })

})
