import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon';
import Slider from './slider'
import NumericStepper from '../numericstepper'

test('has a numeric stepper', t => {
    const wrapper = shallow( <Slider/> )
    t.is( wrapper.find( NumericStepper ).length, 1 )
})
