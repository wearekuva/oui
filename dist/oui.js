/*!
 * 
 * Oui.js v0.0.22
 * © 2017 Mark Lundin
 * Released under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("oui", [], factory);
	else if(typeof exports === 'object')
		exports["oui"] = factory();
	else
		root["oui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var oui=function oui(){};if(process.env.NODE_ENV!=='production'){oui=__webpack_require__(100).default;}oui.version='0.0.22';module.exports=oui;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(158)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(107);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function empty(x) {
	        return void 0 === x || null === x;
	    }
	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function normalizeChildren(acc, arr, index) {
	        for (;index < arr.length; index++) {
	            var child = arr[index];
	            if (child && child.join) normalizeChildren(acc, child, 0); else {
	                var simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                if (simple && !isString(child)) child = String(child);
	                if (simple && lastSimple) acc[acc.length - 1] += child; else if (!falsey(child)) {
	                    acc.push(child);
	                    lastSimple = simple;
	                }
	            }
	        }
	    }
	    function h(nodeName, attributes) {
	        var children;
	        lastSimple = !1;
	        if (arguments.length > 2) normalizeChildren(children = [], arguments, 2);
	        if (attributes) if (attributes.children) {
	            if (!children) normalizeChildren(children = [], attributes.children, 0);
	            delete attributes.children;
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0];
	        return function(e) {
	            var _component$setState;
	            var v, i, t = e && e.currentTarget || this, s = component.state, obj = s;
	            if (isString(eventPath)) v = delve(e, eventPath); else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
	            if (path.length > 1) {
	                for (i = 0; i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        component._dirty = !0;
	        if (1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p, currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps, props = clone(vnode.attributes);
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, old, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name && 'innerHTML' !== name) if (('class' === name || 'className' === name) && !isSvg) node.className = value && 'object' == typeof value ? hashToClassName(value) : value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--; ) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            if (!(ATTR_KEY in node)) ensureNodeData(node, getRawNodeAttributes(node));
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) if (c.componentDidMount) c.componentDidMount();
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) isSvgMode = dom instanceof SVGElement;
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel && !componentRoot) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (empty(vnode)) vnode = '';
	        if (isString(vnode)) {
	            if (dom) {
	                if (dom instanceof Text && dom.parentNode) {
	                    dom.nodeValue = vnode;
	                    return dom;
	                }
	                recollectNodeTree(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName, prevSvgMode = isSvgMode;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0]; else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (!empty(key)) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) {
	                for (j = min; j < childrenLen; j++) {
	                    c = children[j];
	                    if (c && isSameNodeType(c, vchild)) {
	                        child = c;
	                        children[j] = void 0;
	                        if (j === childrenLen - 1) childrenLen--;
	                        if (j === min) min++;
	                        break;
	                    }
	                }
	                if (!child && min < childrenLen && isFunction(vchild.nodeName) && mountAll) {
	                    child = children[min];
	                    children[min++] = void 0;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom && child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) if (children[i]) recollectNodeTree(children[i], unmountOnly);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs || empty(old[_name]))) setAccessor(dom, _name, null, old[_name], isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] !== ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2])) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        inst.props = props;
	        inst.context = context;
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var b = component.base;
	        if (!component._disableRendering) {
	            component._disableRendering = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (empty(b) || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disableRendering = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disableRendering) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    inst = initialChildComponent;
	                    var childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) baseParent.replaceChild(base, initialBase);
	                    if (!cbase && !toUnmount && component._parentComponent) {
	                        initialBase._component = null;
	                        recollectNodeTree(initialBase);
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) c.nextBase = dom;
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        var base = component.base;
	        component._disableRendering = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context;
	        this.props = props;
	        this.state = this.getInitialState && this.getInitialState() || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var lastSimple = !1;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(61);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(109);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(108);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(19);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(19);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.PropTypes = mod.exports;
	  }
	})(this, function (exports, module) {

	  'use strict';

	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	  var ReactElement = {};

	  ReactElement.isValidElement = function (object) {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  var ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };

	  var emptyFunction = {
	    thatReturns: function thatReturns(what) {
	      return function () {
	        return what;
	      };
	    }
	  };

	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  var ANONYMOUS = '<<anonymous>>';

	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        var locationName = ReactPropTypeLocationNames[location];
	        if (isRequired) {
	          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        var locationName = ReactPropTypeLocationNames[location];

	        var preciseType = getPreciseType(propValue);

	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturns(null));
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var propType = getPropType(propValue);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!ReactElement.isValidElement(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (propValue === expectedValues[i]) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      var valuesString = JSON.stringify(expectedValues);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName) == null) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || ReactElement.isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      return 'object';
	    }
	    return propType;
	  }

	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  module.exports = ReactPropTypes;
	});

	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var base=exports.base={fontFamily:'Menlo, Inconcolata, Consolas',marginTop:'2px',marginBottom:'2px',fontSize:10,boxSizing:'border-box',color:'rgb(66,66,66)'};var secondary=exports.secondary={color:'rgb(210,210,210)'};var highlight=exports.highlight={color:'rgb(255,82,82)'};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(46)('wks')
	  , uid        = __webpack_require__(30)
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hasAnnotation=exports.getAnnotation=exports.setAnnotation=exports.annotate=undefined;__webpack_require__(157);/*
	  Annotate
	  An Annotation defines meta-data about a property

	  Specifically, rendering a controller for a given property requires
	  additional information other than it's value. Some of this can be obtained
	  from it's property descriptor via `Object.getOwnPropertyDescriptor()` but
	  we may also need additional information.

	  This module provides a way to provide such additional information. Note that
	  we do not assume the format or structure of the data.

	  An example of a property metadata might be
	  {
	    description: 'This property is the background color',
	    controller: Slider,
	    max: 10,
	    min: 2
	  }

	  @annotate({ description, max, min })

	*/var DUI_KEY=Symbol('Oui, Oui');var annotate=exports.annotate=function annotate(value){return function(obj,prop){return Reflect.defineMetadata(DUI_KEY,value,obj,prop);};};var setAnnotation=exports.setAnnotation=function setAnnotation(obj,prop,value){return Reflect.defineMetadata(DUI_KEY,value,obj,prop);};var getAnnotation=exports.getAnnotation=function getAnnotation(obj,prop){return Reflect.getMetadata(DUI_KEY,obj,prop);};var hasAnnotation=exports.hasAnnotation=function hasAnnotation(obj,prop){return getAnnotation(obj,prop)!==null;};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(65)
	  , toPrimitive    = __webpack_require__(49)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(38)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(66)
	  , defined = __webpack_require__(39);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(111);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(110);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(70)
	  , enumBugKeys = __webpack_require__(40);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _defineProperty2=__webpack_require__(112);var _defineProperty3=_interopRequireDefault(_defineProperty2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	    This higher order component modifies the default `onChange( change )` handle by
	    passing back the `change` as a change object `{ [id]:change }` that indicates
	    the slot. This makes it easy to reconcile what changed in the ui without having
	    to have unneccesary references directly in components.
	*//** @jsx React.h */exports.default=function(Comp){var WrappedComponent=function(_Comp){(0,_inherits3.default)(WrappedComponent,_Comp);function WrappedComponent(){(0,_classCallCheck3.default)(this,WrappedComponent);var _this=(0,_possibleConstructorReturn3.default)(this,(WrappedComponent.__proto__||Object.getPrototypeOf(WrappedComponent)).call(this));_this.onChildChange=function(change){var path=arguments.length<=1||arguments[1]===undefined?[]:arguments[1];return _this.props.onChange((0,_defineProperty3.default)({},_this.props.id,change),[_this.props.id].concat(path));};return _this;}(0,_createClass3.default)(WrappedComponent,[{key:'render',value:function render(){return _preact2.default.h(Comp,(0,_extends3.default)({},this.props,{'class':'oui-control',onChange:this.onChildChange}));}}]);return WrappedComponent;}(Comp);// WrappedComponent.name = 'Wrapped'+Comp.name
	WrappedComponent.propTypes={onChange:_proptypes2.default.func.isRequired,id:_proptypes2.default.string.isRequired,value:Comp.propTypes.value};return WrappedComponent;};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var PI2=exports.PI2=2.0*Math.PI;var HALF_PI=exports.HALF_PI=Math.PI*0.5;var DEG2RAD=exports.DEG2RAD=Math.PI/180.0;var RAD2DEG=exports.RAD2DEG=180.0/Math.PI;var EPS=exports.EPS=10e-6;// Constants
	/*
	 * Lineary interpolates between a->b, using n as a weight
	 */var mix=exports.mix=function mix(n,a,b){return a*(1-n)+b*n;};/*
	 * Linearly maps n from a->b to x->y
	 */var map=exports.map=function map(n,a,b,x,y){return x+(n-a)*(y-x)/(b-a);};/*
	 * Linearly maps n from a->b to 0-1
	 */var normalize=exports.normalize=function normalize(n,a,b){return map(n,a,b,0,1);};/*
	 * Clamp n within range a->b
	 */var clamp=exports.clamp=function clamp(n,a,b){return n<a?a:n>b?b:n;};/*
	 * Returns a pseudo-random floating point number within the range a->b, if b is not supplied it
	 * returns within the range 0-a
	*/var random=exports.random=function random(a,b){return b===undefined?Math.random()*a:Math.random()*(b-a)+a;};// export default {
	//     mix, map, normalize, clamp, random,
	//     PI2, HALF_PI, DEG2RAD, RAD2DEG, EPS }

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	/*
	 * DEPENDENCIES
	 */

	var convert = __webpack_require__(114);


	/*
	 * CONSTRUCTOR
	 */

	function Colr () {
	  if ((this instanceof Colr) === false) { return new Colr(); }
	  this._ = {};
	}


	/*
	 * STATIC METHODS
	 */

	Colr.fromHex = function (hex) {
	  return (new Colr()).fromHex(hex);
	};

	Colr.fromGrayscale = function (value) {
	  return (new Colr()).fromGrayscale(value);
	};

	Colr.fromRgb = function (r, g, b) {
	  return (new Colr()).fromRgb(r, g, b);
	};

	Colr.fromRgbArray = function (arr) {
	  return (new Colr()).fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.fromRgbObject = function (obj) {
	  return (new Colr()).fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return (new Colr()).fromHsl(h, s, l);
	};

	Colr.fromHslArray = function (arr) {
	  return (new Colr()).fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.fromHslObject = function (obj) {
	  return (new Colr()).fromHsl(obj.h, obj.s, obj.l);
	};

	Colr.fromHsv = function (h, s, v) {
	  return (new Colr()).fromHsv(h, s, v);
	};

	Colr.fromHsvArray = function (arr) {
	  return (new Colr()).fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.fromHsvObject = function (obj) {
	  return (new Colr()).fromHsv(obj.h, obj.s, obj.v);
	};


	/*
	 * IMPORTERS
	 */

	// HEX

	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// GRAYSCALE

	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// RGB

	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof(r) !== 'number' || typeof(g) !== 'number' || typeof(b) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};

	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};

	// HSL

	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(l) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};

	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};

	// HSV

	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(v) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};

	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};


	/*
	 * EXPORTERS
	 */

	// HEX

	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) { return cached; }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }

	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);

	  var value = convert.rgb.hex(input);
	  this._.hex = value;

	  return value;
	};

	// GRAYSCALE

	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) { return cached; }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }

	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};

	// RGB

	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.rgb = value;
	  return value;
	};

	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	// HSL

	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsl = value;
	  return value;
	};

	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	// HSV

	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsv = value;
	  return value;
	};

	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};


	/*
	 * MODIFIERS
	 */

	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	/*
	 * MISC
	 */

	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;

	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }

	  return colr;
	};

	/*
	 * UTILS
	 */

	function clampPercentage (val) {
	  return Math.max(Math.min(val, 100), 0);
	}

	function clampByte (byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}

	function clampRgb (r, g, b) {
	  return [
	    Math.max(Math.min(r, 255), 0),
	    Math.max(Math.min(g, 255), 0),
	    Math.max(Math.min(b, 255), 0),
	  ];
	}

	function clampHsx (h, s, x) {
	  return [
	    Math.max(Math.min(h, 360), 0),
	    Math.max(Math.min(s, 100), 0),
	    Math.max(Math.min(x, 100), 0),
	  ];
	}


	module.exports = Colr;


/***/ },
/* 29 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 30 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(143)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(67)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.button=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _button=__webpack_require__(74);var _button2=_interopRequireDefault(_button);var _annotate=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_button2.default;var button=exports.button=function button(options){return(0,_annotate.annotate)((0,_extends3.default)({},options,{control:_button2.default}));};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _numericstepper=__webpack_require__(88);var _numericstepper2=_interopRequireDefault(_numericstepper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_numericstepper2.default;

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});/*
	    This is a simple debounce/throttle function that uses `requestAnimationFrame`
	    for timing instead of setTimeout or equivalent, as such it's better suited
	    for updates that involve a repaint, which tbh is probably most things
	*/exports.default=function(fn){var rafID=void 0;/*
	      Create a debounced wrapper
	  */var debounced=function debounced(a){// console.log( performance.now() - t)
	fn(a);cancelAnimationFrame(rafID);rafID=null;};/*
	      Return a function that only executes when rafID has fired
	  */return function(e){if(!rafID){if(e&&e.persist)e.persist();requestAnimationFrame(function(_){rafID=requestAnimationFrame(debounced.bind(undefined,e));});}};};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _shallowEqual=__webpack_require__(102);var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */var shallowCompare=function shallowCompare(instance,nextProps,nextState){return!(0,_shallowEqual2.default)(instance.props,nextProps)||!(0,_shallowEqual2.default)(instance.state,nextState);};exports.default=shallowCompare;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(condition,message){if(condition){if(typeof console!=='undefined'){console.warn('Warning: '+message);}}};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(124);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(139)
	  , enumBugKeys = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(64)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(129).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(17)
	  , TAG = __webpack_require__(10)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(46)('keys')
	  , uid    = __webpack_require__(30);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(41)
	  , wksExt         = __webpack_require__(51)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(10);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(148);
	var global        = __webpack_require__(12)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(21)
	  , TO_STRING_TAG = __webpack_require__(10)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _checkbox=__webpack_require__(75);var _checkbox2=_interopRequireDefault(_checkbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_checkbox2.default;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var rgbObject=exports.rgbObject=function rgbObject(color){return'r'in color&&typeof color.r==='number'&&'g'in color&&typeof color.g==='number'&&'b'in color&&typeof color.b==='number';};var rgbArray=exports.rgbArray=function rgbArray(color){return color instanceof Array&&color.length>=3;};var hslObject=exports.hslObject=function hslObject(color){return'h'in color&&typeof color.h==='number'&&'s'in color&&typeof color.s==='number'&&'l'in color&&typeof color.l==='number';};var hsvObject=exports.hsvObject=function hsvObject(color){return'h'in color&&typeof color.h==='number'&&'s'in color&&typeof color.s==='number'&&'v'in color&&typeof color.v==='number';};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(91);var _slider2=_interopRequireDefault(_slider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_slider2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _textinput=__webpack_require__(92);var _textinput2=_interopRequireDefault(_textinput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_textinput2.default;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preact2.default.h('svg',{fill:'currentColor',fit:'true',height:'1em',width:'1em',viewBox:'0 0 40 40',preserveAspectRatio:'xMidYMid meet',style:(0,_extends3.default)({verticalAlign:'middle'},props.style)},_preact2.default.h('g',null,_preact2.default.h('path',{d:'m20 13.4l10 10-2.3 2.3-7.7-7.7-7.7 7.7-2.3-2.3z'})));};/** @jsx React.h */

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preact2.default.h('svg',{fill:'currentColor',fit:'true',height:'1em',width:'1em',viewBox:'0 0 40 40',preserveAspectRatio:'xMidYMid meet',style:(0,_extends3.default)({verticalAlign:'middle'},props.style)},_preact2.default.h('g',null,_preact2.default.h('path',{d:'m27.7 14.3l2.3 2.3-10 10-10-10 2.3-2.3 7.7 7.7z'})));};/** @jsx React.h */

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _toConsumableArray2=__webpack_require__(62);var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _slicedToArray2=__webpack_require__(113);var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _renderTree=__webpack_require__(60);var _renderTree2=_interopRequireDefault(_renderTree);var _panel=__webpack_require__(89);var _panel2=_interopRequireDefault(_panel);var _dom=__webpack_require__(99);var _dom2=_interopRequireDefault(_dom);var _deepMerge=__webpack_require__(98);var _deepMerge2=_interopRequireDefault(_deepMerge);var _warn=__webpack_require__(36);var _warn2=_interopRequireDefault(_warn);var _annotate=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// proxy render() since React returns a Component reference.
	function prender(vnode,parent,callback){var prev=parent._preactCompatRendered;if(prev&&prev.parentNode!==parent)prev=null;var out=(0,_preact.render)(vnode,parent,prev);parent._preactCompatRendered=out;if(typeof callback==='function')callback();return out&&out._component;}/*
	    Oui is mostly a stateless library. UI is declared using plain js objects and
	    oui simply maps them to controllers. This workflow serves the functional
	    community quite well, however many people prefer a more idiomatic imperative
	    api without having to maintain state themselves.

	    This module covers those scenarios where you just want to fire up the ui,
	    without having to worry about merging in UI changes.

	    Changes are deeply merged into the api object and the UI is automatically
	    re-rendered.
	*//** @jsx React.h */var EmptyComponent=function EmptyComponent(){return null;};function unmountComponentAtNode(container){var existing=container._preactCompatRendered;if(existing&&existing.parentNode===container){(0,_preact.render)(_preact2.default.h(EmptyComponent),container,existing);return true;}return false;}var resolveValue=function resolveValue(obj,pathArr){return pathArr.reduce(function(obj,i){return obj[i];},obj);};var resolvePath=function resolvePath(obj,pathArr){var key=pathArr.shift();if(pathArr.length===0)return[obj,key];return resolvePath(obj[key],pathArr);};var getValue=function getValue(object,path){var _resolvePath=resolvePath(object,path.slice());var _resolvePath2=(0,_slicedToArray3.default)(_resolvePath,2);var obj=_resolvePath2[0];var key=_resolvePath2[1];return obj[key];};exports.default=function(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var container=null;var element=opts.domElement||_dom2.default;var render=function render(api){var callback=arguments.length<=1||arguments[1]===undefined?function(_){return _;}:arguments[1];if(!document.contains(element)){document.body.appendChild(element);}if(!api){unmountComponentAtNode(container);element.removeChild(container);container=null;}else if(container===null){container=document.createElement('div');container.style.margin='0.25em';container.style.flexBasis='auto';element.appendChild(container);}if(api){var onChange=function onChange(change,path){var isFrozen=Object.isFrozen(api);(0,_warn2.default)(Object.isFrozen(api),'The `api` object is frozen an cannot be mutated.');if(!isFrozen){var annotation=_annotate.getAnnotation.apply(undefined,(0,_toConsumableArray3.default)(resolvePath(api,path.slice())));if(annotation&&annotation.onChange)annotation.onChange(getValue(change,path.slice()));render((0,_deepMerge2.default)(api,change),callback);callback(api);}};var Element=_preact2.default.h(_panel2.default,opts,(0,_renderTree2.default)(api,onChange));prender(Element,container);}};return render;};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _typeof2=__webpack_require__(19);var _typeof3=_interopRequireDefault(_typeof2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _annotate=__webpack_require__(11);var _primitiveComponents=__webpack_require__(101);var _primitiveComponents2=_interopRequireDefault(_primitiveComponents);var _validation=__webpack_require__(103);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	  This is where we reconcile the object and decide what should and should not
	  end up in the renderTree. Essentially it is a mapping between an object literal
	  representation and a renderable graph
	*//*
	  This specifies an component to use. There is an explicit agreement
	  that this property should be controlled by a given controler.

	  This is actually great when you know the available components. It's
	  transparent to the user what should occur.

	  This is not so great for who want to declare annotation for a given property
	  without prior knowledge of what controllers are available. In this instance,
	  the author may simply want to define a description, some value constraints
	  and behaviour, but not neccesarily specify how it should be used.

	  In these instances only the public properties of an object should define it's
	  interface.

	  ##Component Matching
	  Given N controllers and M properties, it takes 0(NM) to match all properties.

	  If matching is not automatic, and properties must explicityly declare their
	  interface such as type:{r,g,b}, or @implements([InterfaceA, InterfaceB]) then
	  we have a contract between a property and it's interface.

	  For example if `propA` implements `interfaceA` and `interfaceA` can be controlled
	  by ComponentB, then we have a match. propA decalares it's interface and thats
	  all. Plus, as a prop can implement multiple interfaces, then we may have potentially
	  more than one component.

	  In this manner, given a given prop can implement X interfaces,a component can
	  be matched in O(1).

	  However javascript does not define interface types, so how could we define this
	  ```
	    let interface = ['x', 'y', 'z']

	    @implements([interace])
	    rotation: { x, y, z }
	  ```

	  Primitives get autojacked, objects get jacked to default folder directory unless
	  they match a Controller

	  1) An interface may be a React propType:
	    {
	      requiredObject: React.PropTypes.object.isRequired,
	      requiredString: React.PropTypes.string.isRequired,
	    }

	    This can actually be validated, but

	import { colorpicker } from 'custom-comps'
	{
	  // requires explicit knowledge of controller types
	  @color( 'This is a slider', min, max )
	  prop:{ r, g, b },

	}
	```
	*//*
	  Should infer an interface, an agreement of api functionality.
	  This property has this interface and implements this api, therefore
	  you can safely assume it works in this kind of way, and can be conrolled
	  with this type of controller
	*//*
	```
	{
	  // requires explicit knowledge of controller types
	  @annotate( 'This is a slider', min, max, 'colorpicker' )
	  prop:{ r, g, b },

	}
	```
	*//** @jsx React.h */exports.default=function(obj,onChange){var annotation=void 0;var Component=void 0;var components=[];/*
	      Iterate through enumerable properties of `obj`
	  */for(var prop in obj){var _Component=void 0;var value=obj[prop];/*
	        Null properties are discarded regardless of type annotation
	    */if(value===null)continue;/*
	        If there's any annotation associated with the property collect them
	        and pass them along to the Component instance
	    */annotation=(0,_annotate.getAnnotation)(obj,prop)||{};/*
	        Users can associate a property with a specific Components by including
	        the `control` annotation
	    */_Component=annotation.control;/*
	        If the property has a type annotation, validate the property against
	        the controls propTypes.
	    */if(_Component){(0,_validation.validateProp)(obj,prop,_Component);}else if(!_Component&&_primitiveComponents2.default.has(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))){/*
	          However if no Component has been declared and the value is one of the
	          primtive types, use one of the default Components
	      */_Component=_primitiveComponents2.default.get(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value));}/*
	        Create the Element based on the provided annotaions and the required Component
	    */if(_Component){components.push(_preact2.default.h(_Component,(0,_extends3.default)({key:prop,id:prop,label:prop},annotation,{onChange:onChange,value:value})));}}return components;};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(104);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(37)
	  , TAG = __webpack_require__(10)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(64)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(37);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(71)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(17)
	  , Iterators      = __webpack_require__(21)
	  , $iterCreate    = __webpack_require__(133)
	  , setToStringTag = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(141)
	  , ITERATOR       = __webpack_require__(10)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(29)
	  , createDesc     = __webpack_require__(25)
	  , toIObject      = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(49)
	  , has            = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(65)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(70)
	  , hiddenKeys = __webpack_require__(40).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(18)
	  , arrayIndexOf = __webpack_require__(126)(false)
	  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(47)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(63)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultStyle={cursor:'pointer',outline:'none',border:'none',padding:'1em',borderRadius:2,verticalAlign:'middle',textAlign:'center',lineHeight:'50%',':hover':{backgroundColor:_styles.highlight.color,color:'white'}};/**
	    The Button, arguably most basic of all components. You hover, you click, you rollout.
	    Pretty self explanatory. Documentation included for completeness
	*//** @jsx React.h */var Button=function Button(props){return _preact2.default.h('button',(0,_extends3.default)({},props,{style:(0,_extends3.default)({},_styles.base,defaultStyle,props.style),onClick:props.value}),props.label);};Button.defaultProps={label:'Button'};Button.propTypes={/*
	      function to call on click
	  */value:_proptypes2.default.func.isRequired,/**
	   * A text label
	   */label:_proptypes2.default.string,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};exports.default=Button;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 	Another stupidly simple component, it effectively wraps the native checkbox.
		Documentation included for completeness
	 */var Checkbox=function(_React$Component){(0,_inherits3.default)(Checkbox,_React$Component);function Checkbox(){(0,_classCallCheck3.default)(this,Checkbox);return(0,_possibleConstructorReturn3.default)(this,(Checkbox.__proto__||Object.getPrototypeOf(Checkbox)).apply(this,arguments));}(0,_createClass3.default)(Checkbox,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var _onChange=_props.onChange;return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,defaultStyle,{alignItems:'center'}),onClick:function onClick(evt){return _onChange(!value);}},_preact2.default.h('label',{style:_styles.base},label),_preact2.default.h('input',{checked:value,style:alignRight,type:'checkbox',onChange:function onChange(evt){return _onChange(evt.target.checked);}}));}}]);return Checkbox;}(_preact2.default.Component);// Checkbox = radium( Checkbox )
	/** @jsx React.h */Checkbox.propTypes={/**
	   * A text label
	   */label:_proptypes2.default.string,/**
	   * Determines whether the element is checked or not.
	   */value:_proptypes2.default.bool,/**
	   * A callback triggered when the checkbox is toggled
	   */onChange:_proptypes2.default.func};Checkbox.defaultProps={label:'Checkbox',value:false,onChange:function onChange(a){return a;}};var defaultStyle={display:'flex'};var alignRight={marginLeft:'auto'};exports.default=Checkbox;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hsv2Hsv=exports.rgbArr2Hsv=exports.rgb2Hsv=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _validators=__webpack_require__(54);var _colr=__webpack_require__(28);var _colr2=_interopRequireDefault(_colr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	    A set of validators for common color formats such as
	    {r, g, b}, {h, s, v}, {h, s, l} and [ r, g, b ]
	*/var withAlpha=function withAlpha(color,a){return a!==undefined?(0,_extends3.default)({a:a},color):color;};var normalizeRGB=function normalizeRGB(c){return{r:c.r*255,g:c.g*255,b:c.b*255};};var deNormalizeRGB=function deNormalizeRGB(c){return{r:c.r/255,g:c.g/255,b:c.b/255};};var rgb2Hsv=exports.rgb2Hsv=function rgb2Hsv(c){return withAlpha(_colr2.default.fromRgbObject(normalizeRGB(c)).toRawHsvObject(),c.a);};var rgbArr2Hsv=exports.rgbArr2Hsv=function rgbArr2Hsv(c){return withAlpha(_colr2.default.fromRgbArray(c.map(function(channel){return channel*255;})).toRawHsvObject(),c[3]);};var hsv2Hsv=exports.hsv2Hsv=function hsv2Hsv(c){return c;};rgb2Hsv.invert=function(c){return withAlpha(deNormalizeRGB(_colr2.default.fromHsvObject(c).toRawRgbObject()),c.a);};rgbArr2Hsv.invert=function(c){return _colr2.default.fromHsvObject(c).toRawRgbArray().map(function(channel){return channel/255;}).concat([c.a]);};hsv2Hsv.invert=function(c){return c;};exports.default=function(value){var converter=hsv2Hsv;if((0,_validators.rgbObject)(value))converter=rgb2Hsv;else if((0,_validators.rgbArray)(value))converter=rgbArr2Hsv;return converter;};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _hsvColorpicker=__webpack_require__(79);var _hsvColorpicker2=_interopRequireDefault(_hsvColorpicker);var _colr=__webpack_require__(28);var _colr2=_interopRequireDefault(_colr);var _palette=__webpack_require__(81);var _palette2=_interopRequireDefault(_palette);var _styles=__webpack_require__(8);var _colorConverter=__webpack_require__(76);var _colorConverter2=_interopRequireDefault(_colorConverter);var _validators=__webpack_require__(54);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**

	A collapsible color picker with colour palette. One is assigned by you, the
	developer, the other is defined by the end user which persists across page refreshes.
	This means that in addition to any pallete you provide, the user can also add and save
	their own colours, much in the same way as photoshop.

	To save the current color click the `+` icon to save it to the users palette.
	Shift click to remove it.

	The users colour palette is saved to [localStorage](localStorage), this means
	each domain will have it's own unique user pallete, meaning `localhost` will differ
	from `staging.com`.

	*//** @jsx React.h */var ColorPicker=function(_Component){(0,_inherits3.default)(ColorPicker,_Component);function ColorPicker(){(0,_classCallCheck3.default)(this,ColorPicker);var _this=(0,_possibleConstructorReturn3.default)(this,(ColorPicker.__proto__||Object.getPrototypeOf(ColorPicker)).call(this));_this.state={colors:[]};_this.getSystemColors=function(_){return JSON.parse(window.localStorage.getItem('oui.colorpicker'))||[];};_this.setSystemColors=function(colors){return window.localStorage.setItem('oui.colorpicker',JSON.stringify(colors));};_this.onColorChange=function(hsv){var color=(0,_colorConverter2.default)(_this.props.value).invert(hsv);_this.props.onChange(color);};return _this;}(0,_createClass3.default)(ColorPicker,[{key:'onAddColorClick',value:function onAddColorClick(color){var colors=this.getSystemColors();colors.push(color);this.setSystemColors(colors);this.forceUpdate();}},{key:'onRemoveColorClick',value:function onRemoveColorClick(color,index){var colors=this.getSystemColors();colors.splice(index,1);this.setSystemColors(colors);this.forceUpdate();}},{key:'componentWillMount',value:function componentWillMount(){this.setState({open:this.props.open});}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var label=_props.label;var style=_props.style;var palette=_props.palette;var open=this.state.open;var toHsv=(0,_colorConverter2.default)(value);var hsvColor=toHsv(value);return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,style,{height:'auto'})},_preact2.default.h('div',{style:{display:'flex',alignItems:'center'},onClick:function onClick(v){return _this2.setState({open:!open});}},_preact2.default.h('label',null,label),_preact2.default.h('span',{style:(0,_extends3.default)({},colorDropletStyle,{marginLeft:'auto',backgroundColor:_colr2.default.fromHsvObject(hsvColor).toHex()})})),open?_preact2.default.h('div',null,_preact2.default.h(_hsvColorpicker2.default,{style:style,value:hsvColor,onChange:this.onColorChange}),_preact2.default.h(_palette2.default,{key:'user-palette',values:palette.map(toHsv),onSelect:this.onColorChange}),_preact2.default.h(_palette2.default,{key:'system-palette',values:this.getSystemColors(),onSelect:this.onColorChange,onDeselect:this.onRemoveColorClick.bind(this)}),_preact2.default.h('div',{onClick:function onClick(e){return _this2.onAddColorClick(toHsv(value));}})):null);}}]);return ColorPicker;}(_preact.Component);// // import FaAdd from 'react-icons/lib/md/add'
	//
	ColorPicker.displayName='ColorPicker';var ValuePropTypeError=function ValuePropTypeError(propName,componentName){return new Error('Invalid prop `'+propName+'` supplied to'+' `'+componentName+'`. Validation failed.');};var rgbObjectPropType=function rgbObjectPropType(props,propName,componentName){if(!(0,_validators.rgbObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};var rgbArrayPropType=function rgbArrayPropType(props,propName,componentName){if(!(0,_validators.rgbArray)(props[propName])){return ValuePropTypeError(propName,componentName);}};var hsvObjectPropType=function hsvObjectPropType(props,propName,componentName){if(!(0,_validators.hsvObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};ColorPicker.propTypes={/**
	   * The text label to display
	   */label:_proptypes2.default.string,/**
	   *  If true, the color picker will be initially open
	   */open:_proptypes2.default.bool,/**
	   *  An color object
	   */value:_proptypes2.default.oneOfType([rgbObjectPropType,rgbArrayPropType,hsvObjectPropType]),/**
	   * An array of colors used as a palette
	   */palette:_proptypes2.default.oneOfType([_proptypes2.default.arrayOf(rgbObjectPropType),_proptypes2.default.arrayOf(rgbArrayPropType),_proptypes2.default.arrayOf(hsvObjectPropType)]),/**
	   * Optional component styling
	   */style:_proptypes2.default.object,/**
	   *  A function triggered when the color changes
	   */onChange:_proptypes2.default.func};ColorPicker.defaultProps={open:false,label:'ColorPicker',value:{h:1,s:50,v:50},palette:[],onChange:function onChange(a){return a;}};var colorDropletStyle={borderRadius:'50%',width:'1em',height:'1em',float:'right'};exports.default=ColorPicker;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isDegenerate=function isDegenerate(_ref){var h=_ref.h;var s=_ref.s;var v=_ref.v;return s===0||v===0;};/*
	    This HOC wraps the HSV ColorPicker in a stateful way to prevent loss of
	    information in degenerate color conversions.

	    Mapping { h, s, v } => { r, g, b } and back again, will lose information if
	    { s, v } === 0

	*//** @jsx React.h */exports.default=function(Comp){return function(_React$Component){(0,_inherits3.default)(RGB2HSV,_React$Component);function RGB2HSV(){(0,_classCallCheck3.default)(this,RGB2HSV);var _this=(0,_possibleConstructorReturn3.default)(this,(RGB2HSV.__proto__||Object.getPrototypeOf(RGB2HSV)).call(this));_this.state={value:null};_this.conditionalChange=function(value){_this.setState(isDegenerate(value)?{value:value}:{value:null});_this.props.onChange(value);};return _this;}(0,_createClass3.default)(RGB2HSV,[{key:'render',value:function render(){var _this2=this;return _preact2.default.h(Comp,(0,_extends3.default)({},this.props,{value:this.state.value||this.props.value,onChange:function onChange(change){return _this2.conditionalChange(change);}}));}}]);return RGB2HSV;}(_preact2.default.Component);};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _colr=__webpack_require__(28);var _colr2=_interopRequireDefault(_colr);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _catchDegenerateHsv=__webpack_require__(78);var _catchDegenerateHsv2=_interopRequireDefault(_catchDegenerateHsv);var _slider=__webpack_require__(55);var _slider2=_interopRequireDefault(_slider);var _textinput=__webpack_require__(56);var _textinput2=_interopRequireDefault(_textinput);var _throttle=__webpack_require__(34);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(8);var _shallowCompare=__webpack_require__(35);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var HSVColorPicker=function(_Component){(0,_inherits3.default)(HSVColorPicker,_Component);function HSVColorPicker(){(0,_classCallCheck3.default)(this,HSVColorPicker);var _this=(0,_possibleConstructorReturn3.default)(this,(HSVColorPicker.__proto__||Object.getPrototypeOf(HSVColorPicker)).call(this));_this.state={drag:false,boundingRect:null};var computeHsvaFromMouseEvent=function computeHsvaFromMouseEvent(e,bounds){var x=e.clientX===undefined?e.touches[0].clientX:e.clientX;var y=e.clientY===undefined?e.touches[0].clientY:e.clientY;var value=_this.props.value;var h=value.h;var s=(x-bounds.left)/bounds.width*100;var v=(bounds.height-(y-bounds.top))/bounds.height*100;var a=_this.props.value.a;s=Math.min(100,Math.max(0,s));v=Math.min(100,Math.max(0,v));return a===undefined?{h:h,s:s,v:v}:{h:h,s:s,v:v,a:a};};_this.onMouseDown=function(e){e.preventDefault();/*
	          For performance reasons we pre calculate the bounding rect on
	          mouse down, this means we don't need to do this on every mouse move
	          event and therefore we avoid any layout thrashing.

	          The caveat is that any sizing changes that occur between mousedown
	          will cause mean the cached boundingRect is invalid and causes incorrect
	          results. However because of performance gains, this is acceptable
	          behaviour as changes to size are expected to be rare enough
	      */var rect=e.currentTarget.getBoundingClientRect();document.addEventListener('mousemove',_this.onMouseMove);document.addEventListener('touchmove',_this.onMouseMove);document.addEventListener('mouseup',_this.onMouseUp);document.addEventListener('touchend',_this.onMouseUp);var hsv=computeHsvaFromMouseEvent(e,rect);_this.setState({drag:true,boundingRect:rect});_this.props.onChange(hsv);};_this.onMouseMove=(0,_throttle2.default)(function(e){e.preventDefault();if(_this.state.drag)_this.props.onChange(computeHsvaFromMouseEvent(e,_this.state.boundingRect));});_this.onMouseUp=function(e){document.removeEventListener('mousemove',_this.onMouseMove);document.removeEventListener('touchmove',_this.onMouseMove);document.removeEventListener('mouseup',_this.onMouseUp);document.removeEventListener('touchend',_this.onMouseUp);_this.setState({drag:false});};_this.onChannelChange=function(channel){_this.props.onChange((0,_extends3.default)({},_this.props.value,channel));};_this.onHexChange=function(hex){_this.props.onChange((0,_extends3.default)({},_this.props.value,_colr2.default.fromHex(hex).toHsvObject()));};return _this;}(0,_createClass3.default)(HSVColorPicker,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){var _props$value=this.props.value;var h=_props$value.h;var s=_props$value.s;var v=_props$value.v;var a=_props$value.a;var color=nextProps.value;return(h!==color.h||s!==color.s||v!==color.v||a!==color.a)&&(0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var style=_props.style;var h=value.h;var s=value.s;var v=value.v;var a=value.a;// Preact does not pick up Components defaultProps
	style=style||HSVColorPicker.defaultProps.style;// Used to prevent collisions between fill() refs
	var uuid=Math.floor(Math.random()*999999999999999);return _preact2.default.h('div',null,_preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,style)},_preact2.default.h('svg',{width:'100%',height:'100%',version:'1.1',xmlns:'http://www.w3.org/2000/svg',style:defaultStyle,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUp},_preact2.default.h('defs',null,_preact2.default.h('linearGradient',{id:'horizontal-gradient'+uuid},_preact2.default.h('stop',{offset:'0%','stop-color':'white'}),_preact2.default.h('stop',{offset:'100%','stop-color':'hsl('+h+',100%,50%)'})),_preact2.default.h('linearGradient',{id:'vertical-gradient'+uuid,x1:'0',x2:'0',y1:'0',y2:'1'},_preact2.default.h('stop',{offset:'0%','stop-color':'black','stop-opacity':'0'}),_preact2.default.h('stop',{offset:'100%','stop-color':'black'})),_preact2.default.h('linearGradient',{id:'alpha-gradient',x1:'0',x2:'1',y1:'0',y2:'0'},_preact2.default.h('stop',{offset:'0%','stop-color':'hsl('+h+',100%,50%)','stop-opacity':'0'}),_preact2.default.h('stop',{offset:'100%','stop-color':'hsl('+h+',100%,50%)','stop-opacity':'100'})),_preact2.default.h('linearGradient',{id:'hsv-gradient'},stops)),_preact2.default.h('rect',{width:'100%',height:'100%',style:rect,fill:'url(#horizontal-gradient'+uuid+')'}),_preact2.default.h('rect',{width:'100%',height:'100%',style:rect,fill:'url(#vertical-gradient'+uuid+')'}),_preact2.default.h('circle',{fill:'none',stroke:'white','stroke-width':'1.5',r:'0.3em',cx:s+'%',cy:100-v+'%'}))),_preact2.default.h(_slider2.default,{includeStepper:false,label:'',step:1,min:0,max:359,value:h,style:hueSlider,onChange:function onChange(h){return _this2.onChannelChange({h:h});}}),a!==undefined?_preact2.default.h(_slider2.default,{includeStepper:false,label:'alpha',step:0.001,min:0,max:1,value:a,style:alphaSlider,onChange:function onChange(a){return _this2.onChannelChange({a:a});}}):null,_preact2.default.h(_textinput2.default,{label:'#',value:_colr2.default.fromHsvObject(value).toHex().slice(1).toUpperCase(),pattern:/^[0-9A-F]{2,6}$/i,onSubmit:this.onHexChange}));}}]);return HSVColorPicker;}(_preact.Component);/** @jsx React.h */HSVColorPicker.defaultProps={label:'HSVColorPicker',style:{width:'100%',height:150},value:{h:0,s:80,l:50}};HSVColorPicker.propTypes={/**
	   *  A text label
	   */label:_proptypes2.default.string,/**
	   * The default color of the component
	   */value:_proptypes2.default.shape({h:_proptypes2.default.number.isRequired,s:_proptypes2.default.number.isRequired,v:_proptypes2.default.number.isRequired,a:_proptypes2.default.number}).isRequired,/**
	   * Optional component styling
	   */style:_proptypes2.default.object,onChange:_proptypes2.default.func};var defaultStyle={cursor:'default',display:'block'};var hueSlider={backgroundBar:{fill:'url(#hsv-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var alphaSlider={backgroundBar:{fill:'url(#alpha-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var rect={rx:_styles.base.borderRadius,ry:_styles.base.borderRadius};/*
	    Creates an array of svg `<stop>` elements representing a full linear gradient
	    from hue 0 -> 360 in a given number of steps
	*/var createLinearGradientOfSVGStops=function createLinearGradientOfSVGStops(steps){var l=0;var i=100/steps;var stops=[];while(l++<steps){stops.push(_preact2.default.h('stop',{offset:String(i*l)+'%',key:l,'stop-color':'hsl( '+l*360/steps+', 100%, 50% )'}));}return stops;};/*
	    Pre calculate an array of `<stops>` to use as the slider gradient
	*/var stops=createLinearGradientOfSVGStops(100);exports.default=(0,_catchDegenerateHsv2.default)(HSVColorPicker);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.color=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _colorpicker=__webpack_require__(77);var _colorpicker2=_interopRequireDefault(_colorpicker);var _annotate=__webpack_require__(11);var _withChangeObject=__webpack_require__(26);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var control=(0,_withChangeObject2.default)(_colorpicker2.default);exports.default=control;var color=exports.color=function color(options){return(0,_annotate.annotate)((0,_extends3.default)({},options,{control:control}));};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _colr=__webpack_require__(28);var _colr2=_interopRequireDefault(_colr);var _button=__webpack_require__(32);var _button2=_interopRequireDefault(_button);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// import MdRemove from 'react-icons/lib/md/remove'
	/**
	 * The ColorButton is simply a coloured button used as
	 * square glyph in the colour palette
	 *//** @jsx React.h */var ColorButton=function ColorButton(props){var value=props.value;var onClick=props.onClick;var children=props.children;var color=_colr2.default.fromHsvObject(value).toHex();var style={backgroundColor:color,width:'1em',height:'1em',// marginLeft: '0.3em',
	marginBottom:'0.5em',marginRight:'0.5em',padding:'0.5em',display:'inline-block',':hover':{backgroundColor:color}};return _preact2.default.h(_button2.default,(0,_extends3.default)({label:''},props,{style:style,value:onClick}),children);};var Palette=function(_React$Component){(0,_inherits3.default)(Palette,_React$Component);function Palette(){(0,_classCallCheck3.default)(this,Palette);var _this=(0,_possibleConstructorReturn3.default)(this,(Palette.__proto__||Object.getPrototypeOf(Palette)).call(this));_this.state={hover:null};return _this;}(0,_createClass3.default)(Palette,[{key:'render',value:function render(){var _this2=this;var _props=this.props;var values=_props.values;var onSelect=_props.onSelect;var onDeselect=_props.onDeselect;var hover=this.state.hover;//
	var areColoursRemoveable=onDeselect!==undefined;// If we have no colors then don't bother showing anything
	if(!values||values.length===0)return null;return _preact2.default.h('div',null,values.map(function(color,i){return _preact2.default.h(ColorButton,{key:i,value:color,onMouseOver:function onMouseOver(e){return areColoursRemoveable&&e.shiftKey?_this2.setState({hover:i}):null;},onMouseOut:areColoursRemoveable?function(e){return _this2.setState({hover:null});}:null,onClick:function onClick(e){return e.shiftKey?onDeselect(color,i):onSelect(color);}},i===hover?_preact2.default.h('div',null):null);}));}}]);return Palette;}(_preact2.default.Component);Palette.defaultProps={/**
	   * An array of colors
	   */values:[],onSelect:function onSelect(a){return a;}};Palette.propTypes={values:_proptypes2.default.arrayOf(_proptypes2.default.shape({h:_proptypes2.default.number.isRequired,s:_proptypes2.default.number.isRequired,v:_proptypes2.default.number.isRequired})).isRequired,onSelect:_proptypes2.default.func,onDeselect:_proptypes2.default.func,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};var style={margin:'0.5em'};exports.default=Palette;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultStyle={float:'right',':focus':{outline:'none'}};/**
	    Another simple component. The Combobox provides a basic wrapper around the
	    native form element with support for an array of strings, an array
	    of key value tuples, or an object.
	*//** @jsx React.h */var ComboBox=function(_React$Component){(0,_inherits3.default)(ComboBox,_React$Component);function ComboBox(){(0,_classCallCheck3.default)(this,ComboBox);return(0,_possibleConstructorReturn3.default)(this,(ComboBox.__proto__||Object.getPrototypeOf(ComboBox)).apply(this,arguments));}(0,_createClass3.default)(ComboBox,[{key:'render',value:function render(){var _props=this.props;var label=_props.label;var options=_props.options;var value=_props.value;var _onChange=_props.onChange;var isArray=Array.isArray(options);var valueSelected=false;var optionsElems=[];var arrOptions=[];for(var i in options){var element=void 0;arrOptions.push(options[i]);if(options[i]===value&&!valueSelected){valueSelected=true;element=_preact2.default.h('option',{key:i,value:options[i],selected:true},isArray?options[i]:i);}else{element=_preact2.default.h('option',{key:i,value:options[i]},isArray?options[i]:i);}optionsElems.push(element);}return _preact2.default.h('div',{style:_styles.base},_preact2.default.h('label',null,label),_preact2.default.h('select',{onChange:function onChange(e){return _onChange(arrOptions[e.target.selectedIndex]);},style:defaultStyle},optionsElems));}}]);return ComboBox;}(_preact2.default.Component);ComboBox.defaultProps={/**
		 * A text label
		 */label:'ComboBox',/**
		 * An array of options to populate the combobox
		 */options:[],/**
		 * A callback triggered when the component updates
		 */onChange:function onChange(a){return a;}};ComboBox.propTypes={label:_proptypes2.default.any,options:_proptypes2.default.oneOfType([_proptypes2.default.arrayOf(_proptypes2.default.any).isRequired,_proptypes2.default.objectOf(_proptypes2.default.any).isRequired]),value:_proptypes2.default.any.isRequired,onChange:_proptypes2.default.func};exports.default=ComboBox;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.combobox=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _combobox=__webpack_require__(82);var _combobox2=_interopRequireDefault(_combobox);var _annotate=__webpack_require__(11);var _withChangeObject=__webpack_require__(26);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var control=(0,_withChangeObject2.default)(_combobox2.default);exports.default=control;var combobox=exports.combobox=function combobox(options){return(0,_annotate.annotate)((0,_extends3.default)({},options,{control:control}));};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);var _expandLess=__webpack_require__(57);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(58);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	    The Folder is a container component that can be toggled opened and closed.
	    To render it's children, it accepts an array or object of react elements.
	*/var Folder=function(_Component){(0,_inherits3.default)(Folder,_Component);function Folder(){(0,_classCallCheck3.default)(this,Folder);var _this=(0,_possibleConstructorReturn3.default)(this,(Folder.__proto__||Object.getPrototypeOf(Folder)).call(this));_this.state={open:false};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}(0,_createClass3.default)(Folder,[{key:'componentWillMount',value:function componentWillMount(){this.setState({open:this.props.open});}},{key:'render',value:function render(){var _props=this.props;var label=_props.label;var value=_props.value;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preact2.default.h('div',{style:_styles.base},_preact2.default.h('div',{onClick:this.toggleOpen,style:{display:'flex',alignItems:'center'}},_preact2.default.h('label',null,label),_preact2.default.h(Chevron,{style:{marginLeft:'auto'}})),open?_preact2.default.h('div',{style:{padding:'1em',backgroundColor:'rgba( 1, 1, 1, 0.04 )',borderRadius:2}},value()):null);}}]);return Folder;}(_preact.Component);// Folder = radium( Folder )
	/** @jsx React.h */Folder.defaultProps={label:'Folder',onChange:function onChange(a){return a;},open:false};Folder.propTypes={// value : PropTypes.oneOfType([
	//     PropTypes.object,
	//     PropTypes.array,
	// ]).isRequired,
	value:_proptypes2.default.func.isRequired,onChange:_proptypes2.default.func,label:_proptypes2.default.string,style:_proptypes2.default.object,open:_proptypes2.default.bool};var floatRight={// float: 'right'
	};exports.default=Folder;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _folder=__webpack_require__(84);var _folder2=_interopRequireDefault(_folder);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_folder2.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _toConsumableArray2=__webpack_require__(62);var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);var _math=__webpack_require__(27);var _warning=__webpack_require__(93);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultStyle={nonScalingStroke:{vectorEffect:'non-scaling-stroke',shapeRendering:'geometricPrecision'},rect:{fill:'none',strokeWidth:1,stroke:_styles.secondary.color}};/**
	This is a read only component that visualises an array of numbers as a line graph.
	entries are plotted along the X axis with their value the Y axis. The domain of
	the graph can beset using the `min` and `max` properties, however if none are
	supplied, they're calculated using the inherent minimum and maximum values from
	the suplied data.

	Handy for plotting functions, visualising sound information and graphing general data
	*//** @jsx React.h */var Graph=function(_React$Component){(0,_inherits3.default)(Graph,_React$Component);function Graph(){(0,_classCallCheck3.default)(this,Graph);return(0,_possibleConstructorReturn3.default)(this,(Graph.__proto__||Object.getPrototypeOf(Graph)).apply(this,arguments));}(0,_createClass3.default)(Graph,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var style=_props.style;var min=_props.min;var max=_props.max;var fill=_props.fill;(0,_warning2.default)(value.length<=1,'warning: The `graph` component expects and array of more than 1 number. Any less will result in an empty graph.');/**
	     *  If no domain is supplied, calculate based on the bounds
	     *  of the `value` data
	     */min=min!==undefined?min:Math.min.apply(Math,(0,_toConsumableArray3.default)(value));max=max!==undefined?max:Math.max.apply(Math,(0,_toConsumableArray3.default)(value));/*
	        The data is rendered using a SVG Polyine which expects an array of `x`
	        `y` values. Here we fill in the missing `y` values
	    */var value2D=[];var length=value.length;var n=void 0;var interval=100/(length-1);for(var i=0;i<length;i++){n=value[i];value2D.push(String(i*interval));value2D.push(String((0,_math.map)(n,min,max,100,0)));}/*
	        If the graph is to be filled in, we need to create additional values at
	        the start and end of the sequence.
	    */if(fill){value2D=['0','100'].concat(value2D,['100','100']);}/*
	        If our domain is degenerate, then don't bother rendering the polyline
	    */return _preact2.default.h('div',{style:_styles.base},label,_preact2.default.h('div',{style:style},_preact2.default.h('svg',{style:(0,_extends3.default)({},_styles.base,{display:'block'}),width:'100%',height:'100%',viewBox:'0 0 100 100',preserveAspectRatio:'none'},_preact2.default.h('rect',{style:(0,_extends3.default)({},defaultStyle.rect,defaultStyle.nonScalingStroke),fill:'rgb( 250, 250, 250 )',width:'100%',height:'100%'}),min<max?_preact2.default.h('polyline',{style:defaultStyle.nonScalingStroke,fill:fill?_styles.highlight.color:'none',stroke:_styles.highlight.color,points:value2D}):null)));}}]);return Graph;}(_preact2.default.Component);var arrayLikeStructures=[_proptypes2.default.arrayOf(_proptypes2.default.number),_proptypes2.default.instanceOf(Int8Array),_proptypes2.default.instanceOf(Uint8Array),_proptypes2.default.instanceOf(Uint8ClampedArray),_proptypes2.default.instanceOf(Int16Array),_proptypes2.default.instanceOf(Uint16Array),_proptypes2.default.instanceOf(Int32Array),_proptypes2.default.instanceOf(Uint32Array),_proptypes2.default.instanceOf(Float32Array),_proptypes2.default.instanceOf(Float64Array)];Graph.propTypes={/**
	   * A text label
	   */label:_proptypes2.default.string,/**
	   * An array of numerical data
	   */value:_proptypes2.default.oneOfType(arrayLikeStructures).isRequired,/**
	   * Defines the minimum range of the graph.
	   */min:_proptypes2.default.number,/**
	   * Defines the maximum range of the graph.
	   */max:_proptypes2.default.number,/**
	   * If true, the graph will be a solid color
	   */fill:_proptypes2.default.bool,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};Graph.defaultProps={fill:false,label:'Graph',value:[],style:{width:'100%',height:150}};exports.default=Graph;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.graph=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _graph=__webpack_require__(86);var _graph2=_interopRequireDefault(_graph);var _annotate=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_graph2.default;var graph=exports.graph=function graph(options){return(0,_annotate.annotate)((0,_extends3.default)({},options,{control:_graph2.default}));};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _math=__webpack_require__(27);var _styles=__webpack_require__(8);var _shallowCompare=__webpack_require__(35);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	    This component is an alternative way to control a number. It's generally used
	    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
	    although you can optionally supply either.
	*/var NumericStepper=function(_React$Component){(0,_inherits3.default)(NumericStepper,_React$Component);function NumericStepper(){(0,_classCallCheck3.default)(this,NumericStepper);return(0,_possibleConstructorReturn3.default)(this,(NumericStepper.__proto__||Object.getPrototypeOf(NumericStepper)).apply(this,arguments));}(0,_createClass3.default)(NumericStepper,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return(0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var style=_props.style;var value=_props.value;value=(0,_math.clamp)(value,min,max);var validate=function validate(v){return step!==undefined?Math.round(v*(1/step))/(1/step):v;};value=validate(value);var onChange=function onChange(e){e.preventDefault();var value=parseFloat(e.currentTarget.value);if(!isNaN(value))_this2.props.onChange(validate(value));};return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,{display:'flex',alignItems:'baseline'},style)},_preact2.default.h('label',null,label),_preact2.default.h('style',null,'\n        input[type=number] {\n            -moz-appearance:textfield;\n        }\n\n        input::-webkit-inner-spin-button,\n        input::-webkit-outer-spin-button{\n            margin: 0;\n            -webkit-appearance: none;\n        }\n      '),_preact2.default.h('input',(0,_extends3.default)({type:'number'},this.props,{style:defaultStyle,value:value,onInput:onChange,onChange:onChange,ref:function ref(_ref){return _this2.domRef=_ref;}})));}}]);return NumericStepper;}(_preact2.default.Component);// NumericStepper = radium( NumericStepper )
	// import radium from 'radium'
	/** @jsx React.h */NumericStepper.propTypes={/**
	   *  A text label
	   */label:_proptypes2.default.string,/**
	   *  The value of the slider
	   */value:_proptypes2.default.number.isRequired,/**
	   *  Specifies the minimum value for the component
	   */min:_proptypes2.default.number,/**
	   *  Specifies the maximum value for the component
	   */max:_proptypes2.default.number,/**
	   * Specifies the intervals step
	   */step:_proptypes2.default.number,/**
		 * A callback triggered when the component updates
		 */onChange:_proptypes2.default.func,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};NumericStepper.defaultProps={label:'NumericStepper',min:0,max:100,style:{width:'100%'},onChange:function onChange(a){return a;}};var defaultStyle={fontFamily:'inherit',borderWidth:1,borderStyle:'solid',borderColor:_styles.secondary.color,borderRadius:2,backgroundColor:'transparent',outline:'none',// textAlign: 'right',
	// width: 30,
	fontSize:_styles.base.fontSize,// lineHeight: '15  px',
	color:_styles.base.color,// float:'right',
	marginLeft:'auto',':focus':{borderColor:_styles.highlight.color},':hover':{borderColor:_styles.highlight.color}};exports.default=NumericStepper;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _panel=__webpack_require__(90);var _panel2=_interopRequireDefault(_panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_panel2.default;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _styles=__webpack_require__(8);var _expandLess=__webpack_require__(57);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(58);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/** @jsx React.h */var Panel=function(_React$Component){(0,_inherits3.default)(Panel,_React$Component);function Panel(){(0,_classCallCheck3.default)(this,Panel);var _this=(0,_possibleConstructorReturn3.default)(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).call(this));_this.state={open:true};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}(0,_createClass3.default)(Panel,[{key:'componentWillMount',value:function componentWillMount(){this.setState({open:this.props.open});}},{key:'render',value:function render(){var _props=this.props;var children=_props.children;var label=_props.label;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,style),'class':'oui-panel'},_preact2.default.h('header',{style:{lineHeight:'11px'},onClick:this.toggleOpen},_preact2.default.h('div',{style:{display:'flex'}},_preact2.default.h('label',null,label),_preact2.default.h(Chevron,{style:{marginLeft:'auto'}})),open?_preact2.default.h('hr',{style:lineStyle}):null),open?_preact2.default.h('div',null,children):null);}}]);return Panel;}(_preact2.default.Component);Panel.defaultProps={label:'Panel',open:true};var lineStyle={borderWidth:'0px 0px 1px 0px',borderTopStyle:'solid',borderRightStyle:'solid',borderLeftStyle:'solid',borderTopColor:_styles.secondary.color,borderRightColor:_styles.secondary.color,borderLeftColor:_styles.secondary.color,borderBottomColor:'rgba( 1, 1, 1, 0.05 )'};var style={boxSizing:'border-box',lineHeight:'2em',display:'flex',flexDirection:'column',width:275,background:'rgb( 250, 250, 250 )',borderRadius:2,padding:'1em',margin:0};exports.default=Panel;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _numericstepper=__webpack_require__(33);var _numericstepper2=_interopRequireDefault(_numericstepper);var _shallowCompare=__webpack_require__(35);var _shallowCompare2=_interopRequireDefault(_shallowCompare);var _math=__webpack_require__(27);var _throttle=__webpack_require__(34);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	    A classic numerical slider, useful for representing numbers within a bounded
	    range. It also contains a `NumericalStepper` for displaying the text value
	    and entering values directly.
	*/// import radium from 'radium'
	var Slider=function(_React$Component){(0,_inherits3.default)(Slider,_React$Component);function Slider(){(0,_classCallCheck3.default)(this,Slider);var _this=(0,_possibleConstructorReturn3.default)(this,(Slider.__proto__||Object.getPrototypeOf(Slider)).call(this));_this.state={drag:false,rect:null};_this.validate=function(value){var _this$props=_this.props;var min=_this$props.min;var max=_this$props.max;var step=_this$props.step;value=(0,_math.clamp)(value,min,max);if(step!==undefined)value=Math.round(value*(1/step))/(1/step);return value;};_this.onNumericStepperChange=function(value){_this.props.onChange(_this.validate(value));};/*
	        Compute the numerical value from a touch/mouse event
	    */var computeValuefromMouseEvent=function computeValuefromMouseEvent(e,bounds){return(0,_math.map)(e.clientX===undefined?e.touches[0].clientX:e.clientX,bounds.left,bounds.right,_this.props.min,_this.props.max);};/*
	        Computes the value on mouse/touch down and triggers an `onChange`
	    */_this.onMouseDown=function(e){e.preventDefault();var _this$props2=_this.props;var min=_this$props2.min;var max=_this$props2.max;var step=_this$props2.step;var onChange=_this$props2.onChange;step=step||(max-min)/1000;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};/*
	          For performance reasons we pre calculate the bounding rect on
	          mouse down, this means we don't need to do this on every mouse move
	          event and therefore we avoid any layout thrashing.

	          The caveat is that any sizing changes that occur between mousedown
	          will cause mean the cached boundingRect is invalid and causes incorrect
	          results. However because of performance gains, this is acceptable
	          behaviour as changes to size are expected to be rare enough
	      */var rect=e.currentTarget.getBoundingClientRect();_this.setState({drag:true,rect:rect});var value=validate(computeValuefromMouseEvent(e,_this.state.rect));if(_this.props.value!==value)onChange(value);};/*
	        On mouse/touch move, trigger an onChange event
	    */_this.onMouseMove=(0,_throttle2.default)(function(e){var _this$props3=_this.props;var min=_this$props3.min;var max=_this$props3.max;var step=_this$props3.step;var onChange=_this$props3.onChange;step=step||(max-min)/1000;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};var value=validate(computeValuefromMouseEvent(e,_this.state.rect));if(_this.props.value!==value)onChange(value);});_this.onTouchMove=(0,_throttle2.default)(function(e){e.preventDefault();var _this$props4=_this.props;var min=_this$props4.min;var max=_this$props4.max;var step=_this$props4.step;var onChange=_this$props4.onChange;step=step||(max-min)/1000;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};var value=validate(computeValuefromMouseEvent(e,_this.state.rect));if(_this.props.value!==value)onChange(value);});/*
	        changes the dragging state
	    */_this.onMouseUp=function(e){_this.setState({drag:false});};return _this;}(0,_createClass3.default)(Slider,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return(0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'componentDidUpdate',value:function componentDidUpdate(props,state){if(this.state.drag&&!state.drag){document.addEventListener('mousemove',this.onMouseMove);document.addEventListener('mouseup',this.onMouseUp);document.addEventListener('touchmove',this.onTouchMove);document.addEventListener('touchend',this.onMouseUp);}else if(!this.state.drag&&state.drag){document.removeEventListener('mousemove',this.onMouseMove);document.removeEventListener('mouseup',this.onMouseUp);document.removeEventListener('touchmove',this.onTouchMove);document.removeEventListener('touchend',this.onMouseUp);}}},{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var onChange=_props.onChange;var includeStepper=_props.includeStepper;var style=_props.style;var stepperProps={value:value,label:label,min:min,max:max,step:step,onChange:onChange};var offsetPercentage=(0,_math.map)((0,_math.clamp)(value,min,max),min,max,0,100)+'%';value=this.validate(value);return _preact2.default.h('div',{style:_styles.base},includeStepper?_preact2.default.h(_numericstepper2.default,(0,_extends3.default)({},stepperProps,{onChange:this.onNumericStepperChange})):null,_preact2.default.h('svg',{width:'100%',height:'1em',style:defaultStyle,onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown},_preact2.default.h('rect',{width:'100%',height:'100%',style:(0,_extends3.default)({},defaultStyle,backgroundBar,style.backgroundBar)}),_preact2.default.h('rect',{height:'100%',style:(0,_extends3.default)({},defaultStyle,bar,style.bar),width:offsetPercentage}),_preact2.default.h('circle',{cy:'50%',cx:offsetPercentage,r:'0.5em',style:(0,_extends3.default)({},defaultStyle,thumb,style.thumb)})));}}]);return Slider;}(_preact2.default.Component);// Slider = radium( Slider )
	/** @jsx React.h */Slider.propTypes={/**
	   *  A text label
	   */label:_proptypes2.default.string,/**
	   *  The value of the slider
	   */value:_proptypes2.default.number.isRequired,/**
	   *  Specifies the minimum value for the component
	   */min:_proptypes2.default.number,/**
	   *  Specifies the maximum value for the component
	   */max:_proptypes2.default.number,/**
	   * Specifies the intervals step
	   */step:_proptypes2.default.number,/**
		 * A callback triggered when the component updates
		 */onChange:_proptypes2.default.func,/**
	   *  If false, the numeric stepper is not displayed
	   */includeStepper:_proptypes2.default.bool,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};Slider.defaultProps={label:'Slider',includeStepper:true,min:0,max:100,onChange:function onChange(a){return a;},style:{width:'100%'}};var defaultStyle={display:'block',overflow:'visible',cursor:'default',stroke:'none',rx:2,ry:2};var thumb={fill:'none'};var backgroundBar={fill:_styles.secondary.color};var bar={fill:_styles.highlight.color};exports.default=Slider;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**

		A simple wrapper around a editable text field. It pretty much does what you'd
		expect it to.

	*/var TextInput=function(_React$Component){(0,_inherits3.default)(TextInput,_React$Component);function TextInput(){(0,_classCallCheck3.default)(this,TextInput);return(0,_possibleConstructorReturn3.default)(this,(TextInput.__proto__||Object.getPrototypeOf(TextInput)).apply(this,arguments));}(0,_createClass3.default)(TextInput,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;var pattern=_props.pattern;var onSubmit=_props.onSubmit;var conditionOnChange=function conditionOnChange(value){return pattern.test(value)?onChange(value):null;};var conditionOnSubmit=function conditionOnSubmit(value){return pattern.test(value)?onSubmit(value):null;};return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,style,{display:'flex'})},_preact2.default.h('label',null,label),_preact2.default.h('input',{type:'text',value:value,style:(0,_extends3.default)({},defaultStyle),maxLength:'6',onInput:function onInput(evt){return conditionOnChange(evt.target.value);},onChange:function onChange(evt){return conditionOnSubmit(evt.target.value);}}));}}]);return TextInput;}(_preact2.default.Component);// TextInput = radium( TextInput )
	// import radium from 'radium'
	/** @jsx React.h */TextInput.propTypes={/**
	   * The default value for the text input field
	   */value:_proptypes2.default.string,/**
	   * A function called when the text field changes
	   */onChange:_proptypes2.default.func,/**
	   * A function called when the enter key is pressed
	   */onSubmit:_proptypes2.default.func,/**
	   * A text label for the input field
	   */label:_proptypes2.default.string,/**
	   * Optional component styling
	   */style:_proptypes2.default.object,/**
	     * Optional regexp to validate user input
	     */pattern:_proptypes2.default.object};TextInput.defaultProps={value:'',style:{width:'100%'},label:'Text Input',onChange:function onChange(a){return a;},onSubmit:function onSubmit(a){return a;},pattern:/.*/};var defaultStyle={fontFamily:'inherit',fontSize:'inherit',color:'inherit',borderTop:'none',borderLeft:'none',borderRight:'none',borderRadius:'none',marginLeft:'auto',textAlign:'right',borderBottom:'1px solid '+_styles.secondary.color,backgroundColor:'transparent',':focus':{outline:'none',borderBottom:'1px solid '+_styles.highlight.color},':hover':{borderBottom:'1px solid '+_styles.highlight.color}};exports.default=TextInput;

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(condition,message){/*
	        TODO

	        Probably need to to something more intelligent here than simply logging an
	        error. Something like only raising if a `production` variable is set,
	        or not throwing more than needed. Keep the console nice and clean :)
	    */if(condition){if(typeof console!=='undefined'){console.warn(message);}}};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _renderTree=__webpack_require__(60);var _renderTree2=_interopRequireDefault(_renderTree);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(FolderComponent){// let style = {
	//     paddingBottom: '0.5em',
	//     paddingTop: '0.5em',
	//     borderBottom: '1px solid rgb( 230, 230, 230 )'
	// }
	var WrappedComponent=function(_FolderComponent){(0,_inherits3.default)(WrappedComponent,_FolderComponent);function WrappedComponent(){(0,_classCallCheck3.default)(this,WrappedComponent);var _this=(0,_possibleConstructorReturn3.default)(this,(WrappedComponent.__proto__||Object.getPrototypeOf(WrappedComponent)).call(this));_this.tree=function(_){return(0,_renderTree2.default)(_this.props.value,_this.props.onChange);};return _this;}(0,_createClass3.default)(WrappedComponent,[{key:'render',value:function render(){return _preact2.default.h(FolderComponent,(0,_extends3.default)({},this.props,{value:this.tree}));}}]);return WrappedComponent;}(FolderComponent);WrappedComponent.propTypes={value:_proptypes2.default.oneOfType([_proptypes2.default.object,_proptypes2.default.array]).isRequired,onChange:_proptypes2.default.func,label:_proptypes2.default.string,style:_proptypes2.default.object};return WrappedComponent;};/*
	    The `core-controllers` Folder component generates it's children using a function
	    passed in it's props. This is only called when it's open meaning that the whole
	    render tree is lazily instantiated, and only as much as neccesary.

	    This Component wraps the `core-controllers/Folder` by providing the default
	    `render-tree` function to generate the render list. Doing this in it's own
	    component rather than directly on the Folder component itself means we can
	    normalize the api in 'render-tree'
	*//** @jsx React.h */

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.xypad=undefined;var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _xypad=__webpack_require__(96);var _xypad2=_interopRequireDefault(_xypad);var _annotate=__webpack_require__(11);var _withChangeObject=__webpack_require__(26);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var control=(0,_withChangeObject2.default)(_xypad2.default);exports.default=control;var xypad=exports.xypad=function xypad(options){return(0,_annotate.annotate)((0,_extends3.default)({},options,{control:control}));};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(3);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(4);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(6);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(5);var _inherits3=_interopRequireDefault(_inherits2);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(7);var _proptypes2=_interopRequireDefault(_proptypes);var _numericstepper=__webpack_require__(33);var _numericstepper2=_interopRequireDefault(_numericstepper);var _math=__webpack_require__(27);var _throttle=__webpack_require__(34);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**

	    This component provides a generic way of controlling 2d numerical quantities such as
	    vectors. It's a staple of traditional A/V style applications as a way to
	    play with multiple inputs via one interaction. Useful for positional values.
	    In this case the values signature is `{x:Number, y:Number}`.

	*//** @jsx React.h */var XYPad=function(_React$Component){(0,_inherits3.default)(XYPad,_React$Component);function XYPad(){(0,_classCallCheck3.default)(this,XYPad);var _this=(0,_possibleConstructorReturn3.default)(this,(XYPad.__proto__||Object.getPrototypeOf(XYPad)).call(this));_this.state={drag:false,open:true};var computeXYfromMouseEvent=function computeXYfromMouseEvent(e,bounds){return{x:(0,_math.map)(e.clientX===undefined?e.touches[0].clientX:e.clientX,bounds.left,bounds.right,_this.props.min.x,_this.props.max.x),y:(0,_math.map)(e.clientY===undefined?e.touches[0].clientY:e.clientY,bounds.top,bounds.bottom,_this.props.min.y,_this.props.max.y)};};_this.onMouseDown=function(e){/*
	          For performance reasons we pre calculate the bounding rect on
	          mouse down, this means we don't need to do this on every mouse move
	          event and therefore we avoid any layout thrashing.

	          The caveat is that any sizing changes that occur between mousedown
	          will cause mean the cached boundingRect is invalid and causes incorrect
	          results. However because of performance gains, this is acceptable
	          behaviour as changes to size are expected to be rare enough
	      */var rect=e.currentTarget.getBoundingClientRect();_this.setState({drag:true,rect:rect});_this.props.onChange(computeXYfromMouseEvent(e,rect));};_this.onMouseMove=(0,_throttle2.default)(function(e){if(_this.state.drag)_this.props.onChange(computeXYfromMouseEvent(e,_this.state.rect));});_this.onTouchMove=function(e){e.preventDefault();if(_this.state.drag)_this.props.onChange(computeXYfromMouseEvent(e,_this.state.rect));};_this.onMouseUp=function(e){_this.setState({drag:false});};_this.onXChange=function(x){return _this.props.onChange((0,_extends3.default)({},_this.props.value,{x:x}));};_this.onYChange=function(y){return _this.props.onChange((0,_extends3.default)({},_this.props.value,{y:y}));};return _this;}/*
	      We're deliberatley not performing any comparison here. This is because
	      the props passed in would have to be a copy of the original value, which
	      currently isn't the case
	  */// shouldComponentUpdate( nextProps, nextState ){}
	(0,_createClass3.default)(XYPad,[{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var label=_props.label;var style=_props.style;var open=this.state.open;var x=value.x;var y=value.y;var min=(0,_extends3.default)({},this.props.min,XYPad.min);var max=(0,_extends3.default)({},this.props.max,XYPad.max);var xVis=(0,_math.map)(x,min.x,max.x,0,100)+'%';var yVis=(0,_math.map)(y,min.y,max.y,0,100)+'%';return _preact2.default.h('div',{style:(0,_extends3.default)({},_styles.base,{height:'auto'})},_preact2.default.h('div',{style:{display:'flex',alignItems:'center'}},_preact2.default.h('label',{onClick:function onClick(v){return _this2.setState({open:!open});}},label),_preact2.default.h('div',{style:{display:'flex',marginLeft:'auto'}},_preact2.default.h(_numericstepper2.default,{style:componentLabels,min:min.x,max:max.x,value:x,onChange:this.onXChange,label:'X'}),_preact2.default.h(_numericstepper2.default,{style:componentLabels,min:min.y,max:max.y,value:y,onChange:this.onYChange,label:'Y'}))),open?_preact2.default.h('svg',{width:'100%',height:'100%',xmlns:'http://www.w3.org/2000/svg',style:(0,_extends3.default)({},defaultStyle,style),ref:function ref(_ref){return _this2.domRef=_ref;},onMouseDown:this.onMouseDown,onMouseMove:this.state.drag?this.onMouseMove:null,onMouseUp:this.onMouseUp,onTouchStart:this.onMouseDown,onTouchMove:this.onTouchMove,onTouchEnd:this.onMouseUp},_preact2.default.h('rect',{fill:'rgb( 250, 250, 250 )',stroke:_styles.secondary.color,'stroke-width':'1',width:'100%',height:'100%'}),_preact2.default.h('line',{x1:xVis,x2:xVis,y1:0,y2:'100%',style:(0,_extends3.default)({},defaultStyle,style,crisp)}),_preact2.default.h('line',{x1:0,x2:'100%',y1:yVis,y2:yVis,style:(0,_extends3.default)({},defaultStyle,style,crisp)}),_preact2.default.h('circle',{r:3,cx:xVis,cy:yVis,style:circle})):null);}}]);return XYPad;}(_preact2.default.Component);XYPad.propTypes={/**
	   * A text label
	   */label:_proptypes2.default.string,/**
	   *  The initial value of the component
	   */value:_proptypes2.default.shape({x:_proptypes2.default.number.isRequired,y:_proptypes2.default.number.isRequired}).isRequired,/**
	   *  The minimum bounding range
	   */min:_proptypes2.default.shape({x:_proptypes2.default.number,y:_proptypes2.default.number}),/**
	   *  The maximum bounding range
	   */max:_proptypes2.default.shape({x:_proptypes2.default.number,y:_proptypes2.default.number}),/**
	   *  Called when the component updates
	   */onChange:_proptypes2.default.func,/**
	   * Optional component styling
	   */style:_proptypes2.default.object};XYPad.defaultProps={label:'XYPad',style:{width:'100%',height:150},min:{x:0,y:0},max:{x:100,y:100},onChange:function onChange(a){return a;}};var defaultStyle={display:'block',cursor:'default',stroke:_styles.secondary.color,strokeWidth:1};var crisp={shapeRendering:'crispEdges'};var circle={fill:_styles.secondary.color,stroke:'none'};var componentLabels={display:'inline'};exports.default=XYPad;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(1);var _extends3=_interopRequireDefault(_extends2);var _imperativeApi=__webpack_require__(59);var _imperativeApi2=_interopRequireDefault(_imperativeApi);var _annotate=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	  Provides a stateful imperative interface to Oui
	*//*
	  Defines and optionally annotates an property on an object
	*/var _add=function _add(obj,propName){var annotation=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var target=arguments[3];(0,_annotate.setAnnotation)(target,target.length,(0,_extends3.default)({label:propName},annotation));Object.defineProperty(target,target.length,{get:function get(_){return obj[propName];},set:function set(v){return obj[propName]=v;},enumerable:true,configurable:true});};/*
	  Returns an imperative interface to mutate an object with properties and 'folders'
	*/var _addFolder=function _addFolder(target){return{add:function add(obj,propName,annotation){return _add(obj,propName,annotation,target);},addFolder:function addFolder(annotation){var api=[];(0,_annotate.setAnnotation)(target,target.push(api)-1,(0,_extends3.default)({label:'folder'},annotation));return _addFolder(api);}};};/*
	  An 'watching' interface to oui that redraws every frame
	*/exports.default=function(opts,callback){var api=[];var p=(0,_imperativeApi2.default)(opts);var draw=function draw(_){p(api,callback);requestAnimationFrame(draw);};draw();return _addFolder(api);};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof2=__webpack_require__(19);var _typeof3=_interopRequireDefault(_typeof2);var _warn=__webpack_require__(36);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isWritable=function isWritable(obj,prop){var propDesc=Object.getOwnPropertyDescriptor(obj,prop);return propDesc?propDesc.writable===true||propDesc.set!==undefined:true;};/*
	    This module deeply mutatively merges properties of change `b` into `a`
	*/var deepmerge=function deepmerge(a,b){var isFrozen=Object.isFrozen(a)||!Object.isExtensible(a);(0,_warn2.default)(isFrozen,'The merge target is frozen and cannot be mutated');if(isFrozen)return a;var breakOn=Array.isArray(a)&&b.length;var index=0;for(var prop in b){if((0,_typeof3.default)(a[prop])==='object'){var _isFrozen=Object.isFrozen(a[prop]);(0,_warn2.default)(_isFrozen,'The property `'+prop+'` is frozen and cannot be mutated.');if(!_isFrozen)deepmerge(a[prop],b[prop]);}else{var writable=isWritable(a,prop);(0,_warn2.default)(!writable,'The property `'+prop+'` is not writable and cannot be mutated.');if(writable)a[prop]=b[prop];}if(breakOn===++index)a.splice(breakOn);}return a;};exports.default=deepmerge;

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var element=document.createElement('div');element.className='oui';element.style.position='absolute';element.style.right='0';element.style.top='0';element.style.padding='0.25em';element.style.display='flex';element.style.flexDirection='column';element.style.flexWrap='wrap';element.style.alignItems='flex-start';element.style.alignContent='flex-start';exports.default=element;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _imperativeApi=__webpack_require__(59);var _imperativeApi2=_interopRequireDefault(_imperativeApi);var _annotate=__webpack_require__(11);var _datoui=__webpack_require__(97);var _datoui2=_interopRequireDefault(_datoui);var _colorpicker=__webpack_require__(80);var _colorpicker2=_interopRequireDefault(_colorpicker);var _combobox=__webpack_require__(83);var _combobox2=_interopRequireDefault(_combobox);var _graph=__webpack_require__(87);var _graph2=_interopRequireDefault(_graph);var _numericstepper=__webpack_require__(33);var _numericstepper2=_interopRequireDefault(_numericstepper);var _xypad=__webpack_require__(95);var _xypad2=_interopRequireDefault(_xypad);var _button=__webpack_require__(32);var _button2=_interopRequireDefault(_button);var _checkbox=__webpack_require__(53);var _checkbox2=_interopRequireDefault(_checkbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var oui=(0,_imperativeApi2.default)({label:'Master'});var controls={ColorPicker:_colorpicker2.default,ComboBox:_combobox2.default,Graph:_graph2.default,NumericStepper:_numericstepper2.default,XYPad:_xypad2.default,Button:_button2.default,Checkbox:_checkbox2.default,TextInput:_button2.default};exports.default={oui:oui,panel:_imperativeApi2.default,datoui:_datoui2.default,annotate:_annotate.annotate,color:_colorpicker.color,combobox:_combobox.combobox,graph:_graph.graph,numericstepper:_numericstepper.numericstepper,xypad:_xypad.xypad,controls:controls};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(55);var _slider2=_interopRequireDefault(_slider);var _checkbox=__webpack_require__(53);var _checkbox2=_interopRequireDefault(_checkbox);var _textinput=__webpack_require__(56);var _textinput2=_interopRequireDefault(_textinput);var _folder=__webpack_require__(85);var _folder2=_interopRequireDefault(_folder);var _button=__webpack_require__(32);var _button2=_interopRequireDefault(_button);var _withChangeObject=__webpack_require__(26);var _withChangeObject2=_interopRequireDefault(_withChangeObject);var _withTree=__webpack_require__(94);var _withTree2=_interopRequireDefault(_withTree);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=new Map([['function',_button2.default],['number',(0,_withChangeObject2.default)(_slider2.default)],['string',(0,_withChangeObject2.default)(_textinput2.default)],['boolean',(0,_withChangeObject2.default)(_checkbox2.default)],['object',(0,_withChangeObject2.default)((0,_withTree2.default)(_folder2.default))]]);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof2=__webpack_require__(19);var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var hasOwnProperty=Object.prototype.hasOwnProperty;/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */function is(x,y){// SameValue algorithm
	if(x===y){// Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
	return x!==x&&y!==y;}}/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==='undefined'?'undefined':(0,_typeof3.default)(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':(0,_typeof3.default)(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}exports.default=shallowEqual;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isValidControl=exports.validateProp=undefined;var _typeof2=__webpack_require__(19);var _typeof3=_interopRequireDefault(_typeof2);var _warn=__webpack_require__(36);var _warn2=_interopRequireDefault(_warn);var _preact=__webpack_require__(2);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var validateProp=exports.validateProp=function validateProp(prop,propName,Comp){var name=Comp.displayName||Comp.name;var err=Comp.propTypes.value(prop,propName,name,'prop');(0,_warn2.default)(err,err?err.message:'');};/*
	    Validates a control.

	    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
	    object containing a `value` field. `onChange` and `label` are optional.*
	*//*
	    Validates an object against a components `propTypes`
	*/var isValidControl=exports.isValidControl=function isValidControl(Control){return _preact2.default.isValidElement(_preact2.default.createElement(Control,null))&&Control.propTypes&&(0,_typeof3.default)(Control.propTypes)==='object'&&typeof Control.propTypes.value==='function';};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(61);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(106);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(105);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb,
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv,
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl,
	  },
	};

	// convert a charcode to a hex val
	function hexVal (c) {
	  return (
	    c < 58 ? c - 48 : // 0 - 9
	    c < 71 ? c - 55 : // A - F
	    c - 87            // a - f
	  );
	}

	function hex2rgb (hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;

	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }

	  var r, g, b;

	  var h1 = hexVal(hex.charCodeAt(0+i));
	  var h2 = hexVal(hex.charCodeAt(1+i));
	  var h3 = hexVal(hex.charCodeAt(2+i));

	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3+i));
	    b = (hexVal(hex.charCodeAt(4+i)) << 4) + hexVal(hex.charCodeAt(5+i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }

	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }

	  return [r, g, b];
	}


	function rgb2hex (rgb) {
	  return '#' + (
	    '000000' +
	    ((rgb[0] << 16) +
	     (rgb[1] << 8) +
	      rgb[2]
	    ).toString(16)
	  ).slice(-6);
	}

	function rgb2hsl (rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;

	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  l = (min + max) / 2;

	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;

	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  v = (max / 255) * 100;

	  return [h, s, v];
	}

	function hsl2rgb (hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;

	  var r, g, b;

	  if (s === 0) { // monochrome
	    r = g = b = l;

	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;

	    // red
	    t = h + 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { r = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { r = q; }
	    else if (t < 2/3 ) { r = p + (q - p) * (2/3 - t) * 6; }
	    else               { r = p; }

	    // green
	    t = h;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { g = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { g = q; }
	    else if (t < 2/3 ) { g = p + (q - p) * (2/3 - t) * 6; }
	    else               { g = p; }

	    // blue
	    t = h - 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { b = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { b = q; }
	    else if (t < 2/3 ) { b = p + (q - p) * (2/3 - t) * 6; }
	    else               { b = p; }
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;

	  if (s === 0) {
	    return [h, 0, l * 100];
	  }

	  if (l === 0) {
	    return [h, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;

	  var hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - (s * f));
	  var t = 255 * v * (1 - (s * (1 - f)));
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;

	  if (s === 0) {
	    return [h, 0, v * 100];
	  }

	  if (v === 0) {
	    return [h, 0, 0];
	  }

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function grayscale2rgb (value) {
	  return [value, value, value];
	}

	function rgb2grayscale (rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(147);
	module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	__webpack_require__(31);
	module.exports = __webpack_require__(145);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	__webpack_require__(31);
	module.exports = __webpack_require__(146);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(149);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(150);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(151);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(152);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(154);
	__webpack_require__(153);
	__webpack_require__(155);
	__webpack_require__(156);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(52);
	module.exports = __webpack_require__(51).f('iterator');

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(18)
	  , toLength  = __webpack_require__(72)
	  , toIndex   = __webpack_require__(144);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13)
	  , createDesc      = __webpack_require__(25);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(24)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(29);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(21)
	  , ITERATOR   = __webpack_require__(10)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(37);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(42)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(44)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(10)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(24)
	  , toIObject = __webpack_require__(18);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(30)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(17)
	  , setDesc  = __webpack_require__(13).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(22)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(24)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(29)
	  , toObject = __webpack_require__(48)
	  , IObject  = __webpack_require__(66)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(22)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(24);

	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(18)
	  , gOPN      = __webpack_require__(69).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(17)
	  , toObject    = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(23)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(38)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(47)
	  , defined   = __webpack_require__(39);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(47)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14)
	  , get      = __webpack_require__(73);
	module.exports = __webpack_require__(9).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(63)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(9).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(38)
	  , $export        = __webpack_require__(16)
	  , toObject       = __webpack_require__(48)
	  , call           = __webpack_require__(132)
	  , isArrayIter    = __webpack_require__(130)
	  , toLength       = __webpack_require__(72)
	  , createProperty = __webpack_require__(127)
	  , getIterFn      = __webpack_require__(73);

	$export($export.S + $export.F * !__webpack_require__(134)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(125)
	  , step             = __webpack_require__(135)
	  , Iterators        = __webpack_require__(21)
	  , toIObject        = __webpack_require__(18);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(67)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(16);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(138)});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(42)});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(16);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(142).set});

/***/ },
/* 153 */
/***/ function(module, exports) {

	

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(17)
	  , DESCRIPTORS    = __webpack_require__(15)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(71)
	  , META           = __webpack_require__(137).KEY
	  , $fails         = __webpack_require__(22)
	  , shared         = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(44)
	  , uid            = __webpack_require__(30)
	  , wks            = __webpack_require__(10)
	  , wksExt         = __webpack_require__(51)
	  , wksDefine      = __webpack_require__(50)
	  , keyOf          = __webpack_require__(136)
	  , enumKeys       = __webpack_require__(128)
	  , isArray        = __webpack_require__(131)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(49)
	  , createDesc     = __webpack_require__(25)
	  , _create        = __webpack_require__(42)
	  , gOPNExt        = __webpack_require__(140)
	  , $GOPD          = __webpack_require__(68)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(24)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(29).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('asyncIterator');

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('observable');

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Reflect"] = factory();
		else
			root["Reflect"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		var Reflect = __webpack_require__(1);
		window.Reflect = Reflect;
		__export(__webpack_require__(1));


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var get_proto_of_type_1 = __webpack_require__(2);
		var to_property_key_1 = __webpack_require__(3);
		var is_constructor_1 = __webpack_require__(5);
		var is_undefined_1 = __webpack_require__(6);
		var is_array_1 = __webpack_require__(7);
		var is_object_1 = __webpack_require__(8);
		var metadata_1 = __webpack_require__(9);
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		var ordinary_metadata_keys_1 = __webpack_require__(21);
		/**
		 * Applies a set of decorators to a property of a target object.
		 * @param decorators An array of decorators.
		 * @param target The target object.
		 * @param targetKey (Optional) The property key to decorate.
		 * @param targetDescriptor (Optional) The property descriptor for the target key
		 * @remarks Decorators are applied in reverse order.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     C = Reflect.decorate(decoratorsArray, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.decorate(decoratorsArray, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.decorate(decoratorsArray, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Object.defineProperty(C, "staticMethod",
		 *         Reflect.decorate(decoratorsArray, C, "staticMethod",
		 *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
		 *
		 *     // method (on prototype)
		 *     Object.defineProperty(C.prototype, "method",
		 *         Reflect.decorate(decoratorsArray, C.prototype, "method",
		 *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
		 *
		 */
		function decorate(decorators, target, targetKey, targetDescriptor) {
		    if (!is_undefined_1.isUndefined(targetDescriptor)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        else if (is_undefined_1.isUndefined(targetKey)) {
		            throw new TypeError('target key ' + targetKey + 'is undefined');
		        }
		        else if (!is_object_1.isObject(targetDescriptor)) {
		            throw new TypeError('targetDescriptor ' + targetDescriptor + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
		    }
		    else {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_constructor_1.isConstructor(target)) {
		            throw new TypeError('target ' + target + ' is not a constructor');
		        }
		        return DecorateConstructor(decorators, target);
		    }
		}
		exports.decorate = decorate;
		/**
		 * A default metadata decorator factory that can be used on a class, class member, or parameter.
		 * @param metadataKey The key for the metadata entry.
		 * @param metadataValue The value for the metadata entry.
		 * @returns A decorator function.
		 * @remarks
		 * If `metadataKey` is already defined for the target and target key, the
		 * metadataValue for that key will be overwritten.
		 * @example
		 *
		 *     // constructor
		 *     @Reflect.metadata(key, value)
		 *     class C {
		 *     }
		 *
		 *     // property (on constructor, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticProperty;
		 *     }
		 *
		 *     // property (on prototype, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         property;
		 *     }
		 *
		 *     // method (on constructor)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticMethod() { }
		 *     }
		 *
		 *     // method (on prototype)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         method() { }
		 *     }
		 *
		 */
		function metadata(metadataKey, metadataValue) {
		    function decorator(target, targetKey) {
		        if (!is_undefined_1.isUndefined(targetKey)) {
		            if (!is_object_1.isObject(target)) {
		                throw new TypeError('target ' + target + ' is not an object');
		            }
		            targetKey = to_property_key_1.toPropertyKey(targetKey);
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		        }
		        else {
		            if (!is_constructor_1.isConstructor(target)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
		        }
		    }
		    return decorator;
		}
		exports.metadata = metadata;
		/**
		 * Define a unique metadata entry on the target.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param metadataValue A value that contains attached metadata.
		 * @param target The target object on which to define metadata.
		 * @param targetKey (Optional) The property key for the target.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     Reflect.defineMetadata("custom:annotation", options, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
		 *
		 *     // decorator factory as metadata-producing annotation.
		 *     function MyAnnotation(options): Decorator {
		 *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
		 *     }
		 *
		 */
		function defineMetadata(metadataKey, metadataValue, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		}
		exports.defineMetadata = defineMetadata;
		/**
		 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasMetadata(metadataKey, target, targetKey);
		}
		exports.hasMetadata = hasMetadata;
		/**
		 * Gets a value indicating whether the target object has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
		}
		exports.hasOwnMetadata = hasOwnMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetMetadata(metadataKey, target, targetKey);
		}
		exports.getMetadata = getMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
		}
		exports.getOwnMetadata = getOwnMetadata;
		/**
		 * Gets the metadata keys defined on the target object or its prototype chain.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "method");
		 *
		 */
		function getMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_metadata_keys_1.ordinaryMetadataKeys(target, targetKey);
		}
		exports.getMetadataKeys = getMetadataKeys;
		/**
		 * Gets the unique metadata keys defined on the target object.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
		 *
		 */
		function getOwnMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(target, targetKey);
		}
		exports.getOwnMetadataKeys = getOwnMetadataKeys;
		/**
		 * Deletes the metadata entry from the target object with the provided key.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.deleteMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function deleteMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    if (is_undefined_1.isUndefined(metadataMap)) {
		        return false;
		    }
		    if (!metadataMap.delete(metadataKey)) {
		        return false;
		    }
		    if (metadataMap.size > 0) {
		        return true;
		    }
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    targetMetadata.delete(targetKey);
		    if (targetMetadata.size > 0) {
		        return true;
		    }
		    metadata_1.__Metadata__.delete(target);
		    return true;
		}
		exports.deleteMetadata = deleteMetadata;
		function DecorateConstructor(decorators, target) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_constructor_1.isConstructor(decorated)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            target = decorated;
		        }
		    }
		    return target;
		}
		function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target, propertyKey, descriptor);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_object_1.isObject(decorated)) {
		                throw new TypeError('decorated ' + decorated + ' is not an object');
		            }
		            descriptor = decorated;
		        }
		    }
		    return descriptor;
		}
		function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        decorator(target, propertyKey);
		    }
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
		function OrdinaryHasMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return true;
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryHasMetadata(MetadataKey, parent, P);
		    }
		    return false;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
		function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return false;
		    }
		    return Boolean(metadataMap.has(MetadataKey));
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
		function OrdinaryGetMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryGetMetadata(MetadataKey, parent, P);
		    }
		    return undefined;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
		function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return undefined;
		    }
		    return metadataMap.get(MetadataKey);
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
		function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ true);
		    metadataMap.set(MetadataKey, MetadataValue);
		}


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		"use strict";
		var functionPrototype = Function.prototype;
		function getProtoOfType(O) {
		    var proto = Object.getPrototypeOf(O);
		    if (typeof O !== "function" || O === functionPrototype) {
		        return proto;
		    }
		    // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
		    // Try to determine the superclass constructor. Compatible implementations
		    // must either set __proto__ on a subclass constructor to the superclass constructor,
		    // or ensure each class has a valid `constructor` property on its prototype that
		    // points back to the constructor.
		    // If this is not the same as Function.[[Prototype]], then this is definately inherited.
		    // This is the case when in ES6 or when using __proto__ in a compatible browser.
		    if (proto !== functionPrototype) {
		        return proto;
		    }
		    // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
		    var prototype = O.prototype;
		    var prototypeProto = prototype && Object.getPrototypeOf(prototype);
		    if (prototypeProto == null || prototypeProto === Object.prototype) {
		        return proto;
		    }
		    // if the constructor was not a function, then we cannot determine the heritage.
		    var constructor = prototypeProto.constructor;
		    if (typeof constructor !== "function") {
		        return proto;
		    }
		    // if we have some kind of self-reference, then we cannot determine the heritage.
		    if (constructor === O) {
		        return proto;
		    }
		    // we have a pretty good guess at the heritage.
		    return constructor;
		}
		exports.getProtoOfType = getProtoOfType;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var is_symbol_1 = __webpack_require__(4);
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		function toPropertyKey(value) {
		    if (is_symbol_1.isSymbol(value)) {
		        return value;
		    }
		    return String(value);
		}
		exports.toPropertyKey = toPropertyKey;


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
		function isSymbol(x) {
		    return typeof x === "symbol";
		}
		exports.isSymbol = isSymbol;


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		function isConstructor(x) {
		    return typeof x === "function";
		}
		exports.isConstructor = isConstructor;


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
		function isUndefined(x) {
		    return x === undefined;
		}
		exports.isUndefined = isUndefined;


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		function isArray(x) {
		    return Array.isArray(x);
		}
		exports.isArray = isArray;


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
		function isObject(x) {
		    return typeof x === "object" ? x !== null : typeof x === "function";
		}
		exports.isObject = isObject;


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var weakmap_1 = __webpack_require__(10);
		var _WeakMap = typeof WeakMap === "function" ? WeakMap : weakmap_1.createWeakMapPolyfill();
		// TODO: fix the typescript types
		// export const __Metadata__ = new _WeakMap<Object, Map<string | symbol, Map<any, any>>>();
		exports.__Metadata__ = new _WeakMap();


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var create_unique_key_1 = __webpack_require__(11);
		var get_or_create_weakmap_1 = __webpack_require__(17);
		exports.rootKey = create_unique_key_1.createUniqueKey();
		var WeakMap = (function () {
		    function WeakMap() {
		        this._key = create_unique_key_1.createUniqueKey();
		    }
		    Object.defineProperty(WeakMap.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    WeakMap.prototype.has = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return this._key in table;
		        }
		        return false;
		    };
		    WeakMap.prototype.get = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return table[this._key];
		        }
		        return undefined;
		    };
		    WeakMap.prototype.set = function (target, value) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ true);
		        table[this._key] = value;
		        return this;
		    };
		    WeakMap.prototype.delete = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table && this._key in table) {
		            return delete table[this._key];
		        }
		        return false;
		    };
		    WeakMap.prototype.clear = function () {
		        // NOTE: not a real clear, just makes the previous data unreachable
		        this._key = create_unique_key_1.createUniqueKey();
		    };
		    return WeakMap;
		}());
		exports.WeakMap = WeakMap;
		function createWeakMapPolyfill() {
		    return WeakMap;
		}
		exports.createWeakMapPolyfill = createWeakMapPolyfill;


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var has_own_1 = __webpack_require__(13);
		var create_uuid_1 = __webpack_require__(14);
		exports.keys = {};
		function createUniqueKey() {
		    var key;
		    do {
		        key = helper_constants_1.WEAKMAP_PREFIX + create_uuid_1.createUUID();
		    } while (has_own_1.hasOwn.call(exports.keys, key));
		    exports.keys[key] = true;
		    return key;
		}
		exports.createUniqueKey = createUniqueKey;


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		"use strict";
		exports.UUID_SIZE = 16;
		exports.WEAKMAP_PREFIX = "@@WeakMap@@";


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		"use strict";
		exports.hasOwn = Object.prototype.hasOwnProperty;


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var gen_randombytes_1 = __webpack_require__(15);
		function createUUID() {
		    var data = gen_randombytes_1.genRandomBytes(helper_constants_1.UUID_SIZE);
		    // mark as random - RFC 4122 § 4.4
		    data[6] = data[6] & 0x4f | 0x40;
		    data[8] = data[8] & 0xbf | 0x80;
		    var result = "";
		    for (var offset = 0; offset < helper_constants_1.UUID_SIZE; ++offset) {
		        var byte = data[offset];
		        if (offset === 4 || offset === 6 || offset === 8) {
		            result += "-";
		        }
		        if (byte < 16) {
		            result += "0";
		        }
		        result += byte.toString(16).toLowerCase();
		    }
		    return result;
		}
		exports.createUUID = createUUID;


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var fill_randombytes_1 = __webpack_require__(16);
		function genRandomBytes(size) {
		    var data;
		    if (typeof Uint8Array === "function") {
		        data = new Uint8Array(size);
		        if (typeof window.crypto !== "undefined") {
		            window.crypto.getRandomValues(data);
		        }
		        else if (typeof window.msCrypto !== "undefined") {
		            window.msCrypto.getRandomValues(data);
		        }
		        else {
		            fill_randombytes_1.fillRandomBytes(data, size);
		        }
		    }
		    else {
		        data = new Array(size);
		        fill_randombytes_1.fillRandomBytes(data, size);
		    }
		    return data;
		}
		exports.genRandomBytes = genRandomBytes;


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		"use strict";
		function fillRandomBytes(buffer, size) {
		    for (var i = 0; i < size; ++i) {
		        buffer[i] = Math.random() * 255 | 0;
		    }
		    return buffer;
		}
		exports.fillRandomBytes = fillRandomBytes;


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var has_own_1 = __webpack_require__(13);
		function getOrCreateWeakMapTable(rootKey, target, create) {
		    if (!has_own_1.hasOwn.call(target, rootKey)) {
		        if (!create) {
		            return undefined;
		        }
		        Object.defineProperty(target, rootKey, {
		            value: Object.create(null)
		        });
		    }
		    return target[rootKey];
		}
		exports.getOrCreateWeakMapTable = getOrCreateWeakMapTable;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
		function ordinaryOwnMetadataKeys(target, targetKey) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    var keys = [];
		    if (metadataMap) {
		        metadataMap.forEach(function (_, key) { return keys.push(key); });
		    }
		    return keys;
		}
		exports.ordinaryOwnMetadataKeys = ordinaryOwnMetadataKeys;


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var metadata_1 = __webpack_require__(9);
		var map_1 = __webpack_require__(20);
		var _Map = typeof Map === "function" ? Map : map_1.createMapPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
		function getOrCreateMetadataMap(target, targetKey, create) {
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    if (!targetMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // targetMetadata = new _Map<string | symbol, _Map<any, any>>();
		        targetMetadata = new _Map();
		        metadata_1.__Metadata__.set(target, targetMetadata);
		    }
		    var keyMetadata = targetMetadata.get(targetKey);
		    if (!keyMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // keyMetadata = new _Map<any, any>();
		        keyMetadata = new _Map();
		        targetMetadata.set(targetKey, keyMetadata);
		    }
		    return keyMetadata;
		}
		exports.getOrCreateMetadataMap = getOrCreateMetadataMap;


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		"use strict";
		// naive Map shim
		exports.cacheSentinel = {};
		var Map = (function () {
		    function Map() {
		        this._keys = [];
		        this._values = [];
		        this._cache = exports.cacheSentinel;
		    }
		    Object.defineProperty(Map.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Map.prototype, "size", {
		        get: function () {
		            return this._keys.length;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Map.prototype.has = function (key) {
		        if (key === this._cache) {
		            return true;
		        }
		        if (this._find(key) >= 0) {
		            this._cache = key;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.get = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._cache = key;
		            return this._values[index];
		        }
		        return undefined;
		    };
		    Map.prototype.set = function (key, value) {
		        this.delete(key);
		        this._keys.push(key);
		        this._values.push(value);
		        this._cache = key;
		        return this;
		    };
		    Map.prototype.delete = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._keys.splice(index, 1);
		            this._values.splice(index, 1);
		            this._cache = exports.cacheSentinel;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.clear = function () {
		        this._keys.length = 0;
		        this._values.length = 0;
		        this._cache = exports.cacheSentinel;
		    };
		    Map.prototype.forEach = function (callback, thisArg) {
		        var size = this.size;
		        for (var i = 0; i < size; ++i) {
		            var key = this._keys[i];
		            var value = this._values[i];
		            this._cache = key;
		            callback.call(this, value, key, this);
		        }
		    };
		    Map.prototype._find = function (key) {
		        var keys = this._keys;
		        var size = keys.length;
		        for (var i = 0; i < size; ++i) {
		            if (keys[i] === key) {
		                return i;
		            }
		        }
		        return -1;
		    };
		    return Map;
		}());
		exports.Map = Map;
		function createMapPolyfill() {
		    return Map;
		}
		exports.createMapPolyfill = createMapPolyfill;


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_proto_of_type_1 = __webpack_require__(2);
		var set_1 = __webpack_require__(22);
		var _Set = typeof Set === "function" ? Set : set_1.createSetPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
		function ordinaryMetadataKeys(O, P) {
		    var ownKeys = ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(O, P);
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent === null) {
		        return ownKeys;
		    }
		    var parentKeys = ordinaryMetadataKeys(parent, P);
		    if (parentKeys.length <= 0) {
		        return ownKeys;
		    }
		    if (ownKeys.length <= 0) {
		        return parentKeys;
		    }
		    var set = new _Set();
		    var keys = [];
		    for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
		        var key = ownKeys_1[_i];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
		        var key = parentKeys_1[_a];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    return keys;
		}
		exports.ordinaryMetadataKeys = ordinaryMetadataKeys;


	/***/ },
	/* 22 */
	/***/ function(module, exports) {

		"use strict";
		// var _Map: MapConstructor = (typeof Map !== "undefined") ? createMapPolyfill() : Map;
		exports.cacheSentinel = {};
		var Set = (function () {
		    function Set() {
		        this._map = new Map();
		    }
		    Object.defineProperty(Set.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Set.prototype, "size", {
		        get: function () {
		            return this._map.size;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Set.prototype.has = function (value) {
		        return this._map.has(value);
		    };
		    Set.prototype.add = function (value) {
		        this._map.set(value, value);
		        return this;
		    };
		    Set.prototype.delete = function (value) {
		        return this._map.delete(value);
		    };
		    Set.prototype.clear = function () {
		        this._map.clear();
		    };
		    Set.prototype.forEach = function (callback, thisArg) {
		        this._map.forEach(callback, thisArg);
		    };
		    return Set;
		}());
		exports.Set = Set;
		function createSetPolyfill() {
		    return Set;
		}
		exports.createSetPolyfill = createSetPolyfill;


	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=browser.js.map

/***/ },
/* 158 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ])
});
;