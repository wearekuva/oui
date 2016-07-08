import { annotate, getAnnotation, hasAnnotation } from '../es2015/annotate'
import Graph, { graph } from '../es2015/controls/graph'
import XYPad, { xypad } from '../es2015/controls/xypad'
// import { dial } from '../es2015/components'
// import Dial from 'core-controllers/es5/dial'
import ColorPicker, { color } from '../es2015/controls/colorpicker'
// import ColorPicker from 'core-controllers/es5/colorpicker'
// import { stepper } from '../es2015/components'
// import NumericStepper from 'core-controllers/es5/numericstepper'
// import { combobox } from '../es2015/components'
import ComboBox, { combobox } from '../es2015/controls/combobox'


describe( 'Annotations:', () => {


    it( 'expects an annotation can be set', () => {
        const obj = {prop:10}
        const value = 10
        annotate({ value })( obj, 'prop' )
        const expected = hasAnnotation( obj, 'prop' )
        expect( expected ).toBe( true )
    })


    it( 'expects an annotation can be read', () => {
        const obj = {prop:10}
        const value = 10
        annotate({ value })( obj, 'prop' )
        const expected = getAnnotation( obj, 'prop' ).value
        expect( expected ).toBe( value )
    })


    it( 'expects an annotation can be overwritten', () => {
        const obj = {prop:10}
        const first = 10
        const second = 20
        annotate({ value:first })( obj, 'prop' )
        annotate({ value:second })( obj, 'prop' )
        const expected = getAnnotation( obj, 'prop' ).value
        expect( expected ).toBe( second )
    })


    it( '`combobox` decorator creates a `ComboBox` annotation', () => {

        const obj = { b: 'c'}
        combobox()( obj, 'b' )

        const expected = getAnnotation( obj, 'b' ).control
        expect( expected ).toBe( ComboBox )
    })


    it( 'expects `graph()` annotation to contain the `Graph` control', () => {

        const obj = { prop: {x:10, y:10} }
        graph({})( obj, 'prop' )

        var expected = getAnnotation( obj, 'prop' ).control
        expect( expected ).toBe( Graph )
    })


    it( 'expects `xypad()` annotation to contain the `XYPad` control', () => {

        const obj = { prop: true }
        xypad({})( obj, 'prop' )

        var expected = getAnnotation( obj, 'prop' ).control
        expect( expected ).toBe( XYPad )

    })



    it( 'expects `color()`  annotation to contain the `ColorPicker` control', () => {
        const obj = { prop: true }
        color({})( obj, 'prop' )
        var expected = getAnnotation( obj, 'prop' ).control
        expect( expected ).toBe( ColorPicker )
    })


})


import equals from '../es2015/shallow-equal'
describe( 'Comparing', () => {

    it( 'matches shallow objects', () => {

        const a = { a: 10, b:false, c:'string' }
        const b = { a: 10, b:false, c:'string' }

        expect( equals( a, b )).toBeTruthy()
    })

    it( 'matches same objects', () => {

        const a = { a: 10, b:false, c:'string' }
        const b = a

        expect( equals( a, b )).toBeTruthy()
    })


    it( 'fails fails different objects', () => {

        const a = { a: 10, b:false, c:'string' }
        const b = { b: 10, b:false, c:'string', d:10 }

        expect( equals( a, b )).toBeFalsy()
    })


    it( 'fails fails similar objects', () => {

        const a = { a: 10, b:false, c:'string' }
        const b = { b: 10, b:true, c:'string' }

        expect( equals( a, b )).toBeFalsy()
    })

    it( 'fails null objects', () => {

        const a = { a: 10, b:false, c:'string' }
        const b = null

        expect( equals( a, b )).toBeFalsy()
    })

})


import merge from '../es2015/deep-merge'
describe( 'Merging', () => {

    it( 'merges shallow primitives', () =>{

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

        expect( a ).toEqual( b )

    })

    it( 'raises a warning when attempting to merge a read only property', () => {

        spyOn( console, 'warn' )

        let target = {
            get b() { return 10 }
        }

        const source = { b : 20 }
        const a = merge( target, source )

        expect( console.warn ).toHaveBeenCalled()

    })


    it( 'raises a warning when attempting to merge into a frozen object', () => {

        spyOn( console, 'warn' )

        const target = {}
        Object.freeze( target )
        const source = { b : 20 }
        const a = merge( target, source )

        expect( console.warn ).toHaveBeenCalled()

    })


    it( 'merges deep primitives', () => {

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

        const actual = merge( target, source )
        const expected = { deep: { deeper:{ num, str, bool }}, value:1 }

        expect( actual ).toEqual( expected )

    })


    it( 'merges arrays', () => {

        const source = [ 5, 4, 3, 2, 1, 0, 'a', 'a' ]
        const target = [ 0, 1, 2, 3, 4, 5 ]

        const actual = merge( target, source )
        const expected = [ 5, 4, 3, 2, 1, 0, 'a', 'a' ]

        expect( actual ).toEqual( expected )

    })


    it( 'merges arrays and restricts to source length', () => {

        const source = [ 0, 1, 2, 3, 4, 5 ]
        const target = [ 5, 4, 3, 2, 1, 0, 'a', 'a']

        const actual = merge( target, source )
        const expected = [ 0, 1, 2, 3, 4, 5 ]

        expect( actual ).toEqual( expected )

    })


    it( 'does not merge by assigning properties', () => {

        const source = { a:{ value: 10 }}
        const target = { a:{ value: 20 }}

        const actual = merge( target, source ).a
        const expected = source.a

        expect( actual ).toEqual( expected )

    })


    it( 'does not clone the source as the target', () => {

        const source = { a:10 }
        const target = { a:20 }

        merge( target, source )

        expect( source ).not.toBe( target )

    })

})
