#### What on earth is `@annotate`?
@annotate is a type of decorator which is an [es7 specification](https://github.com/wycats/javascript-decorators),
and yes it's still only at a [proposal stage](https://github.com/tc39/proposals). Having said that, decorators are just syntactic sugar, you can still do the same thing in es5 land with the admittedly awkward `annotate({ min:3, max: 100 })( obj, 'num' )`. If you want to go all es7 however, drop [`babel-plugin-transform-decorators-legacy`](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) into your babel pipeline.
