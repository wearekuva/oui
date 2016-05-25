import React from 'react'
import { shallow, mount } from 'enzyme'
import Slider from './slider'
import NumericStepper from '../numericstepper'

describe( 'Slider', () => {

    it('contains a numeric stepper', () => {

        const wrapper = shallow( <Slider value={5}/> )
        expect( wrapper.find( NumericStepper )).toBeTruthy()

    })


    it( 'renders the correct label', () => {

        const label = 'A label'
        const component = mount( <Slider label={label} value={5}/> )
        expect( component.find( 'label' ).text() ).toBe( label )

    })


    it( 'triggers an `onChange`', () => {

        let on = { change: _ => _ }
        spyOn( on, 'change' )
        const component = mount(<Slider value={4} onChange={on.change}/>)
        component.find('svg').simulate('mousedown', { preventDefault: _=>_, clientX: 10 });
        expect( on.change ).toHaveBeenCalled( )

    })


    it( 'triggers an `onChange` from the NumericStepper', () => {

        let on = { change: _ => _ }
        spyOn( on, 'change' )
        const component = mount(<Slider value={4} onChange={on.change}/>)
        const stepper = component.find( NumericStepper )
        stepper.find('input').get(0).value = 5
        stepper.find('input').simulate( 'change' )
        expect( on.change ).toHaveBeenCalledWith( 5 )

    })


    it( 'triggers an `onChange` from the mousemove', () => {

        let on = { change: _ => _ }
        spyOn( on, 'change' )
        const component = mount(<Slider value={4} onChange={on.change}/>)
        component.find('svg').simulate('mousedown', { preventDefault: _=>_, clientX: 10 });
        component.find('svg').simulate('mousemove', { preventDefault: _=>_, clientX: 12 });
        component.find('svg').simulate('mouseup', { preventDefault: _=>_, clientX: 10 });
        expect( on.change ).toHaveBeenCalled()

    })


    it( 'does not render a `NumericStepper` if `includeStepper` is false', () => {

        const label = 'A label'
        const component = mount( <Slider includeStepper={false} value={5} label={label}/> )
        expect( component.find( NumericStepper ).length ).toBe( 0 )

    })

})
