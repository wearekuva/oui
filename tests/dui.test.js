import test from 'ava'

import { render, merge, annotate, watch } from '../src/index'

// Check correct Compnents render

test.todo( 'Components are rendered' )

test.todo( 'A boolean renders as a CheckBox' )

test.todo( 'A number renders as a Slider' )

test.todo( 'A string renders as a TextInput' )

test.todo( 'A function renders as a Button' )

test.todo( 'An object renders as a Folder' )

test.todo( 'An array renders as a Folder' )



// Check annotations

test.todo( 'An annotation can be set' )

test.todo( 'An existing annotation can be read' )


// Component Decorators

test.todo( "The 'graph()' annotation renders a Graph" )

test.todo( "The 'xypad()' annotation renders an XYPad" )

test.todo( "The 'dial()' annotation renders a Dial" )

test.todo( "The 'color()' annotation renders a ColorPicker" )

test.todo( "The 'stepper()' annotation renders a NumericStepper" )

test.todo( "The 'combo()' annotation renders a ComboBox" )


// Test UI updates mutate Object

test.todo( 'Slider change mutates Number' )

test.todo( 'Checkbox change mutates Boolean' )

test.todo( 'TextInput change mutates String' )

test.todo( 'Button click calls Function' )


// Generic

test.todo( 'Updates are deeply merged')

test.todo( 'Callback is called on change')


// Render Tree


//
