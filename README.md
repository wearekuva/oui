# DUI

A fast and extensible library for creating gui for demos. 

Fast, extensible, functional, modular, rapid


## Getting Started


Install dui
`npm install dui`


Import dui and quickly prototype
```
import { render } from 'dui'

let api = {
  numeric : 10,
  aString : "Hey, I'm a string",
  aBoolean : true,
  dir:{
    someOtherValue: "I'm nested inside a directory "
  }
})

render( api )
```

Dui will infer what type of controller to use from the object type, in this instance it will create a slider, a text field and a checkbox, however dui also handles more complex data types such as colors, vectors and more. In fact, you can add custom controllers for any type of data you need. This allows you to talor the type of controls to your need. See [Custom Controls]() to see how you can create your own

### Constraints and annotations
At some points it's likely you'll want constrain how your values can be controlled. Things such as a minimum or maximum value a number can be, or an array of possible values a string should be are all valid examples of constraints.

You can add constraints to values in dui using annotations. Annotations are a means to define metadata about a property. You can annotate a property with whatever data, it'll be passed to the dui when it draws the controls

Using the [ES7 decorators](decorators) with Babel or other transpiler
```
let api = {
  @annotate({ min:0, max: 100, step:5 })
  numeric: 5
}
```

or regular es5 dat.gui style
```
let api = {
  numeric: 5
}
annotate( api, 'numeric', { min:0, max: 100, step:5 })
```
