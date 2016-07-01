'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _renderTree = require('./render-tree');

var _renderTree2 = _interopRequireDefault(_renderTree);

var _panel = require('./controls/panel');

var _panel2 = _interopRequireDefault(_panel);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _deepMerge = require('./deep-merge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _warn = require('./warn');

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// proxy render() since React returns a Component reference.


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
function prender(vnode, parent, callback) {
    let prev = parent._preactCompatRendered;
    if (prev && prev.parentNode !== parent) prev = null;
    let out = (0, _preact.render)(vnode, parent, prev);
    parent._preactCompatRendered = out;
    if (typeof callback === 'function') callback();
    return out && out._component;
}

function unmountComponentAtNode(container) {
    let existing = container._preactCompatRendered;
    if (existing && existing.parentNode === container) {
        (0, _preact.render)(h(EmptyComponent), container, existing);
        return true;
    }
    return false;
}

exports.default = opts => {

    let container = null;

    const render = (api, callback = _ => _) => {

        if (!api) {

            unmountComponentAtNode(container);
            _dom2.default.removeChild(container);
            container = null;
        } else if (container === null) {

            container = document.createElement('div');
            container.style.margin = '0.25em';
            container.style.flexBasis = 'auto';
            _dom2.default.appendChild(container);
        }

        if (api) {

            let onChange = change => {

                let isFrozen = Object.isFrozen(api);
                (0, _warn2.default)(Object.isFrozen(api), 'The `api` object is frozen an cannot be mutated.');
                if (!isFrozen) {
                    render((0, _deepMerge2.default)(api, change), callback);
                    callback(api);
                }
            };

            let Element = _preact2.default.h(
                _panel2.default,
                opts,
                (0, _renderTree2.default)(api, onChange)
            );
            prender(Element, container);
        }
    };

    return render;
};