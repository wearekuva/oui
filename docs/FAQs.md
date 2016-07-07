### FAQ's

##### Why?

Devtools are great, but sometime you want to reach into your code and manipulate it at run time without setting breakpoints. This is often the case for time based programs such as animations, games or audio based experiences. For these type of progams, its often hard to understand how a seemingly insignificant value affects the overall behaviour or feel of the app. Tools such as dat.gui have proved invaluable in theses areas.

Oui extends the idea of dat.gui, by delivering a wider range of controls, providing an easy way to create new controls, fast performance and modern language features.


#### How?
Oui is built around the [Preact](https://github.com/developit/preact) library, a tiny [React](https://facebook.github.io/react/) compatible framework for front end development. Preact brings with it all the tricks of React at a fraction of the size. The main reason I chose P(React) stack however, is for it's low overhead in [developing new controls](./docs/custom-controls.md). It's very easy for non React developers to get up to speed and hopefully this will lead to a host of new controls.

#### What about bigger projects?
You'll likely find situations where multiple developers working on the same project will want to test their code independantly. This is where dat.gui usually had problems both in it's api and layout.

Oui solves this using `panels`.

Panels are individual instances of Oui that can be managed independantly. They're effectively sub sections of the UI that allow you to create distinct controls and decouple areas of your code instrumentation.

Here's a quick example.

```javascript
import panel from 'oui/panel'

let p = panel()
p({num: 10}) // Continuous render. Watches api for changes

```

Panels have the same functionality as the default `oui()` method. In fact, `oui()` is actually an panel
