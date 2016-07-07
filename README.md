# Oui

_Objects go in, UI comes out_

![Oui](http://i.imgur.com/GCqgzWw.png)

A super simple way to instrument your code and control your data. Pass it an object and Oui creates a set of controls that allow you to visualise and shape your app at runtime.

## Getting Started

```
npm install @wearekuva/oui --save
```

#### Imperative

If you're from a [dat.gui](https://github.com/dataarts/dat.gui) background and prefer an imperative style api, oui exposes a familar interface

```javascript
let p = oui.datoui()
p.add( someObj, 'someNum' )
p.addFolder( 'dir' )
```

#### Functional

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

More information

- [Constraints](/docs/constraints.md)
- [Additional Controls]
- [Custom Controls](/docs/custom_controls.md)
- [API](/docs/api.md)


####### License
[MIT](./LICENSE.md)
Copyright © 2016 Mark Lundin
