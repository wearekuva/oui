
let oui = function(){}

if( process.env.NODE_ENV !== 'production' ){

    oui = require( './oui' ).default

}

oui.version = '0.0.17'
module.exports = oui
