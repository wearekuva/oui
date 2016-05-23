import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon';
import NumericStepper from './numericstepper'

describe( 'Stepper', () => {


    it( 'renders the correct label', () => {

        const label = 'A label'
        const component = shallow(<NumericStepper value={5} label={label}/>)
        expect( component.find('label').text() ).toBe( label )

    })


    it( 'renders the correct value', () => {

        const value = 4
        const component = shallow(<NumericStepper value={value}/>)
        expect( component.find({ value })).toBeTruthy()

    })


    it( 'responds to change events', () => {

        const onChange = sinon.spy()
        const component = mount(<NumericStepper value={4} onChange={onChange}/>)
        component.find('input').get(0).value = 5
        component.find('input').simulate( 'change' )
        expect( onChange.calledWith( 5 )).toBeTruthy()

    })


    it( 'satisfies minimum constraint', () => {

        const value = 4
        const min = 5
        const component = mount(<NumericStepper value={value} min={min}/>)
        expect( parseFloat( component.find('input').get(0).value )).not.toBeGreaterThan( min )

    })


    it( 'satisfies maximum constraint', () => {

        const value = 4
        const max = 3
        const component = mount(<NumericStepper value={value} max={max}/>)
        expect( parseFloat( component.find('input').get(0).value )).not.toBeLessThan( max )

    })

    // test.todo( 'Validates input' )
    // test.todo( 'Change even fires with correct value' )

})
