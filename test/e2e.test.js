import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'


import imperative from '../src/imperative-api'
import dom from '../src/dom'
import Panel from '../src/components/panel'

describe( 'e2e', () => {

    afterEach(() => {
        while( dom.children.length > 0 ){
            dom.children[0].remove()
        }
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


    it( 'should update api properties on user interaction', () => {

        let api = { prop: true }
        imperative().render( api )

        const input = dom.querySelector('input')
        ReactTestUtils.Simulate.change( input, { target: { checked: false }} )

        expect( api.prop ).toBeFalsy()

    })


    it( 'should redraw the ui on user interaction', () => {

        imperative().render( { prop: true } )

        const input = dom.querySelector('input')
        ReactTestUtils.Simulate.change( input, { target: { checked: false }} )

        expect( input.checked ).toBeFalsy()

    })

})
