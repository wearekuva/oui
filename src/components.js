

/*
    This module exposes the non primitives components, that is the components
    from `core-controllers` that don't get auto selected. It exposes them
    as decorator functions that can be used to assocate a specific property with
    a controllers

    {
        aNumber: 5, // Get's bound to a Slider Control

        @dial()
        anotherNumber: 5 // Selects the Dial control from core-controllers
    }

    imperative:

    dial()( obj, 'a' )

*/

import Dial from 'core-controllers/components/dial'
import NumericStepper from 'core-controllers/components/numericstepper'
import ColorPicker from 'core-controllers/components/colorpicker'
import XYPad from 'core-controllers/components/xypad'
import Graph from 'core-controllers/components/graph'

import { annotate, setAnnotation } from './annotate'

let createDecorator = Controller => {
    return value => ( obj, prop ) => setAnnotation( obj, prop, {...value, control:Controller })
}

export const dial = createDecorator( Dial )
export const xypad = createDecorator( XYPad )
export const stepper = createDecorator( NumericStepper )
export const color = createDecorator( ColorPicker )
export const graph = createDecorator( Graph )
