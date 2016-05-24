# Custom controls

Oui can handle any data structure with the built in standard controls. However,
data can represent different things. An array of 3 numbers, could be a rotation,
a position or a color, and theres no real way to automatically infer which.
In these situations, you can [annotate your property with a control](./annotations)
which infers a type by explicitly associating it with a control. It's like a form
of strict typing.

There's a collection of `common-controls`, but you can also create your own.

### Creating your own

It's a fairly straight forward process. Oui is developed around Preact, a React-ish library
with much smaller footprint. If your already familiar with building components in React, then your
more than half way there. If not, I'd suggest reading through the [React documentation](https://facebook.github.io/react/docs/getting-started.html).

Let's create a simple component that displays a number that increments as you click;

```javascript
let Incrementer = ({ value, onChange, label }) => (
    <div onClick={ onChange( value + 1 )}>{ label + ' is' + value }</div>
)

Incrementer.propType = {
    value: PropType.number.isRequired
}
```

This control has a `value`, `label` and an `onChange` callback. The `value` is what needs to be
displayed, the label contains a description of what the value represents, and the `onChange`
is a function that should be called if the value needs to update in response to user interaction.
In this example, when as the user clicks the control, we pass back the `value` + 1.

The `propType` field is a way to declare the expected type of `value`. For this control, it should
be a number, but you can describe much more [complex types](https://facebook.github.io/react/docs/reusable-components.html)
of data with this syntax. It's a way to guarantee that the `value` that get's passed to your control
is valid. Oui uses this to ensure property and control compatibility.

*At minimum, all controls _must_ accept a `value` property and declare a `propType`
object containing a `value` field. `onChange` and `label` are optional.*

There may be other properties your control depends on to constrain it's output. The [Slider](./controls/Slider),
for example, has a minimum and maximum value it uses to cap it's visible range. These values are
declared using property [annotations](./annotations) and are passed to the control at runtime.

In general it's best to include these optionally, providing default or computed values if not explicitly declared.


### Validating

You can check whether your control is valid using the `isValidControl` predicate;

```javascript
import { isValidControl } from 'oui/controls'
isValidControl( Incrementer )
```

### Usage

Once you have validated your control, you can use it by annotating a property

```javascript
oui({

    annotate({type:Incrementer})
    num:10
})
```

This will override the default Slider with the `Incrementer` control.
