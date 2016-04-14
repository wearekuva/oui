import render from './renderer'
import merge from 'lodash.merge'
import { annotate } from './annotate'

let watch = obj => {
    //let onChange = ( key, change ) => draw( merge( obj, { [key]: change }))
    // let draw = api => render( api, draw )
    render( obj, watch )
}

export { render, merge, annotate, watch }
