import oui from 'oui'

console.log( oui )

let a = {
    someProp:10,
    someProp2:10,
    someProp3:10,
    someProp4:10,
    someProp5:10,
    someProp6:10,
    someProp7:10,
    anotherValue:true,

    folder:{
        someOtherValue: 'This is a string',
        folder:{
            someOtherValue: 'This is a string',
            someNewProp:10,
            andNewProp:false,
        }
    },
    folder2:{
        someOtherValue: 'This is a string',
        folder:{
            someOtherValue: 'This is a string',
            someNewProp:10,
            andNewProp:false,
        }
    },
    folder3:{
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
