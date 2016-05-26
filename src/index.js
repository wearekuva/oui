
let oui = function(){}

if( process.env.NODE_ENV !== 'production' ){

    oui = require( './oui' )

}

oui.version = '0.0.1'
module.exports = oui
