/*
    This higher order component modifies the default `onChange( change )` handle by
    passing back the `change` as a change object `{ [id]:change }` that indicates
    the slot. This makes it easy to reconcile what changed in the ui without having
    to have unneccesary references directly in components.
*/
/** @jsx React.h */
import React, { Component } from 'preact'
import PropTypes from 'proptypes'

export default Comp => {
  class WrappedComponent extends Comp {

    constructor () {
      super()

      this.onChildChange = (change, path = []) => this.props.onChange(
        {[this.props.id]: change},
        path.concat([this.props.id]))
    }

    render () {
      return <Comp { ...this.props } class='oui-control' onChange={this.onChildChange} />
    }
  }

  // WrappedComponent.name = 'Wrapped'+Comp.name

  WrappedComponent.propTypes = {
    onChange: PropTypes.func.isRequired,

    id: PropTypes.string.isRequired,

    value: Comp.propTypes.value

  }

  return WrappedComponent
}
