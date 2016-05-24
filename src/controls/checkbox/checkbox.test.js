import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
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

        const onChange = sinon.spy();
        const wrapper = shallow(<Checkbox value={false} onChange={onChange}/>)
        wrapper.find('label').simulate('click');
        expect( onChange.calledWith( true )).toBeTruthy()

    })

})
