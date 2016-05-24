import panel from './imperative-api'

let Oui = panel()
Oui.version = 0;

if( process.env.NODE_ENV !== 'production' ){
    console.log( 'BALLS' )
}

export default Oui
