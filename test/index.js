import { oui, oneOf, panel } from 'oui'
import { color } from 'common-controls/colorpicker'
import { xypad } from 'common-controls/xypad'
import { graph } from 'common-controls/graph'



let a = {

    // b: 10,
    dir:{
        someProp:10,

    },
    col1:[ 1, 1, 1],
    col2:[ 1, 1, 1 ],
    someProp2:10,
    'bool':false,
    someString:'This is a string',

    // someGraph: new Float32Array( 100 ),
    // someProp4:10,
    // someProp5:10,
    // someProp6:10,
    // someProp7:10,
    // anotherValue:true,
    //
    //

    //
    // folder:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // folder2:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // folder3:{
    //     someOtherValue: 'This is a string',
    //     folder:{
    //         someOtherValue: 'This is a string',
    //         someNewProp:10,
    //         andNewProp:false,
    //     }
    // },
    // oooh:'its a string'
}


let b = {

    // b: 10,
    someGraph: new Float32Array(50),
    folder:{
        someProp:10,
        col:[ 1, 1, 1],
    },
    someProp2:50,
    someProp3:{x:10, y:30},

}

let c = {

    // b: 10,
    someProp2:10,
    'A boolean':false,
    folder:{
        'A string':'This is editable!',
        someProp:true,
        someProp:10,
        someGraph: new Float32Array([0, 1, 0.2, 1, 0.2, 1, 0]),
        someProp:true,
    },
    someProp:5,
    bool:true,
    string:'Edit this!',

}



// oneOf({ options:[20, 10, 40] })( a, 'b' )
color({open:true})( a.dir, 'col' )
color({open:true})( b.folder, 'col' )
color({open:true})( a, 'col1' )
color({open:true})( a, 'col2' )
xypad()( b, 'someProp3' )
graph({fill:true})( b, 'someGraph' )
graph()( c, 'someGraph' )
graph()( c.folder, 'someGraph' )



window.a = a

let p = panel()
let pp = panel()
let ppp = panel()
// p( a )
// p( a )
// p( a )
// p( a )

let drawOui = t => {
    b.someGraph.forEach(( v, i ) => b.someGraph[i] = Math.sin( i/8 + ( t*0.005 )))
    p( a )
    pp( b )
    ppp( c )

    // a.sdfsdf = 20

    requestAnimationFrame( drawOui )
}

drawOui( Date.now())

//
// oui.panel()( a )
//
// oui.panel()( a )
//
// oui.panel()( a )
//
// oui.panel()( {
//
//     Ooh:'its a string',
//     Ooh2:true,
//
//     folder:{
//         someOtherValue: 'This is a string',
//         someProp:10,
//     },
//     oooh:'its a string',
//     someProp:10,
//     anotherValue:true
// } )
