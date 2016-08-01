
let oui = function(){}

if( process.env.NODE_ENV !== 'production' ){

    oui = require( './oui' ).default

}

oui.version = '0.0.18'
module.exports = oui
