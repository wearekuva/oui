# OUI. objects => UI

DUI is a stupidly simple way of instrumenting code and making user interfaces.
You declare your UI using plain old javascript objects and DUI handles the rest.
Objects go in and UI's come out. It's that simple

I made this library for quickly prototyping demo's and testing output. Often you
want to create a program and shape it's output. DUI essentially covers what's
missing in code editors.


## Getting Started

`npm install dui`

Import dui and render a slider
```javascript
import { render } from 'dui'

render({
  numeric : 10,
})
```

![http://recordit.co/JOr2TAqRH4]

DUI ships with a set of [common controls](marklundin/core-controllers) that cover
many scenarios, and by default, any primitives you declare get automatically wired
up to a controller. Numbers turn into sliders, booleans turn into checkboxes, strings
into text boxes. Anything you throw at it gets turned into a controller of some type.
Not only that, but any changes made in the ui at runtime update the object. This means
you effectively define a nice clean api for you application and DUI lets you play
with those parameters and shape the output.


### Sliders are boring
Yep, the common set of controllers handle most cases, but sometimes they don't
truly represent what you're trying to convey. What if you want an unbounded number?
thats something a slider can't handle. Or say you want a better way of editing
the string '#ff0000' than the default text input field.

DUI also bundles a set of additional controls such a dials, graphs, color pickers
and more the cover many more use cases. You simply tag the property with the controller
you want to use and DUI will render that instead. Check the core controllers
documentation for the full list.

If these controllers don't quite cut it though you can always roll your own. Maybe you
want a vertical slider instead, or something more complex like a way to rotate a 3D
vector. Just create your component, import it, and tag the property. Find out more
information [here](custom controls)


### Tagging and annotations
Tagging properties is not just useful for specifying different controllers, it's
also a way to define additional information about a property. You can for example,
specify the minimum and maximum range for a number, or provide some description
of what the property actually does. These help controllers understand how to display
and update the property.

Here's an example of how you'd tag a number and constrain it with the range of 3 and 100.

```javascript
draw({
  @annotate({ min:3, max: 100 })
  numeric: 5
})
```

This is useful for many different aspects of tagging. Think of it as a way to
declare metadata about a property. Not only does it inform the controllers, but
it makes your code more readable.


### What on earth is @annotate
@annotate is a decorator. It's part of the [es7 specification](https://github.com/wycats/javascript-decorators),
and yes it's still only a proposal. Having said that decorators are just syntactic sugar,
so you can still do the same thing in es5 land with the admittedly clunky `annotate({ min:3, max: 100 })( obj, 'num' )`
If, however you want to go all es7, drop `babel-plugin-transform-decorators-legacy`
or similar in your transform pipeline.
