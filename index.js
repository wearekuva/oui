
import oui from './src'
import panel from './src/imperative-api'
// import { dial, stepper, color, xypad, graph } from './src/components'
// let plotter = component( LineChart, {height: 100, min: 0, max: 100 } )
//

let str = 5
var aa = { str:str }

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

    // @graph({fill:false, min: 0, max:80})
    // fps: new Float32Array( 100 ),
    // // //
    // // // // @annotate({max: 50, control:Dial})
    // num: 5,
    // // // //
    // // //
    // // as:{
    //     // @color()
    //     color: [220, 10, 30, 4],
    // // }
    // // //
    // // @color()
    // // color2: {r:1, g:5, b:3},
    // // // folder:{
    // // @xypad()
    // // vector: { x: 10, y: 10},
    // //
    // //     num: 10
    // // },
    // //
    // a: a,

    //@dial({min:3})
    // num2: 5,



    //

    // str: 'sdfsdf',
    // bool: 3,
    a:{
        // num: false,
        n:10,

    },
    // b:a,
    //
    // boom: function(){console.log('boom')}


    // text:true

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

let update = function( t ) {

    oui.render( obj )
    // p.render(api2)
    // // console.log( api2.str, api2.num )
    // p2.render(api2)
    // requestAnimationFrame( update )
}

window.obj = obj
// window.a =
// console.log( oui.render )
// oui.render( obj )
// debugger;
// watch( obj )


let api2 = {

    num:1,
    str:'sdfswooot'

}

var p = panel()
var p2 = panel()

window.api2 = api2
update()
