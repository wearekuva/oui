import render from './renderer'
import { annotate } from './annotate'
import { dial, xypad, stepper, color, graph } from './components'


let watch = obj => {
    //let onChange = ( key, change ) => draw( merge( obj, { [key]: change }))
    // let draw = api => render( api, draw )
    render( obj, watch )
}

let components = { dial, xypad, stepper, color, graph }

export { render, annotate, watch, components }
