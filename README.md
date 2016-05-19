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

### Roll your own

Of course, if these controllers don't quite cut it, you can always roll your own. Oui is built upon the P(React) paradigm, which makes it's extremly easy to develop and add your own custom controls. Once you've developed your custom 3D arball controlller, just import it, and annotate a property with it. Follow the guide to [creating you're own controls](/docs/custom_controls), and check the [React](https://facebook.github.io/react/docs/getting-started.html) and [Preact](https://preactjs.com/guide/getting-started) docs for more general information on JSX.


### What about constraints?
Tagging properties is not just useful for choosing different controllers, it's
also a way to declare additional information about a property. You can for example,
specify the minimum and maximum range for a number, or provide some useful description
of what the property actually does. These help controllers understand how to display
and update the property.

Here's an example of how you'd constrain a number to within 3 and 100.

```javascript
draw({
  @annotate({ min:3, max: 100, desc:'This property is very, very interesting' })
  numeric: 5
})
```

This is useful for passing information about a property to a controller. Think of
it as a way to declare metadata about a property. Not only does it inform the controllers, but
it makes your code eay to understand.


### What on earth is @annotate?
@annotate is a decorator. It's part of the [es7 specification](https://github.com/wycats/javascript-decorators),
and yes it's still only a proposal. Having said that, decorators are just syntactic sugar,
you can still do the same thing in es5 land with the admittedly awkward `annotate({ min:3, max: 100 })( obj, 'num' )`
If, however you want to go all es7, drop `babel-plugin-transform-decorators-legacy`
or similar in your transform pipeline.


### FAQ

##### Why?

Devtools are great, but sometime you want to reach into your code and manipulate it at run time without setting breakpoints. This is often the case for time based programs such as animations, games or audio based experiences. For these type of progams, its often hard to understand how a seemingly insignificant value affects the overall behaviour or feel of the app. Tools such as dat.gui have proved invaluable in theses areas.

Oui extends the idea of dat.gui, by delivering a wider range of controls, providing an easy way to create new controls, fast performance and modern language features.


#### How?
Oui is built around the [Preact](https://github.com/developit/preact) library, a tiny [React](https://facebook.github.io/react/) compatible framework for front end development. Preact brings with it all the tricks of React at a fraction of the size. The main reason I chose P(React) stack however, is for it's low overhead in [developing new controls](./docs/custom-controls.md). It's very easy for non React developers to get up to speed and hopefully this will lead to a host of new controls. 


#### What about panels?

On anything larger than a demo, you'll more then likely be working with other people, and they'll probably
want their own UI to test. Oui encourages you to surface parts of your code as an api, but this isn't always
practical when prototyping. This is where panels come in.

Panels are a way to create distinct UI elements. They're effectively sub sections of the UI display.

Here's how you'd do that.

```
import panel from 'oui/panel'

let opts = { title:"A title", }
let oui = panel( opts ) // Creates a namespace. A unique panel
let obs = oui.once({num: 10}) // Renders api, returns an observable or similar
let obs = oui({num: 10}) // Continuous render. Watches api for changes

// Methods
oui.destroy()

```

Oh, and we :heart: dat.gui


#### License

[MIT](./LICENSE.md)


Copyright © 2016 Mark Lundin
