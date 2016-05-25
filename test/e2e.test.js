import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
// import sinon from 'sinon'

import imperative from '../src/imperative-api'
import dom from '../src/dom'
import Panel from '../src/controls/panel'
import { annotate } from '../src/annotate'

describe( 'e2e', () => {


    afterEach(() => {
        while( dom.children.length > 0 ){
            dom.children[dom.children.length -1].remove()
        }
    })

    it( 'should render a Panel in the page', () => {

        imperative()({ value: 10 })

        expect( dom.children.length ).toBe( 1 )

    })


    it( 'should render the correct number of Panels in the page', () => {

        const a = imperative()({ value: 10 })
        const b = imperative()({ value: 10 })

        expect( dom.children.length ).toBe( 2 )

    })


    it( 'Should remove a Panel from the page', () => {

        const ui = imperative()
        const node = ui({ value: 10 })

        expect( dom.children.length ).toBe( 1 )
        ui()
        expect( dom.children.length ).toBe( 0 )

    })


    it( 'should update the panel to reflect a new api', () => {

        let actual
        const ui = imperative()

        ui({ value: true })
        actual = dom.querySelector('input').checked
        expect( actual ).toBeTruthy()

        ui({ value: false })
        actual = dom.querySelector('input').checked
        expect( actual ).toBeFalsy()

    })


    it( 'should update api properties on user interaction', () => {

        let api = { prop: true }
        imperative()( api )

        const input = dom.querySelector('input')
        ReactTestUtils.Simulate.change( input, { target: { checked: false }})

        expect( api.prop ).toBeFalsy()

    })


    it( 'should redraw the ui on user interaction', () => {

        imperative()({ prop: true })

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

        imperative()( api )

        expect( console.warn ).toHaveBeenCalled()


    })

})


import oui from '../src/oui'

describe( 'Oui', () => {

    afterEach(() => {

        oui()

        while( dom.children.length > 0 ){
            // console.log( dom.children.length )
            dom.children[0].remove()
        }

    })

    it( 'should only redraw the default panel, not add new ones', () => {

        oui({ prop: true })
        oui({ nun: 10 })
        oui({ bool: false })

        expect( dom.children.length ).toBe( 1 )

    })


    // it( 'expects the default panel to render with a custom panel', () => {
    //
    //     oui({ prop: true })
    //     imperative()({ nun: 10 })
    //     imperative()({ bool: false })
    //
    //     expect( dom.children.length ).toBe( 3 )
    //
    // })


})
