/*
    Oui is mostly a stateless library. UI is declared using plain js objects and
    oui simply maps them to controllers. This workflow serves the functional
    community quite well, however many people prefer a more idiomatic imperative
    api without having to maintain state themselves.

    This module covers those scenarios where you just want to fire up the ui,
    without having to worry about merging in UI changes.

    Changes are deeply merged into the api object and the UI is automatically
    re-rendered.
*/

/** @jsx React.h */
import React, { render as preactRender } from 'preact'
import Tree from './render-tree'
import Panel from './controls/panel'
import domElement from './dom'
import merge from './deep-merge'
import warn from './warn'
import { getAnnotation } from './annotate'

// proxy render() since React returns a Component reference.
function prender (vnode, parent, callback) {
  let prev = parent._preactCompatRendered
  if (prev && prev.parentNode !== parent) prev = null
  let out = preactRender(vnode, parent, prev)
  parent._preactCompatRendered = out
  if (typeof callback === 'function') callback()
  return out && out._component
}

const EmptyComponent = () => null
function unmountComponentAtNode (container) {
  let existing = container._preactCompatRendered
  if (existing && existing.parentNode === container) {
    preactRender(React.h(EmptyComponent), container, existing)
    return true
  }
  return false
}

const resolveValue = (obj, pathArr) => pathArr.reduce((obj, i) => obj[i], obj)
const resolvePath = (obj, pathArr) => {
  let key = pathArr.shift()
  if (pathArr.length === 0) return [ obj, key ]
  return resolvePath(obj[key], pathArr)
}

const getValue = (object, path) => {
  const [obj, key] = resolvePath(object, path.slice())
  return obj[key]
}

window.resolvePath = resolvePath

export default opts => {
  let container = null

  const render = (api, callback = _ => _) => {
    if (!document.contains(domElement)) {
      document.body.appendChild(domElement)
    }

    if (!api) {
      unmountComponentAtNode(container)
      domElement.removeChild(container)
      container = null
    } else if (container === null) {
      container = document.createElement('div')
      container.style.margin = '0.25em'
      container.style.flexBasis = 'auto'
      domElement.appendChild(container)
    }

    if (api) {
      let onChange = (change, path) => {
        let isFrozen = Object.isFrozen(api)
        warn(Object.isFrozen(api), 'The `api` object is frozen an cannot be mutated.')
        if (!isFrozen) {
          let annotation = getAnnotation(...resolvePath(api, path.slice()))
          if (annotation && annotation.onChange) annotation.onChange(getValue(change, path.slice()))
          render(merge(api, change), callback)
          callback(api)
        }
      }

      let Element = <Panel { ...opts }>{Tree(api, onChange)}</Panel>
      prender(Element, container)
    }
  }

  return render
}
