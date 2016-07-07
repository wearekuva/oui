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
