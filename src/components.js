

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

// import Dial from 'core-controllers/es5/dial'
// import NumericStepper from 'core-controllers/es5/numericstepper'
// import ColorPicker from 'core-controllers/es5/colorpicker'
// import XYPad from 'core-controllers/es5/xypad'
// import Graph from 'core-controllers/es5/graph'
// import ComboBox from 'core-controllers/es5/combobox'
//
// import { annotate } from './annotate'
//
// let createDecorator = Controller => {
//     return value => ( obj, prop ) => annotate({ ...value, control:Controller })( obj, prop, )
// }
//
// export const dial = createDecorator( Dial )
// export const xypad = createDecorator( XYPad )
// export const stepper = createDecorator( NumericStepper )
// export const color = createDecorator( ColorPicker )
// export const graph = createDecorator( Graph )
// export const combobox = createDecorator( ComboBox )
