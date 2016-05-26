## Production

For smaller demo's it's often useful to include Oui as a easy way to allow users
to play with your program. For larger, more complex apps, you probably want to
remove it from production. This is not always easy to do, and can sometimes break your
build.

If your app has a build step, then Oui used nodes
[environment variables](https://nodejs.org/api/process.html#process_process_env)
to easily remove itself.

Simply run your build with the `NODE_ENV` flag set to production;

```
NODE_ENV='production' npm run build
```

and Oui will stub out it's methods with a [noop](https://en.wikipedia.org/wiki/NOP)
effectively removing it from the build.
