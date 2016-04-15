
import { render, merge, annotate, watch } from './src'
import { dial, stepper, color, xypad, graph } from './src/components'
// let plotter = component( LineChart, {height: 100, min: 0, max: 100 } )
//

let str = 'bals'
let a ={
    str:str
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

let obj = {


    //
    // // @plotter()

    fps: 5//new Float32Array( 100 ),
    // //
    // // // @annotate({max: 50, control:Dial})
    // num: 5,
    // //
    //
    // @color()
    // color: {r:1, g:5, b:3},
    //
    // @color()
    // color2: {r:1, g:5, b:3},
    // folder:{
    //     @xypad()
    //     vector: { x: 10, y: 10},
    //
    //     num: 10
    // },
    //
    // a: a,

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

graph({max: 80, min: 0})(obj, 'fps' )

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
    // //console.log( 'rgb(' + Math.round( obj.color.r ) + ', ' + Math.round( obj.color.g ) + ', ' + Math.round( obj.color.b ) + ')')
    let delta = t - time
    time = t
    //
    // pushOnStack( obj.fps, 1000/delta )
    // watch( obj )
    render( obj )
    requestAnimationFrame( update )
}

window.obj = obj
window.a = a
update( 1 )
// render( obj )
