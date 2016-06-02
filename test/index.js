import oui from 'oui'

console.log( oui )

let a = {
    someProp:10,
    anotherValue:true,

    folder:{
        someOtherValue: 'This is a string',
        folder:{
            someOtherValue: 'This is a string',
            someNewProp:10,
            andNewProp:false,
        }
    },
    oooh:'its a string'
}

oui.oneOf({ options:[20, 10, 40], control:oui.ComboBox })( a, 'b' )
oui( a )


// oui.panel()( a )
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
