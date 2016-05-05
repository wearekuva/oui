import test from 'ava'
import sinon from 'sinon'


// Invalid properties
import render from '../src/renderer'

test( 'A null value passed to `render` raises a warning', t => {

    const consoleLogged = sinon.spy( console.warn )
    render(null)
    t.equal( consoleLogged.calledOnce, true )
})

test( 'A primitive value passed to `render` raises a warning', t => {

    const consoleLogged = sinon.spy( console.warn )
    render(5)
    render('string')
    render(false)
    t.equal( consoleLogged.calledThrice, true )
})


// Rendering primitives
test( 'A boolean property renders a tree containing a `Checkbox`', t => {
    render({ value : false})
    t.equal( consoleLogged.calledThrice, true )
})

test.todo( 'A string property renders a tree containing a `TextInput`', t => {
    render({ value : 'string'})
    t.equal( consoleLogged.calledThrice, true )
})

test.todo( 'A number property renders a tree containing a `Slider`', t => {
    render({ value : 10})
    t.equal( consoleLogged.calledThrice, true )
})

test.todo( 'An object property renders a tree containing a `Folder`', t => {
    render({ value : {} })
    t.equal( consoleLogged.calledThrice, true )
})

test.todo( 'An array property renders a tree containing a `Folder`', t => {
    render({ value : [] })
    t.equal( consoleLogged.calledThrice, true )
})

test.todo( 'A null property does not renders anything' )


// Rendering Annotated properties
test.todo( 'A custom controller is rendered when a property is annotated with it' )


// Functional API
test.todo( '`callback` is fired when a controller triggers a `change` event')

test.todo( 'A controller change mutates the `api`' )

// Observing changes
test.todo( 'A Controller is mounted when a property is added to the api' )

test.todo( 'A Controller is updated when a number property is changed on the api' )

test.todo( 'A Controller is unmounted when a number property is removed from the api' )
