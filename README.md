# Oui
![experimental](https://img.shields.io/badge/stability-experimental-red.svg?style=flat-square)

> This is still experimental. The api is likely to change without support. You have been warned!

_Objects go in, UI comes out_

Oui is a super simple way to instrument your code and create controls for data. Pass it an object and Oui renders a set of controls that allow you to visualise and shape your app.

##### Why?

Devtools are great, but sometime you want to reach into your code and manipulate it at run time. This is often the case for programs that have some time component, such as animations or games.

Oui provides a declarative way to do this. You pass it an object, and Oui creates an appropriate UI. Numbers turn into sliders, strings make text boxes and booleans make checkboxes. You define a nice clean api for you application and Oui lets you play with the parameters to shape the output.

# Usage
## Usage
### Usage
#### Usage

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


### Ok, but sliders are boring...

The basic controllers cover all data types, but sometimes your data describes something more complicated such as a rotation, or a color, or a 2 dimensional vector. In these situations there's an additional set of controllers you can import that override Oui's default behaviour. Install them and you can use [color pickers](http://marklundin.github.io/core-controllers/documentation/#ColorPicker), [xy pads](http://marklundin.github.io/core-controllers/documentation/#XYPad), [graphs](http://marklundin.github.io/core-controllers/documentation/#Graph) and more.
You simply annotate a property with a type controller.

Check the [core controllers documentation](http://marklundin.github.io/core-controllers/documentation)
for the full list.




![XYPad, Graph, Color](http://g.recordit.co/FCmMPYjuTn.gif)

### rolling your own

Of course, if these controllers don't quite cut it though you can always roll your own. You
want a vertical slider instead, or something more complex like a 3D rotation control.
Just create your component, import it, and tag the property with it.

Follow the guide to [rolling you're own controller](/docs/custom_controllers).


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


#### OK, but why React?
It's true there are a number of great reactive libraries to choose from. deku, vue, mithril, riot. All of these are great, and many. The list goes on. I chose React because it's a well supported product and it's unlikely that it will stagnate. I don't want to be dealing with a dead dependancy next year.


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

Oh, and we :heart dat.gui


#### License

[MIT](./LICENSE.md)


Copyright © 2016 Mark Lundin
