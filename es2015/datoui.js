import panel from './imperative-api'
import { setAnnotation } from './annotate'

let add = ( obj, propName, annotation = {}, target ) => {
    setAnnotation( target, target.length, { label:propName, ...annotation })
    Object.defineProperty( target, target.length, {
        get: _ => obj[propName],
        set: v => obj[propName] = v,
        enumerable: true, configurable: true,
    })
}

let addFolder = target => ({
    add: ( obj, propName, annotation ) => add( obj, propName, annotation, target ),
    addFolder: annotation => {
        let api = []
        setAnnotation( target, target.push( api ) - 1, { label:'folder', ...annotation })
        return addFolder( api )
    }
})

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
