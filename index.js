
import gui from './src'
import folder from './src/core-components'

let obj = {
    num: 5,
    str: 'a string',
    bool: false,

    @folder()
    dir:{
        num: 10
    }
}

let update = _ => {
    gui( obj )
    requestAnimationFrame( update )
}

window.obj = obj

update()
