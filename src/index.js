import render from './renderer'
import { annotate } from './annotate'
import assign from 'fast.js/object/assign'
import { dial, xypad, stepper, color, graph } from './components'


let watch = obj => {
    //let onChange = ( key, change ) => draw( merge( obj, { [key]: change }))
    // let draw = api => render( api, draw )
    render( obj, element, watch )
}


var element = document.createElement( 'div' )
element.style.position = 'absolute'
element.style.zIndex = '999999999'
element.style.top = '0.5em'
element.style.left = '0.5em'
document.body.appendChild( element )

let Render = ( obj ) => render( obj, element )

let components = { dial, xypad, stepper, color, graph }

export { Render, annotate, watch, components }
