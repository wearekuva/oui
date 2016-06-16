import React from 'react'
import { shallow, mount } from 'enzyme'
import Folder from './folder'
import Slider from '../slider'

const noop = _=>_

describe( 'Folder', () => {


    it( 'renders the correct label', () => {

        const label = 'A label'
        const component = mount( <Folder value={noop} label={label}/> )
        expect( component.find( 'label' ).text() ).toBe( label )

    })


    it( 'is closed by default', () => {

        const label = 'A label'
        const component = mount( <Folder value={noop}/> )
        expect( component.state('open') ).toBeFalsy()

    })


    it( 'does not render children when closed', () => {

        const component = mount( <Folder value={_=><Slider value={10}/>} /> )
        expect( component.find( Slider ).length ).toBe( 0 )

    })


    it( 'does render children when open', () => {

        const component = mount( <Folder value={_=><Slider value={10}/>}/> )
        component.setState({open:true})
        expect( component.find( Slider ).length ).toBe( 1 )

    })


    it( 'does open when clicked on', () => {

        const component = mount( <Folder value={_=><Slider value={10}/>} label={'a label'}/> )
        component.find( 'label' ).simulate( 'click' )
        expect( component.find( Slider ).length ).toBe( 1 )

    })

})
