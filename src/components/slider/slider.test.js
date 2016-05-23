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


    it( 'does not render a `NumericStepper` if `includeStepper` is false', () => {

        const label = 'A label'
        const component = mount( <Slider includeStepper={false} value={5} label={label}/> )
        expect( component.find( NumericStepper ).length ).toBe( 0 )

    })

})
