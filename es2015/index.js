
let oui = function(){}

if( process.env.NODE_ENV !== 'production' ){

    oui = require( './oui' ).default

}

oui.version = '0.0.16'
module.exports = oui
