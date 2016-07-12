## Production

Oui is essentially built for development. If you need to quickly remove it from production you can simply run your build with the `NODE_ENV` flag set to `'production'`

```
NODE_ENV='production' npm run build
```

This will stub out Oui essentially removing it from the build resulting in a [no-op](https://en.wikipedia.org/wiki/NOP).
