
### Imperative

If you're from a [dat.gui](https://github.com/dataarts/dat.gui) background or prefer a more traditional imperative api, datoui provides a tiny wrapper with a similar interface. This is often useful when you want to quickly hack on projects.

> Note that while datoui has a similar interface as [dat.gui](https://github.com/dataarts/dat.gui), it will never likely have an exact mapping. datoui is simply a wrapper around Oui to handle certain use cases.

```javascript
let p = oui.datoui()
p.add( obj, 'someNum' )
let dir = p.addFolder( 'dir' )
dir.add( obj, 'nestedProp' )
```

Both of these approaches are equivalent and can be used in parallel. Which one you chose depends on your codings style and use case. As a general rule though, `datoui` is handy for quickly hacking on code and testing parameters. As code matures however, parameters become more defined and are often abstracted into an api. This is when the functional approach of `oui()` may be more applicable.
