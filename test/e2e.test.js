import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
// import sinon from 'sinon'

import imperative from '../src/imperative-api'
import dom from '../src/dom'
import Panel from '../src/controls/panel'
import { annotate } from '../src/annotate'

describe( 'e2e', () => {


    // beforeEach( () => sinon.spy( console, 'warn' ))

    afterEach(() => {
        while( dom.children.length > 0 ){
            dom.children[0].remove()
        }
        // console.warn.restore()
    })

    it( 'should render a Panel in the page', () => {

        imperative().render({ value: 10 })

        expect( dom.children.length ).toBe( 1 )

    })


    it( 'should render the correct number of Panels in the page', () => {

        const a = imperative().render({ value: 10 })
        const b = imperative().render({ value: 10 })

        expect( dom.children.length ).toBe( 2 )

    })


    it( 'Should remove a Panel from the page', () => {

        const ui = imperative()
        const node = ui.render({ value: 10 })

        expect( dom.children.length ).toBe( 1 )
        ui.destroy()
        expect( dom.children.length ).toBe( 0 )

    })


    it( 'should update the panel to reflect a new api', () => {

        let actual
        const ui = imperative()

        ui.render({ value: true })
        actual = dom.querySelector('input').checked
        expect( actual ).toBeTruthy()

        ui.render({ value: false })
        actual = dom.querySelector('input').checked
        expect( actual ).toBeFalsy()

    })


    // it( 'should update api properties on user interaction', () => {
    //
    //     let api = { prop: true }
    //     imperative().render( api )
    //
    //     const input = dom.querySelector('input')
    //     ReactTestUtils.Simulate.change( input, { target: { checked: false }})
    //
    //     expect( api.prop ).toBeFalsy()
    //
    // })


    it( 'should redraw the ui on user interaction', () => {

        imperative().render( { prop: true } )

        const input = dom.querySelector('input')
        ReactTestUtils.Simulate.change( input, { target: { checked: false }})

        expect( input.checked ).toBeFalsy()

    })


    it( 'should warn if props are incompatible with their type annotated control', () => {

        spyOn(console, 'warn')

        let Component = _ => <div/>
        Component.propTypes = {
            value: React.PropTypes.number.isRequired
        }

        const api = { prop: true }
        annotate({control:Component})(api, 'prop')

        imperative().render( api )

        expect( console.warn ).toHaveBeenCalled()


    })

})
