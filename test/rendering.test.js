import React from 'preact-compat'
// import {shallow, mount} from 'enzyme'
import Tree from '../es2015/render-tree'

import Checkbox from '../es2015/controls/checkbox'
import TextInput from '../es2015/controls/textinput'
import Slider from '../es2015/controls/slider'
import Folder from '../es2015/controls/folder'
import { validateProp } from '../es2015/validation'
import throttle from '../es2015/controls/utils/throttle'

describe( 'Utils', () => {

    it( 'Throttles corectly on the next Animation Frame', () => {

        let on = { change: _=> _ }

        spyOn( on, 'change' )

        let throttled = throttle( on.change )

        throttled()
        throttled()
        throttled()
        throttled()

        expect( on.change ).not.toHaveBeenCalled()

    })

})

describe( 'Reconciliation:', () => {
//
//
//     it( 'maps a Boolean to a tree containing a `Checkbox`', () => {
//
//         const tree = Tree({ prop : 10 })[0]
//         const actual = mount( tree )
//
//         expect( actual.find( Checkbox )).toBeTruthy()
//
//     })
//
//
//     it( 'maps a String to a tree containing a `TextInput`', () => {
//
//         const tree = Tree({ prop : 'string' })[0]
//         const actual = mount( tree )
//
//         expect( actual.find( TextInput )).toBeTruthy()
//
//     })
//
//
//     it( 'maps a Number to a tree containing a `Slider`', () => {
//
//         const tree = Tree({ prop : 10 })[0]
//         const actual = mount( tree )
//
//         expect( actual.find( Slider )).toBeTruthy()
//
//     })
//
//
//
//     it( 'maps an Object to a tree containing a `Folder`', () => {
//
//         const tree = Tree({ prop : { n: 10 } })[0]
//         const actual = mount( tree )
//
//         expect( actual.find( Folder )).toBeTruthy()
//
//     })
//
//
//     it( 'maps an Array to a tree containing a `Folder`', () => {
//
//         const tree = Tree({ prop : [10] })[0]
//         const actual = mount( tree )
//
//         expect( actual.find( Folder )).toBeTruthy()
//
//     })


    it( 'maps a null property to nothing', () => {

        const actual = Tree({ prop : null })[0]

        expect( actual ).toBeUndefined()

    })




})


import isValidControl from '../es2015/control'
describe( 'Validation', () => {

    // beforeEach( () => sinon.spy( console, 'warn' ))
    //
    // afterEach( () => console.warn.restore() )

    it( 'correctly validates a Control', () => {

        let Comp = {}
        expect( isValidControl( Comp )).toBeFalsy()

        Comp = _ => _
        expect( isValidControl( Comp )).toBeFalsy()

        Comp = _ => _
        Comp.propTypes = {}
        expect( isValidControl( Comp )).toBeFalsy()

        Comp = _ => _
        Comp.propTypes = {}
        expect( isValidControl( Comp )).toBeFalsy()

        Comp = _ => _
        Comp.propTypes = { value : {} }
        expect( isValidControl( Comp )).toBeFalsy()


        Comp = _ => _
        Comp.propTypes = { value : _ => null }
        expect( isValidControl( Comp )).toBeTruthy()

    })

    it( 'expects a warning to be raised if prop validation fails', () => {

        const api = { num: 'str' }

        spyOn( console, 'warn' )

        validateProp( api, 'num', Slider )

        expect( console.warn ).toHaveBeenCalled()

    })

})

//
// import { annotate } from '../es2015/annotate'
// import NumericStepper from '../es2015/controls/numericstepper'
//
// describe( 'Type Annotations', () => {
//
//     it( 'renders the correct controller for a type annotated property', () => {
//
//         const api = { prop : 10 }
//         annotate({control:NumericStepper})( api, 'prop' )
//         const tree = Tree( api )[0]
//         const actual = mount( tree )
//
//         expect( actual.find( NumericStepper )).toBeTruthy()
//
//     })
//
//     it( 'does not render an annotated null property', () => {
//
//         const api = { prop : null }
//         annotate({control:NumericStepper})( api, 'prop' )
//         const actual = Tree( api )[0]
//
//         expect( actual ).toBeUndefined()
//
//     })
//
// })
