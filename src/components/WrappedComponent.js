import React from 'react'

/*
    This is a wrapper component that simply retains an `id` property that
    which it passes back in onChange events. This allows children components
    to implement shouldComponentUpdate easier without passing back key references
*/

var style = {
    borderTop: '1px solid rgb(210, 210, 210)'
}

// export default let Component => class WrappedComponent extends Component {
//
//     constructor(){
//
//         super()
//
//         this.onChildChange = change => this.props.onChange({ [this.props.id]: change })
//
//     }
//
//     render() {
//
//         return <Component { ...this.props } onChange={ this.onChildChange } />
//
//     }
// }

let a = _ => _
export default a 
