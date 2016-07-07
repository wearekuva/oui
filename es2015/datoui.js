import oui from 'oui'

let add = ( obj, propName, target ) => Object.defineProperty( target, propName, {
  get: _ => obj[propName],
  set: v => obj[propName] = v,
  enumerable: true, configurable: true,
});

let addFolder = target => ({
  add: ( obj, propName ) => add( obj, propName, target ),
  addFolder: propName => addFolder( target[propName] = {} )
})

export default opts => {
  let api = {}
  let p = oui.panel(opts)
  let draw = _ => {
    p( api )
    requestAnimationFrame( draw )
  }
  draw()
  return addFolder( api )
}
