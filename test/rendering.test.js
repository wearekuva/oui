import React from 'react'
import {shallow, mount} from 'enzyme'
import Tree from '../src/render-tree'

import Checkbox from '../src/components/checkbox'
import TextInput from '../src/components/textinput'
import Slider from '../src/components/slider'
import Folder from '../src/components/folder'
import validate from '../src/prop-validation'
import sinon from 'sinon'

describe( 'Reconciliation:', () => {


    beforeEach( () => sinon.spy( console, 'warn' ))

    afterEach( () => console.warn.restore() )


    it( 'maps a Boolean to a tree containing a `Checkbox`', () => {

        const tree = Tree({ prop : 10 })[0]
        const actual = mount( tree )

        expect( actual.find( Checkbox )).toBeTruthy()

    })


    it( 'maps a String to a tree containing a `TextInput`', () => {

        const tree = Tree({ prop : 'string' })[0]
        const actual = mount( tree )

        expect( actual.find( TextInput )).toBeTruthy()

    })


    it( 'maps a Number to a tree containing a `Slider`', () => {

        const tree = Tree({ prop : 10 })[0]
        const actual = mount( tree )

        expect( actual.find( Slider )).toBeTruthy()

    })



    it( 'maps an Object to a tree containing a `Folder`', () => {

        const tree = Tree({ prop : { n: 10 } })[0]
        const actual = mount( tree )

        expect( actual.find( Folder )).toBeTruthy()

    })


    it( 'maps an Array to a tree containing a `Folder`', () => {

        const tree = Tree({ prop : [10] })[0]
        const actual = mount( tree )

        expect( actual.find( Folder )).toBeTruthy()

    })


    it( 'maps a null property to nothing', () => {

        const actual = Tree({ prop : null })[0]

        expect( actual ).toBeUndefined()

    })


    it( 'expects a warning to be raised if validation fails', () => {

        // let warn = sinon.spy(console, 'warn')
        const api = { num: 'str' }

        validate( api, 'num', Slider )

        expect( console.warn.calledOnce ).toBe( true )

        // console.warn.restore()

    })

})


import { annotate } from '../src/annotate'
import NumericStepper from '../src/components/numericstepper'

describe( 'Type Annotations', () => {

    it( 'renders the correct controller for a type annotated property', () => {

        const api = { prop : 10 }
        annotate({control:NumericStepper})( api, 'prop' )
        const tree = Tree( api )[0]
        const actual = mount( tree )

        expect( actual.find( NumericStepper )).toBeTruthy()

    })

    it( 'does not render an annotated null property', () => {

        const api = { prop : null }
        annotate({control:NumericStepper})( api, 'prop' )
        const actual = Tree( api )[0]

        expect( actual ).toBeUndefined()

    })

})
