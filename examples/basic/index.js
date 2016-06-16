
import { render, merge, annotate, watch } from '.es2015'
import { dial, stepper, color, xypad, graph } from './es2015/components'
// let plotter = component( LineChart, {height: 100, min: 0, max: 100 } )
//

let str = 5
var aa = { str:str }
console.log( aa )
let a ={
    aa: aa,
    test:'sdfsdf'
}
//
//
//
// a = {b:2}
// b = {c:3}
//
// c = a.merge( b )
//
// c = { b:a.b, ...b, c:4 }
//
//
// arrOfNUms = [0, 1, 2, 3].map( v => v*2 )

let data = new Float32Array( 100 );
let phase = 1;//state.phase || 1;
let waveFn = ( v, i ) => Math.sin( i/100 * Math.PI * 5 + phase );
//requestAnimationFrame( _ => setState({ phase:phase + 0.05 }));
//<Graph label='Wave function' fill={true} value={ }/>}

let obj = {


    //
    // // @plotter()

    @graph({fill:false, min: 0, max:80})
    fps: new Float32Array( 100 ),
    // // //
    // // // // @annotate({max: 50, control:Dial})
    num: 5,
    // // //
    // //
    // as:{
        @color()
        color: [220, 10, 30, 4],
    // }
    // //
    // @color()
    // color2: {r:1, g:5, b:3},
    // // folder:{
    // @xypad()
    // vector: { x: 10, y: 10},
    //
    //     num: 10
    // },
    //
    a: a,

    //@dial({min:3})
    // num2: 5,



    //

    // str: a.str,
    // bool: false,
    // a:a,
    // b:a,
    //
    // boom: function(){console.log('boom')}

    // num: 5,

    // @folder({open:true, smalls:"dfgh"})
    // dir2:a
}

// obj = {
//   numeric : 10,
//   stringy : "It's a string!",
//   bool: false
// }


// graph({max: 80, min: 0})(obj, 'fps' )

// let watch = obj => {
//     let onChange = ( key, change ) => draw( merge( obj, { [key]: change }))
//     let draw = api => render( api, onChange )
//     draw( obj )
// }
//
let time = 0
let pushOnStack = ( stack, num ) => {
    stack.copyWithin( stack, 1 ).set( [num], stack.length - 1 )
}

let update = ( t ) => {


    // document.body.style.backgroundColor = 'rgb(' + Math.round( obj.color.r ) + ', ' + Math.round( obj.color.g ) + ', ' + Math.round( obj.color.b ) + ')'
    //
    // console.log( 'rgb(' + Math.round( obj.color.r ) + ', ' + Math.round( obj.color.g ) + ', ' + Math.round( obj.color.b ) + ')')
    let delta = t - time
    time = t
    //
    pushOnStack( obj.fps, 1000/delta )
    // watch( obj )
    render( obj )
    requestAnimationFrame( update )
}

window.obj = obj
window.a = a
update( 1 )
// debugger;
// watch( obj )
