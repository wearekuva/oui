![Oui](http://i.imgur.com/GCqgzWw.png)

A super simple way to instrument your code and control your data. Pass it an object and Oui creates a set of controls that allow you to visualise and shape your app at runtime. _Objects go in, UI comes out_

## Getting Started

```
npm install ouioui --save
```
#### Functional

Oui provides a stateless declarative api that maps entire objects to UI. This is useful when you want understand the shape of an object, or you want to test out an api.

```javascript
oui({
  someNum : 10,
  dir: {
    someNestedProp: 10  
  }
})
```

#### Imperative

If you're from a [dat.gui](https://github.com/dataarts/dat.gui) background or prefer an imperative style api, datoui provides a tiny wrapper with a familiar interface. This is often useful when you want to quickly hack on a project.

```javascript
let p = oui.datoui()
p.add( obj, 'someNum' )
let dir = p.addFolder( 'dir' )
dir.add( obj, 'nestedProp' )
```

Both of these approaches are equivalent and can be used in parallel. Which one you chose depends on your codings style and use case. As a general rule though, `datoui` is handy for quickly hacking on code and testing parameters. As code matures however, parameters become more defined and are often abstracted into an api. This is when the functional approach of `oui()` may be more applicable.

### More information

- [Constraints](/docs/constraints.md)
- [Additional Controls](/docs/additional-controls.md)
- [Custom Controls](/docs/custom-controls.md)
- [Annotations](/docs/annotations.md)
- [API](/docs/api.md)


###### License
[MIT](./LICENSE.md)

© 2016 Mark Lundin
