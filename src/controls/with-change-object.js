/*
    This higher order component modifies the default `onChange( change )` handle by
    passing back the `change` as a change object `{ [id]:change }` that indicates
    the slot. This makes it easy to reconcile what changed in the ui without having
    to have unneccesary references directly in components.
*/

import React, { PropTypes } from 'react'


export default Comp => {

    var style = {
        borderTop: '1px solid rgb(210, 210, 210)'
    }

    class WrappedComponent extends Comp {

        constructor(){

            super()

            this.onChildChange = change => this.props.onChange({ [this.props.id]: change })

        }

        render() {

            return <Comp { ...this.props } onChange={ this.onChildChange } />

        }
    }

    // WrappedComponent.name = 'Wrapped'+Comp.name

    WrappedComponent.propTypes = {

        onChange : PropTypes.func.isRequired,

        id : PropTypes.string.isRequired,

        value: Comp.propTypes.value

    }

    return WrappedComponent

}
