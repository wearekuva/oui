'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
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

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _annotate = require('./annotate');

var _primitiveComponents = require('./primitive-components');

var _primitiveComponents2 = _interopRequireDefault(_primitiveComponents);

var _validation = require('./validation');

var _warn = require('./warn');

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (obj, onChange) => {

    let annotation,
        Component,
        components = [];

    /*
        Iterate through enumerable properties of `obj`
    */
    for (var prop in obj) {

        let Element,
            Component,
            value = obj[prop];

        /*
            Null properties are discarded regardless of type annotation
        */

        if (value === null) continue;

        /*
            If there's any annotation associated with the property collect them
            and pass them along to the Component instance
        */
        annotation = (0, _annotate.getAnnotation)(obj, prop) || {};

        /*
            Users can associate a property with a specific Components by including
            the `control` annotation
        */
        Component = annotation.control;

        /*
            If the property has a type annotation, validate the property against
            the controls propTypes.
        */

        if (Component) {

            (0, _validation.validateProp)(obj, prop, Component);
        } else if (!Component && _primitiveComponents2.default.has(typeof value)) {

            /*
                However if no Component has been declared and the value is one of the
                primtive types, use one of the default Components
            */

            Component = _primitiveComponents2.default.get(typeof value);
        }

        /*
            Create the Element based on the provided annotaions and the required Component
        */
        if (Component) {
            components.push(React.createElement(Component, _extends({ key: prop, id: prop, label: prop }, annotation, { onChange: onChange, value: value })));
        }
    }

    return components;
};