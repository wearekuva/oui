import panel from './imperative-api'
import { setAnnotation } from './annotate'

/*
  Provides a stateful imperative interface to Oui
*/


/*
  Defines and optionally annotates an property on an object
*/

let add = ( obj, propName, annotation = {}, target ) => {
    setAnnotation( target, target.length, { label:propName, ...annotation })
    Object.defineProperty( target, target.length, {
        get: _ => obj[propName],
        set: v => obj[propName] = v,
        enumerable: true, configurable: true,
    })
}

/*
  Returns an imperative interface to mutate an object with properties and 'folders'
*/
let addFolder = target => ({
    add: ( obj, propName, annotation ) => add( obj, propName, annotation, target ),
    addFolder: annotation => {
        let api = []
        setAnnotation( target, target.push( api ) - 1, { label:'folder', ...annotation })
        return addFolder( api )
    }
})

/*
  An 'watching' interface to oui that redraws every frame
*/
export default ( opts, callback ) => {
    let api = []
    let p = panel( opts )
    let draw = _ => {
        p( api, callback )
        requestAnimationFrame( draw )
    }
    draw()
    return addFolder( api )
}
