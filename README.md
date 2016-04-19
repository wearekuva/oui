# Oui

> [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)
This is all still extremely experimental. Dragons be here

Oui is a stupidly simple way of instrumenting code and making user interfaces.
You declare your UI using plain old javascript objects and Oui handles the rest.
Objects go in and UI's come out. It's that simple

I made this library for quickly prototyping code and testing parameters. Often you
want to create a program and shape it's output. Oui essentially covers what's missing
in code editors.


## Getting Started

`npm install @marklundin/oui`

Create an object, add some properties
```javascript

let api = {
  numeric : 10,
  stringy : "It's a string!",
  bool: false
}

oui( api )
```

And hey presto,

![oui](http://g.recordit.co/RBXY4Q6JXN.gif)

Oui ships with a set of default [components](https://github.com/marklundin/core-controllers),
any primitives you declare get automatically wired up to a control. Numbers turn into sliders,
strings turn into text boxes, objects into folders. In fact anything you throw at it
has a corresponding controller of some type. Not only that, but any interaction with the ui
at runtime updates the original object. This means you effectively define a nice
clean api for you application and Oui lets you play with those parameters and shape
the output.


### But sliders are boring
The common set of controllers cover most scenarios, but sometimes they don't
truly represent what you're trying to convey. What if you want an unbounded number?
thats something a slider can't handle. Or say you want a better way of editing
the string '#ff0000' than the default text input field.

Oui also bundles a set of additional nifty controls such a [xy pads](http://marklundin.github.io/core-controllers/documentation/#XYPad), [graphs](http://marklundin.github.io/core-controllers/documentation/#Graph), [color pickers](http://marklundin.github.io/core-controllers/documentation/#ColorPicker)
and more the cover many more use cases. You simply tag the property with the controller
you want to use and Oui will render that instead.

Here's some examples of the other controls. Check the [core controllers
documentation](http://marklundin.github.io/core-controllers/documentation) for the full list.

![XYPad, Graph, Color](http://g.recordit.co/FCmMPYjuTn.gif)

If these controllers don't quite cut it though you can always roll your own. Maybe you
want a vertical slider instead, or something more complex like a 3D rotation control.
Just create your component, import it, and tag the property with it.


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
and yes it's still only a proposal. Having said that decorators are just syntactic sugar,
so you can still do the same thing in es5 land with the admittedly clunky `annotate({ min:3, max: 100 })( obj, 'num' )`
If, however you want to go all es7, drop `babel-plugin-transform-decorators-legacy`
or similar in your transform pipeline.


### Issues

#### Where's my UI?
For the moment, every call to Oui replaces the entire ui display. This means you can't
define multiple UI's defined in different parts of your application. Whilst this is
kinda intentional - it forces you to surface important aspects of your programs interface -
it's also a massive pain and which doesn't scale well. I'm planning on supporting this soon.
See #1
