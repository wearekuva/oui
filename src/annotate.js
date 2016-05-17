import 'es7-reflect-metadata'

/*
  Annotate
  An Annotation defines meta-data about a property

  Specifically, rendering a controller for a given property requires
  additional information other than it's value. Some of this can be obtained
  from it's property descriptor via `Object.getOwnPropertyDescriptor()` but
  we may also need additional information.

  This module provides a way to provide such additional information. Note that
  we do not assume the format or structure of the data.

  An example of a property metadata might be
  {
    description: 'This property is the background color',
    controller: Slider,
    max: 10,
    min: 2
  }

  @annotate({ description, max, min })


*/

const DUI_KEY = Symbol('Oui, Oui')

export let annotate = value => ( obj, prop ) => Reflect.defineMetadata( DUI_KEY, value, obj, prop )
export let getAnnotation = ( obj, prop ) => Reflect.getMetadata( DUI_KEY, obj, prop )
export let hasAnnotation = ( obj, prop ) => getAnnotation( obj, prop ) !== null
