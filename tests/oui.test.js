import test from 'ava'


// Annotations
import { annotate } from '../src/annotate'

test.todo( 'An annotation can be set' )

test.todo( 'An existing annotation can be read' )

test.todo( 'An existing annotation can be overwritten' )


// Component Annotations
test.todo( "`graph()` adds a controller type annotation whose value is `Graph`" )

test.todo( "'xypad()' adds a controller type annotation whose value is `XYPad`" )

test.todo( "'dial()' adds a controller type annotation whose value is `Dial`" )

test.todo( "'color()' adds a controller type annotation whose value is `ColorPicker`" )

test.todo( "'stepper()' adds a controller type annotation whose value is `NumericStepper`" )

test.todo( "'combo()' adds a controller type annotation whose value is `ComboBox`" )


// Primitives
import isPrimitive from '../src/primitives'

test( '`isPrimitive` returns true for a number', t => t.true( isPrimitive( 10 )))

test( '`isPrimitive` returns true for a string', t =>t.true( isPrimitive( 'string' )))

test( '`isPrimitive` returns true for a boolean', t => t.true( isPrimitive( false )))

test( '`isPrimitive` returns false for an object', t => t.false( isPrimitive( {} )))

test( '`isPrimitive` returns false for an array', t => t.false( isPrimitive( [] )))

test( '`isPrimitive` returns false for a function', t => t.true( isPrimitive( _ => _ )))



// Mutations
import merge from '../src/merge'

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

    t.deepEqual( merge( target, { num, str, bool }), { num, str, bool, value:1 } )
})


test( 'Deep primitives are merged', t => {

    const num = 5
    const str = 'string'
    const bool = false

    const target = {
        deep: {
            num: 1,
            str: 'incorrect',
            bool: true
        },
        value:1
    }

    const source = {
        deep : { num, str, bool }
    }

    t.deepEqual( merge( target, source ), { deep: { num, str, bool }, value:1} )

})


test( 'Arrays are merged', t => {

    const source = [ 0, 1, 2, 3, 4, 5 ]
    const target = [ 5, 4, 3, 2, 1, 0, 'a', 'a']

    t.deepEqual( merge( target, source ), [ 0, 1, 2, 3, 4, 5, 'a', 'a' ])

})

test( 'Objects are not assigned', t => {

    const source = { a:{ value: 10 }}
    const target = { a:{ value: 20 }}

    t.false( merge( target, source ).a, source.a )

})

test( 'Target and Source are not referentially equal `===`', t => {

    const source = { a:10 }
    const target = { a:20 }

    t.false( merge( target, source ), source )
})

test.todo( 'Merge handles frozen properties' )

test.todo( 'Merge handles sealed properties' )

test.todo( 'Merge handles read-only properties' )


// Render Tree
import tree from '../src/render-tree'
import Checkbox from 'core-controllers/lib/checkbox'
import Slider from 'core-controllers/slider'
import TextInput from 'core-controllers/textinput'
import WrappedFolder from '../src/components/WrappedFolder'

test( 'A boolean property returns an array with a CheckBox', t => t.is( tree({ value: false })[0], Checkbox ))

test( 'A number property returns an array with a Slider', t => t.is( tree({ value: 10 })[0], Slider ))

test( 'A string property returns an array with a TextInput', t => t.is( tree({ value: 'string' })[0], TextInput ))

test( 'A function property returns an empty array', t => t.equals( tree({ value: false }).length, 0 ))

test( 'A null property value returns an empty array', t => t.equals( tree({ value: false }).length, 0 ))

test( 'An object property returns an array with a Folder', t => t.is( tree({ value: {} })[0], WrappedFolder ))

test( 'An array property returns an array with a Folder', t => t.is( tree({ value: [] })[0], WrappedFolder ))
