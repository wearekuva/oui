import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import test from 'ava'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'



import render from '../src/renderer'

// Rendering
// import BaseComponent from '../src/components/BaseComponent'
// test( 'The `BaseComponent` is renderered', t => {
//     const actual = mount( render({}))
//     t.true( actual.is( BaseComponent ))
// })
//
// // Invalid properties
// test.skip( 'A null value passed to `render` renders nothing', t => {
//
// })
//
// test.skip( 'A primitive value passed to `render` renders nothing', t => {
//
// })

// Tree tests

import Checkbox from 'core-controllers/es5/checkbox'
test( 'A boolean property renders a tree containing a `Checkbox` controller', t => {
    const tree = render({ prop : false })
    const actual = mount( tree )
    t.is( actual.find( Checkbox ).type(), Checkbox )
})


import TextInput from 'core-controllers/es5/textinput'
test( 'A string prop renders a tree containing a `TextInput` controller', t => {
    const tree = render({ prop : 'string' })
    const actual = mount( tree )
    t.is( actual.find( TextInput ).type(), TextInput )
})


import Slider from 'core-controllers/es5/slider'
test( 'A numeric prop renders a tree containing a `Slider` controller', t => {
    const tree = render({ prop : 10 })
    const actual = mount( tree )
    t.is( actual.find( Slider ).type(), Slider )
})


import Folder from 'core-controllers/es5/folder'
test( 'An object property renders a tree containing a `Folder` controller', t => {
    const tree = render({ prop : {} })
    const actual = mount( tree )
    t.is( actual.find( Folder ).type(), Folder )
})


test( 'An array property renders a tree containing a `Folder` controller', t => {
    const tree = render({ prop : [] })
    const actual = mount( tree )
    t.is( actual.find( Folder ).type(), Folder )
})

test( 'A null property does renders nothing', t => {

    const tree = render({ prop : null })
    const actual = mount( tree )
    // console.log( actual.children().html() )
    t.is( actual.children().length, 0 )

})
//
//
// // Rendering Annotated properties
// test.todo( 'A custom controller is rendered when a property is annotated with it' )
//
//
// // Functional API
// test.todo( '`callback` is fired when a controller triggers a `change` event')
//
// test.todo( 'A controller change mutates the `api`' )
//
// // Observing changes
// test.todo( 'A Controller is mounted when a property is added to the api' )
//
// test.todo( 'A Controller is updated when a number property is changed on the api' )
//
// test.todo( 'A Controller is unmounted when a number property is removed from the api' )
