import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import {shallow, mount} from 'enzyme'
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

        const ui = imperative()
        const node = ui.render({ value: 10 })
        const tree = mount(<div />).wrap( node )

        expect( tree.find( Panel )).toBeTruthy()
        expect( dom.children.length ).toBe( 1 )

    })


    it( 'should render the correct number of Panels in the page', () => {

        const a = imperative().render({ value: 10 })
        const b = imperative().render({ value: 10 })

        const treeA = mount(<div />).wrap( a )
        const treeB = mount(<div />).wrap( b )

        expect( dom.children.length ).toBe( 2 )

    })


    it( 'Should remove a Panel from the page', () => {

        const ui = imperative()
        const node = ui.render({ value: 10 })

        expect( dom.children.length ).toBe( 1 )
        ui.destroy()
        expect( dom.children.length ).toBe( 0 )

    })
    //
    // test.todo( 'Panel should reflect api mutation' )
    //
    // test.todo( 'Api should reflect Panel change' )

})
