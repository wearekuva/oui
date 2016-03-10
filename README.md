# DUI

A fast and extensible library for creating gui for demos. 

Fast, extensible, functional, modular, rapid


## Getting Started


Install dui
`npm install dui`


Import dui and quickly prototype
```
import { render } from 'dui'

let api = {
  numeric : 10,
  aString : "Hey, I'm a string",
  aBoolean : true,
  dir:{
    someOtherValue: "I'm nested inside a directory "
  }
})

render( api )
```

Dui will infer what type of controller to use from the object type, in this instance it will create a slider, a text field and a checkbox, however dui also handles more complex data types such as colors, vectors and more. In fact, you can add custom controllers for any type of data you need. This allows you to talor the type of controls to your need. See [Custom Controls]() to see how you can create your own

### Constraints and annotations
At some points it's likely you'll want constrain how your values can be controlled. Things such as a minimum or maximum value a number can be, or an array of possible values a string should be are all valid examples of constraints.

You can add constraints to values in dui using annotations. Annotations are a means to define metadata about a property. You can annotate a property with whatever data, it'll be passed to the dui when it draws the controls

Using the [ES7 decorators](decorators) with Babel or other transpiler
```
let api = {
  @annotate({ min:0, max: 100, step:5 })
  numeric: 5
}
```

or regular es5 dat.gui style
```
let api = {
  numeric: 5
}
annotate( api, 'numeric', { min:0, max: 100, step:5 })
```

### Resolution

We're trying to balance the needs of idiomatic javascript whilst maintaining transparency over the ui state. The goal is not to hide away or abstract implementation details, but to make it simple to reason about the state of an application and its ui.

## Mutative deepMerge

By default any updates to the UI are are merged into the ui descriptor. This can be overriddent

obj3 = {
	a:5,						// Trivial mutative assign obj['a'] = 10
	b: { a:5 }					// Mutatative merge( obj['c'], { a:10 } )
	c:{ r:0, g:0, b:0},			// Controller: deepMerge( obj['b'], { r:0, g:0, b:1 }) - deep copy value	
	d: { a:{ b: { c: 5 }}}		// Complex object: deepMerge( obj['d'], { a:{ b:{ c:10 }}}) - deep copy
}


## build the render tree
Takes an object literal together with it's metadata that describes it's properties and constructs a render tree
`( literal, metadata) => renderTree`


## draw the render tree
Side Effect: Takes a renderTree and causing a visual update

`renderTree => drawDOM( renderTree )`


## Handling updates
User actions may upates the renderTree, event changes may bubble up and should be handled in some way. For the moment this will mutate the initial object literal, however we should provide other means of updating state. With this in mind The above can be extended to:

`( renderTree, onInteraction = deepMerge ) => drawDom( renderTree, change => onInteraction( change ))`

Therefore, by default, any user defined updates will be merged deeply into the object literal


## Updating and redrawing
At this stage redrawing the DOM must be handled by the consumer. This makes it easy to reason about the current state when there is a conflicting updates occurring, and also gives more granular control as to when to redraw.

For example, there may be situations, where a slider may be updating a numerica value whilst a long running tween or animation may also be attempting to change it. This conflict results in the classic slider glitch. It is hard for a program to determine which change takes priority and therefor it should be up to the developer to promote one over the other. The following example illustrates how this can be managed

```
reqAFrame(){
	// Some animation update
	Animation.update()

	if( !Animation.isPlaying() ) dui( api )
}
```

or inversely

```
let isDuiUpdating = false
reqAFrame(){

	// Some animation update
	if( !isDuiUpdating ) Animation.update()

	dui( api, change => {
		isDuiUpdating = true
		dui.deepMerge( api, change )
	})

	isDuiUpdating = false
}
```

This may change in the future depending on feedback. Granted, this may be verbose, but it allows visibility of the state


## Concerns 
One drawback of this stateless design is that there is no inherently implicit way to draw and manage multiple multiple object literals

```
dui( objA )
dui( objB )
```

The following example illustrates a way to deep merge and redraw the gui when it updates
```
	let obj = {someProp:'value'}
	let draw = api => dui( api, draw( dui.deepMerge( obj, api )) )
	draw( obj )
```
Again, this may change in the future, but for the time being, this means of updating state makes it easier for developers to undestand what is happening in their GUI


###Reconciliation
DUI reconciles all primitive types (number, string, boolean) except Symbol

```
{
	number -> slider,
	boolean -> checkbox,
	string -> textbox
}
```
