import { isPrimitive }  from './primitives'
import React  from 'react'
import { setAnnotation, getAnnotation }  from './annotate'
import { getComponent, hasComponent }  from './component'
import merge from 'lodash.merge'


/*
  This is where we reconcile the object and decide what should and should not
  end up in the renderTree. Essentially it is a mapping between an object literal
  representation and a renderable graph
*/

/*
  This specifies an component to use. There is an explicit agreement
  that this property should be controlled by a given controler.

  This is actually great when you know the available components. It's
  transparent to the user what should occur.

  This is not so great for who want to declare annotation for a given property
  without prior knowledge of what controllers are available. In this instance,
  the author may simply want to define a description, some value constraints
  and behaviour, but not neccesarily specify how it should be used.

  In these instances only the public properties of an object should define it's
  interface.

  ##Component Matching
  Given N controllers and M properties, it takes 0(NM) to match all properties.

  If matching is not automatic, and properties must explicityly declare their
  interface such as type:{r,g,b}, or @implements([InterfaceA, InterfaceB]) then
  we have a contract between a property and it's interface.

  For example if `propA` implements `interfaceA` and `interfaceA` can be controlled
  by ComponentB, then we have a match. propA decalares it's interface and thats
  all. Plus, as a prop can implement multiple interfaces, then we may have potentially
  more than one component.

  In this manner, given a given prop can implement X interfaces,a component can
  be matched in O(1).

  However javascript does not define interface types, so how could we define this
  ```
    let interface = ['x', 'y', 'z']

    @implements([interace])
    rotation: { x, y, z }
  ```

  Primitives get autojacked, objects get jacked to default folder directory unless
  they match a Controller

  1) An interface may be a React propType:
    {
      requiredObject: React.PropTypes.object.isRequired,
      requiredString: React.PropTypes.string.isRequired,
    }

    This can actually be validated, but


import { colorpicker } from 'custom-comps'
{
  // requires explicit knowledge of controller types
  @color( 'This is a slider', min, max )
  prop:{ r, g, b },

}
```
*/

/*
  Should infer an interface, an agreement of api functionality.
  This property has this interface and implements this api, therefore
  you can safely assume it works in this kind of way, and can be conrolled
  with this type of controller
*/

/*
```
{
  // requires explicit knowledge of controller types
  @annotate( 'This is a slider', min, max, 'colorpicker' )
  prop:{ r, g, b },

}
```
*/


export default ( obj, primitives, onChange ) => {

    let metadata,
        value,
        component,
        components = []

    // iterate through enumerable props in `obj`
    for( var key in obj ){

        // if there's any metadata associated with the property pass this along
        metadata = getAnnotation( obj, key ) || {}

        component = null

        value = obj[key]

        // for each primitive, find a corresponding component
        if( isPrimitive( value )){

            component = primitives[ typeof value ]

        }else if( hasComponent( obj, key )){

            component = getComponent( obj, key )

        }

        let onMetadataChange = change => setAnnotation( obj, key, merge( metadata, change ))

        // console.log( key, value )
        if( component ) components.push( React.createElement( component, { propKey:key, key, value, metadata, onChange, onMetadataChange }))

    }

    return components

}
