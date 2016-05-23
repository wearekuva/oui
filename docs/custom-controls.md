# Custom controls

Although any data structure can be handled with the default controls, sometimes
it represents something that can be more easily described and controlled with a
different control. An array of 3 numbers can be controlled via a set of sliders
but they could represent a color or a 3d rotation. In those situations, it makes
more sense to use something other than a set of sliders.

Custom controls allow you to define new control sets that might be better suited
to your application than the default set. You can find a collection of common controls
in the `common-controls` library, which includes controls such as a color picker,
graphs and xypads. But you can also create your own.

### Creating your own

Oui is developed around Preact, is a React-like library with a much smaller
footprint. If you want to build your own control you'll need to be familiar
with (P)React syntax.

#### Create your Component.

Let's create a control that displays a number and increments it on click.

```javascript
let clickIncrementer = ({ value, onChange }) => <div onClick={onChange( value + 1 )}>{ value }</div>
```

Here we displaying a the value inside a div container. When the div is clicked it
fires the onChange callback.

In order for the component to be compatible with Oui, it must accept a `value`
and and optionally `onChange` callback.  The `value` is what needs to be displayed and the
`onChange` is how to propagate it's change. If a control doesn't implement an
`onChange` it becomes a read-only control. The [graph](common-controllers/src/graph)
is an example of a read-only control.

# Validation

When Oui associates a value with a control, it firsts ensure the two are compatible.
It does the by validating the property against the controls [`propTypes`](npm proptypes).
This checks the properties signature

```javascript
import PropTypes from 'proptypes'
clickIncrementer.propTypes = PropTypes.number.isRequired
```
