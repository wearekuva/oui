![Oui](http://i.imgur.com/GCqgzWw.png)

A super simple way to instrument your code and control your data. Pass it an object and Oui creates a set of controls that allow you to visualise and shape your app at runtime. _Objects go in, UI comes out_

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Getting Started

```html
<script src="//unpkg.com/ouioui@0.0.20/dist/oui.min.js"></script>
```

```
npm install ouioui --save
```
Oui provides a stateless declarative api that maps entire objects to UI. This is useful when you want understand the shape of an object, or you want to test out an api.

```javascript
oui({
  someNum : 10,
  dir: {
    someNestedProp: 10  
  }
})
```

### More information

- [Constraints](/docs/constraints.md)
- [Additional Controls](/docs/additional-controls.md)
- [Custom Controls](/docs/custom-controls.md)
- [Annotations](/docs/annotations.md)
- [API](/docs/api.md)


###### License
[MIT](./LICENSE.md)

© 2016 Mark Lundin
