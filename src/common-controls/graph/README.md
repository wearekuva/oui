Here we're plotting a simple static array of numerical data. In this instance,
it's a list of frame deltas, marking the time it took to render the last
`requestAnimationFrame`. Rendering this continuously gives you an FPS meter,
however any array of numerical data can be rendered in this way

```
let frameDeltas = [ 60, 60, 60, 60, 60, 59, 40, 30, 10, 60, 60, 55, 50, 60, 60, 60, 60 ];
<Graph label='FPS demo' min={0} max={80}value={frameDeltas}/>
```

Here we're plotting a simple oscillating wave function which outputs an
array of numbers. You could use this with a phase that and continuously update
the values per frame. This would animate the wave.

We're not suppling any domain this time, so the natural boundaries of the data
are used instead.

```
let data = new Float32Array( 100 );
let phase = state.phase || 1;
let waveFn = ( v, i ) => Math.sin( i/100 * Math.PI * 5 + phase );
//requestAnimationFrame( _ => setState({ phase:phase + 0.05 }));
<Graph label='Wave function' fill={true} value={ _.map( data, waveFn )}/>
```

Any function can be plotted in this as long as it outputs an array of numbers.
