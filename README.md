# Oui

_Objects go in, UI comes out_

![Oui](http://i.imgur.com/GCqgzWw.png)

![experimental](https://img.shields.io/badge/stability-experimental-red.svg?style=flat-square)

A super simple way to instrument your code and controls your data. Pass it an object and Oui creates a set of controls that allow you to visualise and shape your app at runtime.

> This is still experimental. The api is likely to change. You have been warned!

## Usage

```
npm install @wearekuva/oui --save
```

If you're from a [dat.gui](https://github.com/dataarts/dat.gui) and prefer an imperative style api, then oui exposes a similar interface

```javascript
let p = oui.datoui()
p.add( someObj, 'someNum' )
p.add( someObj, 'someString' )
let dir = p.addFolder( 'dir' )
dir.add( obj, 'someNestedProp' )
```

For those who prefer the more functional approach, you can also map entire objects to a interface. This is useful when you want to understand the shape of an object.

```javascript
oui({
  someNum : 10,
  someString : "It's a string!",
  dir: {
    someNestedProp: 10  
  }
})
```

### Additional Components

The basic controllers cover all data types, but sometimes your data describes something more complicated such as a rotation, or a color, or a 2 dimensional vector. In these situations there's an additional set of controllers you can import that override Oui's default behaviour. Install them and you can use [color pickers](http://marklundin.github.io/core-controllers/documentation/#ColorPicker), [xypads](http://marklundin.github.io/core-controllers/documentation/#XYPad), [graphs](http://marklundin.github.io/core-controllers/documentation/#Graph) and more.
You simply annotate a property with a type controller.


### Rolling your own

Of course, if these controllers don't quite cut it, you can always roll your own. Oui is built upon the P(React) paradigm, which makes it's  easy to develop and add your own custom controls. Once you've developed your custom 3D arcball controlller, just import it, and annotate a property with it. You can find out more about [type annotations](./docs/annotations) here and follow the guide to [creating you're own controls](/docs/custom_controls), and check the [React](https://facebook.github.io/react/docs/getting-started.html) and [Preact](https://preactjs.com/guide/getting-started) docs for more general information on JSX.


### What about constraints?
Annotating properties is not just useful for choosing alternative controls, it's also a way to declare additional information about a property. You can for example, specify the minimum and maximum range of a number, or provide some useful human readable description of what the property actually does. These help controls understand how to display and treat the property.

Here's an example of how you'd constrain a number to within 3 and 100.

```javascript
import annotate form 'oui/annotate'

oui({

  @annotate({ min:3, max: 100})
  numeric: 5

})
```

This is useful for declaring information or metadata about a property. Not only does it inform the control, but it makes it easy to understand how your code should behave.

Theres a full guide on how to constrain and annotate properties in the [annotations docs](./docs/annotations.md)


#### License
[MIT](./LICENSE.md)
Copyright © 2016 Mark Lundin
