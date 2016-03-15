import 'reflect-metadata'

const COMPONENT_KEY = Symbol('DUI')
let Component = type => ( obj, prop ) => Reflect.metadata( COMPONENT_KEY, type, obj, prop )
let hasComponent = ( obj, prop ) => getComponent( obj, prop ) !== undefined
let getComponent = ( obj, prop ) => Reflect.getMetadata( COMPONENT_KEY, obj, prop )

export { Component as default, hasComponent, getComponent }
