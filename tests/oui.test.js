import test from 'ava'


// Annotations
import { annotate, getAnnotation } from '../src/annotate'

test( 'An annotation can be set/red', t => {

    const obj = {prop:10}
    const value = 10
    annotate({ value })( obj, 'prop' )
    const annotationValue = getAnnotation( obj, 'prop' ).value
    t.is( annotationValue, value )

})

test( 'An existing annotation can be overwritten', t => {

    const obj = {prop:10}
    const first = 10
    const second = 20
    annotate({ value:first })( obj, 'prop' )
    annotate({ value:second })( obj, 'prop' )
    const annotationValue = getAnnotation( obj, 'prop' ).value
    t.is( annotationValue, second )

} )



// Component Annotations
import { graph } from '../src/components'
import Graph from 'core-controllers/es5/graph'
test( "`graph()` adds a type annotation whose value is `Graph`", t => {
    const obj = { prop: true }
    graph({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, Graph )
})


import { xypad } from '../src/components'
import XYPad from 'core-controllers/es5/xypad'
test( "`xypad()` adds a type annotation whose value is `XYPad`", t => {
    const obj = { prop: true }
    xypad({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, XYPad )
})


import { dial } from '../src/components'
import Dial from 'core-controllers/es5/dial'
test( "`dial()` adds a type annotation whose value is `Dial`", t => {
    const obj = { prop: true }
    dial({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, Dial )
})


import { color } from '../src/components'
import ColorPicker from 'core-controllers/es5/colorpicker'
test( "`color()` adds a type annotation whose value is `ColorPicker`", t => {
    const obj = { prop: true }
    color({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, ColorPicker )
})


import { stepper } from '../src/components'
import NumericStepper from 'core-controllers/es5/numericstepper'
test( "`stepper()` adds a type annotation whose value is `NumericStepper`", t => {
    const obj = { prop: true }
    stepper({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, NumericStepper )
})


import { combobox } from '../src/components'
import Combobox from 'core-controllers/es5/combobox'
test( "`combo()`` adds a type annotation whose value is `ComboBox`", t => {
    const obj = { prop: true }
    combobox({})( obj, 'prop' )
    var type = getAnnotation( obj, 'prop' ).control
    t.is( type, Combobox )
})




// Mutations
import merge from '../src/deep-merge'

test( 'Shallow primitives are merged', t =>{

    const num = 5
    const str = 'string'
    const bool = false

    const target = {
        num: 1,
        str: 'incorrect',
        bool: true,
        value:1
    }

    const a = merge( target, { num, str, bool })
    const b = { num, str, bool, value:1 }
    t.deepEqual( a, b )
})


test( 'Deep primitives are merged', t => {

    const num = 5
    const str = 'string'
    const bool = false

    const target = {
        deep: {},
        value:1
    }

    const source = {
        deep : { deeper: { num, str, bool }}
    }

    t.deepEqual( merge( target, source ), { deep: { deeper:{ num, str, bool }}, value:1} )

})


test( 'Arrays are merged', t => {

    const source = [ 0, 1, 2, 3, 4, 5 ]
    const target = [ 5, 4, 3, 2, 1, 0, 'a', 'a']

    t.deepEqual( merge( target, source ), [ 0, 1, 2, 3, 4, 5, 'a', 'a' ])

})

test( 'Objects are not assigned', t => {

    const source = { a:{ value: 10 }}
    const target = { a:{ value: 20 }}

    t.false( merge( target, source ).a === source.a )

})

test( 'Target and Source are not referentially equal `===`', t => {

    const source = { a:10 }
    const target = { a:20 }

    t.false( merge( target, source ) === source )
})
