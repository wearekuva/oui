# Oui
![experimental](https://img.shields.io/badge/stability-experimental-red.svg?style=flat-square)

> This is still experimental. The api is likely to change without support. You have been warned!

_Objects go in, UI comes out_

A super simple way to instrument your code and controls your data. Pass it an object and Oui creates a set of controls that allow you to visualise and shape your app at runtime.

## Usage

First add Oui to your project.

```
npm install @marklundin/oui --save
```

You can also grab a copy from the [dist](./dist) folder. It comes in minified and production flavours.

Once installed, create an object containing some properties or reference to an existing object. Calling `Oui()` with an object will instrument it.

```javascript
import oui from 'oui'

let api = {
  numeric : 10,
  stringy : "It's a string!",
  bool: false
}

oui( api )

```

This generates a set of controllers mapped to the `api`s properties. Modifying a controller also updates the associated property by mutating the `api`. This allows you to modify your program at runtime without setting breakpoints. 

Controllers are automatically selected based on the properties data type. Nested objects and arrays map to collapsible folders. This provides a super simple way to declare your UI and instrument more complex structures.


### Additional Components

The basic controllers cover all data types, but sometimes your data describes something more complicated such as a rotation, or a color, or a 2 dimensional vector. In these situations there's an additional set of controllers you can import that override Oui's default behaviour. Install them and you can use [color pickers](http://marklundin.github.io/core-controllers/documentation/#ColorPicker), [xy pads](http://marklundin.github.io/core-controllers/documentation/#XYPad), [graphs](http://marklundin.github.io/core-controllers/documentation/#Graph) and more.
You simply annotate a property with a type controller.

Check the [core controllers documentation](http://marklundin.github.io/core-controllers/documentation)
for the full list.

![XYPad, Graph, Color](http://g.recordit.co/FCmMPYjuTn.gif)

### Rolling your own

Of course, if these controllers don't quite cut it, you can always roll your own. Oui is built upon the P(React) paradigm, which makes it's extremly easy to develop and add your own custom controls. Once you've developed your custom 3D arcball controlller, just import it, and annotate a property with it. You can find out more about [type annotations](./docs/annotations) here and follow the guide to [creating you're own controls](/docs/custom_controls), and check the [React](https://facebook.github.io/react/docs/getting-started.html) and [Preact](https://preactjs.com/guide/getting-started) docs for more general information on JSX.


### What about constraints?
Annotating properties is not just useful for choosing alternative controls, it's also a way to declare additional information about a property. You can for example, specify the minimum and maximum range of a number, or provide some useful human readable description of what the property actually does. These help controls understand how to display and treat the property.

Here's an example of how you'd constrain a number to within 3 and 100.

```javascript
import annotate form 'oui/annotate'

let api = {

  @annotate({ min:3, max: 100})
  numeric: 5
  
})
```

This is useful for declaring informationor metadata about a property. Not only does it inform the control, but it makes it easy to understand how your code should behave.

Theres a full guide on how to constrain and annotate properties in the [annotations docs](./docs/annotations.md)


#### What on earth is `@annotate`?
@annotate is a type of decorator which is an [es7 specification](https://github.com/wycats/javascript-decorators),
and yes it's still only at a [proposal stage](https://github.com/tc39/proposals). Having said that, decorators are just syntactic sugar, you can still do the same thing in es5 land with the admittedly awkward `annotate({ min:3, max: 100 })( obj, 'num' )`. If you want to go all es7 however, drop [`babel-plugin-transform-decorators-legacy`](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) into your babel pipeline.


### FAQ's

##### Why?

Devtools are great, but sometime you want to reach into your code and manipulate it at run time without setting breakpoints. This is often the case for time based programs such as animations, games or audio based experiences. For these type of progams, its often hard to understand how a seemingly insignificant value affects the overall behaviour or feel of the app. Tools such as dat.gui have proved invaluable in theses areas.

Oui extends the idea of dat.gui, by delivering a wider range of controls, providing an easy way to create new controls, fast performance and modern language features.


#### How?
Oui is built around the [Preact](https://github.com/developit/preact) library, a tiny [React](https://facebook.github.io/react/) compatible framework for front end development. Preact brings with it all the tricks of React at a fraction of the size. The main reason I chose P(React) stack however, is for it's low overhead in [developing new controls](./docs/custom-controls.md). It's very easy for non React developers to get up to speed and hopefully this will lead to a host of new controls. 


#### What about bigger projects?
You'll likely find situations where multiple developers working on the same project will want to test their code independantly. This is where dat.gui usually had problems both in it's api and layout. 

Oui solves this using `panels`.

Panels are individual instances of Oui that can be managed independantly. They're effectively sub sections of the UI that allow you to create distinct controls and decouple areas of your code instrumentation.

Here's a quick example.

```javascript
import panel from 'oui/panel'

let p = panel()
p({num: 10}) // Continuous render. Watches api for changes

```

Panels have the same functionality as the default `oui()` method. In fact, `oui()` is actually an panel


#### License

[MIT](./LICENSE.md)


Copyright © 2016 Mark Lundin
