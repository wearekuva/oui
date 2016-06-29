/*!
 * 
 * Oui.js v0.0.1
 * © 2016 Mark Lundin
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

	'use strict';var oui=function oui(){}; // if( process.env.NODE_ENV !== 'production' ){
	oui=__webpack_require__(61).default; // }
	oui.version='0.0.1';module.exports=oui;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
		 true ? factory(exports, __webpack_require__(72), __webpack_require__(71), __webpack_require__(31)) :
		typeof define === 'function' && define.amd ? define(['exports', 'proptypes', 'preact-svg', 'preact'], factory) :
		(factory((global.preactCompat = global.preactCompat || {}),global.PropTypes,global.preactSvg,global.preact));
	}(this, function (exports,PropTypes,SVG,preact) { 'use strict';

		PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;
		SVG = 'default' in SVG ? SVG['default'] : SVG;

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

		var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

		var AUTOBIND_BLACKLIST = {
			constructor: 1,
			render: 1,
			shouldComponentUpdate: 1,
			componentWillRecieveProps: 1,
			componentWillUpdate: 1,
			componentDidUpdate: 1,
			componentWillMount: 1,
			componentDidMount: 1,
			componentWillUnmount: 1,
			componentDidUnmount: 1
		};

		var BYPASS_HOOK = {};

		var DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';

		var EmptyComponent = function () {
			return null;
		};

		var VNode = preact.h('').constructor;
		VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;

		Object.defineProperty(VNode.prototype, 'type', {
			get: function () {
				return this.nodeName;
			},
			set: function (v) {
				this.nodeName = v;
			}
		});

		Object.defineProperty(VNode.prototype, 'props', {
			get: function () {
				return this.attributes;
			},
			set: function (v) {
				this.attributes = v;
			}
		});

		function render$1(vnode, parent, callback) {
			var prev = parent._preactCompatRendered;
			if (prev && prev.parentNode !== parent) prev = null;
			var out = preact.render(vnode, parent, prev);
			parent._preactCompatRendered = out;
			if (typeof callback === 'function') callback();
			return out && out._component;
		}

		function unmountComponentAtNode(container) {
			var existing = container._preactCompatRendered;
			if (existing && existing.parentNode === container) {
				preact.render(preact.h(EmptyComponent), container, existing);
				return true;
			}
			return false;
		}

		var ARR = [];

		var Children = {
			map: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				return children.map(fn);
			},
			forEach: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				children.forEach(fn);
			},
			count: function (children) {
				children = Children.toArray(children);
				return children.length;
			},
			only: function (children) {
				children = Children.toArray(children);
				if (children.length !== 1) throw new Error('Children.only() expects only one child.');
				return children[0];
			},
			toArray: function (children) {
				return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
			}
		};

		var currentComponent = void 0;

		function createFactory(type) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return createElement.apply(undefined, [type].concat(args));
			};
		}

		var DOM = {};
		for (var i = ELEMENTS.length; i--;) {
			DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
		}

		function createElement() {
			var vnode = preact.h.apply(undefined, arguments);

			if (vnode.nodeName === 'svg') {
				vnode.nodeName = SVG;
			}

			applyClassName(vnode);

			var ref = vnode.attributes && vnode.attributes.ref;
			if (currentComponent && ref && typeof ref === 'string') {
				vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
			}

			return vnode;
		}

		function cloneElement(element, props) {
			for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
				children[_key2 - 2] = arguments[_key2];
			}

			return createElement.apply(undefined, [element.nodeName || element.type, extend({}, element.attributes || element.props || {}, props)].concat(children));
		}

		function isValidElement(element) {
			return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
		}

		function createStringRefProxy(name, component) {
			return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
				if (component && component.refs) {
					component.refs[name] = resolved;
					if (resolved === null) {
						delete component._refProxies[name];
						component = null;
					}
				}
			});
		}

		function applyClassName(_ref) {
			var attributes = _ref.attributes;

			if (!attributes) return;
			var cl = attributes.className || attributes.class;
			if (cl) attributes.className = cl;
		}

		function extend(base) {
			for (var _len3 = arguments.length, objs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				objs[_key3 - 1] = arguments[_key3];
			}

			for (var i = 0; i < objs.length; i++) {
				for (var key in objs[i]) {
					if (objs[i].hasOwnProperty(key)) {
						var v = objs[i][key];
						if (v !== null && v !== undefined) {
							base[key] = v;
						}
					}
				}
			}
			return base;
		}

		var findDOMNode = function (component) {
			return component.base || component;
		};

		function F() {}

		function createClass(obj) {
			var cl = function (props, context) {
				extend(this, obj);
				Component$1.call(this, props, context, BYPASS_HOOK);
				bindAll(this);
				newComponentHook.call(this, props, context);
			};

			if (obj.propTypes) {
				cl.propTypes = obj.propTypes;
			}
			if (obj.defaultProps) {
				cl.defaultProps = obj.defaultProps;
			}
			if (obj.getDefaultProps) {
				cl.defaultProps = obj.getDefaultProps();
			}

			F.prototype = Component$1.prototype;
			cl.prototype = new F();
			cl.prototype.constructor = cl;

			cl.displayName = obj.displayName || 'Component';

			return cl;
		}

		function bindAll(ctx) {
			for (var i in ctx) {
				var v = ctx[i];
				if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
					(ctx[i] = v.bind(ctx)).__bound = true;
				}
			}
		}

		function callMethod(ctx, m, args) {
			if (typeof m === 'string') {
				m = ctx.constructor.prototype[m];
			}
			if (typeof m === 'function') {
				return m.apply(ctx, args);
			}
		}

		function multihook() {
			for (var _len4 = arguments.length, hooks = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				hooks[_key4] = arguments[_key4];
			}

			return function () {
				var ret = void 0;

				for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
					args[_key5] = arguments[_key5];
				}

				for (var i = 0; i < hooks.length; i++) {
					var r = callMethod(this, hooks[i], args);
					if (r !== undefined) ret = r;
				}
				return ret;
			};
		}

		function newComponentHook(props, context) {
			propsHook.call(this, props, context);
			this.componentWillReceiveProps = multihook(this.componentWillReceiveProps || 'componentWillReceiveProps', propsHook);
			this.render = multihook(beforeRender, this.render || 'render', afterRender);
		}

		function propsHook(props) {
			if (!props) return;

			var c = props.children;
			if (c && c.length === 1) {
				props.children = c[0];

				if (props.children && typeof props.children === 'object') {
					props.children.length = 1;
					props.children[0] = props.children;
				}
			}

			if (DEV) {
				var propTypes = this.propTypes || this.constructor.propTypes;
				if (propTypes) {
					for (var prop in propTypes) {
						if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
							var err = propTypes[prop](props, prop, this.constructor.name, 'prop');
							if (err) throw err;
						}
					}
				}
			}
		}

		function beforeRender() {
			currentComponent = this;
		}

		function afterRender() {
			if (currentComponent === this) {
				currentComponent = null;
			}
		}

		var Component$1 = function (_PreactComponent) {
			babelHelpers.inherits(Component, _PreactComponent);

			function Component(props, context, opts) {
				babelHelpers.classCallCheck(this, Component);

				var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props, context));

				_this.refs = {};
				_this._refProxies = {};
				if (opts !== BYPASS_HOOK) {
					newComponentHook.call(_this, props, context);
				}
				return _this;
			}

			babelHelpers.createClass(Component, [{
				key: 'getDOMNode',
				value: function getDOMNode() {
					return this.base;
				}
			}, {
				key: 'isMounted',
				value: function isMounted() {
					return !!this.base;
				}
			}]);
			return Component;
		}(preact.Component);

		var index = { DOM: DOM, PropTypes: PropTypes, Children: Children, render: render$1, createClass: createClass, createFactory: createFactory, createElement: createElement, cloneElement: cloneElement, isValidElement: isValidElement, findDOMNode: findDOMNode, unmountComponentAtNode: unmountComponentAtNode, Component: Component$1 };

		exports.DOM = DOM;
		exports.PropTypes = PropTypes;
		exports.Children = Children;
		exports.render = render$1;
		exports.createClass = createClass;
		exports.createFactory = createFactory;
		exports.createElement = createElement;
		exports.cloneElement = cloneElement;
		exports.isValidElement = isValidElement;
		exports.findDOMNode = findDOMNode;
		exports.unmountComponentAtNode = unmountComponentAtNode;
		exports.Component = Component$1;
		exports['default'] = index;

	}));
	//# sourceMappingURL=preact-compat.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var base=exports.base={fontFamily:"Menlo, Inconcolata, Consolas",marginTop:'2px',marginBottom:'2px',fontSize:10,boxSizing:'border-box',color:'rgb(66,66,66)'}; // borderRadius:2
	var secondary=exports.secondary={color:'rgb(210,210,210)'};var highlight=exports.highlight={color:'rgb(255,82,82)'};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(13);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _assign = __webpack_require__(18);

	var ReactCurrentOwner = __webpack_require__(14);

	var warning = __webpack_require__(4);
	var canDefineProperty = __webpack_require__(16);

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	      ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
	      key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
	    } else {
	      ref = config.ref === undefined ? null : config.ref;
	      key = config.key === undefined ? null : '' + config.key;
	    }
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    // Create dummy `key` and `ref` property to `props` to warn users
	    // against its use
	    if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	      if (!props.hasOwnProperty('key')) {
	        Object.defineProperty(props, 'key', {
	          get: function () {
	            if (!specialPropKeyWarningShown) {
	              specialPropKeyWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	      if (!props.hasOwnProperty('ref')) {
	        Object.defineProperty(props, 'ref', {
	          get: function () {
	            if (!specialPropRefWarningShown) {
	              specialPropRefWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hasAnnotation=exports.getAnnotation=exports.annotate=undefined;__webpack_require__(66); /*
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


	*/var DUI_KEY=Symbol('Oui, Oui');var annotate=exports.annotate=function annotate(value){return function(obj,prop){return Reflect.defineMetadata(DUI_KEY,value,obj,prop);};};var getAnnotation=exports.getAnnotation=function getAnnotation(obj,prop){return Reflect.getMetadata(DUI_KEY,obj,prop);};var hasAnnotation=exports.hasAnnotation=function hasAnnotation(obj,prop){return getAnnotation(obj,prop)!==null;};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(condition,message){if(condition){if(typeof console!=='undefined'){console.warn('Warning: '+message);}}};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    This higher order component modifies the default `onChange( change )` handle by
	    passing back the `change` as a change object `{ [id]:change }` that indicates
	    the slot. This makes it easy to reconcile what changed in the ui without having
	    to have unneccesary references directly in components.
	*/exports.default=function(Comp){var WrappedComponent=function(_Comp){_inherits(WrappedComponent,_Comp);function WrappedComponent(){_classCallCheck(this,WrappedComponent);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(WrappedComponent).call(this));_this.onChildChange=function(change){return _this.props.onChange(_defineProperty({},_this.props.id,change));};return _this;}_createClass(WrappedComponent,[{key:'render',value:function render(){return _preactCompat2.default.createElement(Comp,_extends({},this.props,{'class':'oui-control',onChange:this.onChildChange}));}}]);return WrappedComponent;}(Comp); // WrappedComponent.name = 'Wrapped'+Comp.name
	WrappedComponent.propTypes={onChange:_preactCompat.PropTypes.func.isRequired,id:_preactCompat.PropTypes.string.isRequired,value:Comp.propTypes.value};return WrappedComponent;};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var PI2=exports.PI2=2.0*Math.PI;var HALF_PI=exports.HALF_PI=Math.PI*0.5;var DEG2RAD=exports.DEG2RAD=Math.PI/180.0;var RAD2DEG=exports.RAD2DEG=180.0/Math.PI;var EPS=exports.EPS=10e-6; //Constants
	/*
	 * Lineary interpolates between a->b, using n as a weight
	 */var mix=exports.mix=function mix(n,a,b){return a*(1-n)+b*n;}; /*
	 * Linearly maps n from a->b to x->y
	 */var map=exports.map=function map(n,a,b,x,y){return x+(n-a)*(y-x)/(b-a);}; /*
	 * Linearly maps n from a->b to 0-1
	 */var normalize=function normalize(n,a,b){return math.map(n,a,b,0,1);}; /*
	 * Clamp n within range a->b
	 */var clamp=exports.clamp=function clamp(n,a,b){return n<a?a:n>b?b:n;}; /*
	 * Returns a pseudo-random floating point number within the range a->b, if b is not supplied it
	 * returns within the range 0-a
	*/var random=exports.random=function random(a,b){return b===undefined?Math.random()*a:Math.random()*(b-a)+a;}; // export default {
	//     mix, map, normalize, clamp, random,
	//     PI2, HALF_PI, DEG2RAD, RAD2DEG, EPS }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _shallowEqual=__webpack_require__(63);var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */var shallowCompare=function shallowCompare(instance,nextProps,nextState){return !(0,_shallowEqual2.default)(instance.props,nextProps)||!(0,_shallowEqual2.default)(instance.state,nextState);};exports.default=shallowCompare;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	/*
	 * DEPENDENCIES
	 */

	var convert = __webpack_require__(65);


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
/* 13 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(77);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(1).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).setImmediate, __webpack_require__(20).clearImmediate))

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var rgbObject=exports.rgbObject=function rgbObject(color){return 'r' in color&&typeof color.r==='number'&&'g' in color&&typeof color.g==='number'&&'b' in color&&typeof color.b==='number';};var rgbArray=exports.rgbArray=function rgbArray(color){return color instanceof Array&&color.length>=3;};var hslObject=exports.hslObject=function hslObject(color){return 'h' in color&&typeof color.h==='number'&&'s' in color&&typeof color.s==='number'&&'l' in color&&typeof color.l==='number';};var hsvObject=exports.hsvObject=function hsvObject(color){return 'h' in color&&typeof color.h==='number'&&'s' in color&&typeof color.s==='number'&&'v' in color&&typeof color.v==='number';};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _numericstepper=__webpack_require__(51);var _numericstepper2=_interopRequireDefault(_numericstepper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_numericstepper2.default;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(54);var _slider2=_interopRequireDefault(_slider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_slider2.default;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true}); /*
	    This is a simple debounce/throttle function that uses `requestAnimationFrame`
	    for timing instead of setTimeout or equivalent, as such it's better suited
	    for updates that involve a repaint, which tbh is probably most things
	*/exports.default=function(fn){var rafID=void 0,t=void 0; /*
	        Create a debounced wrapper
	    */var debounced=function debounced(a){ // console.log( performance.now() - t)
	fn(a);cancelAnimationFrame(rafID);rafID=null;}; /*
	        Return a function that only executes when rafID has fired
	    */return function(e){ //t = performance.now()
	if(!rafID){ // fn( e )
	if(e&&e.persist)e.persist();requestAnimationFrame(function(_){rafID=requestAnimationFrame(debounced.bind(undefined,e));});}};};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preactCompat2.default.createElement("svg",{fill:"currentColor",fit:"true",height:"1em",width:"1em",viewBox:"0 0 40 40",preserveAspectRatio:"xMidYMid meet",style:_extends({verticalAlign:'middle'},props.style)},_preactCompat2.default.createElement("g",null,_preactCompat2.default.createElement("path",{d:"m20 13.4l10 10-2.3 2.3-7.7-7.7-7.7 7.7-2.3-2.3z"})));};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preactCompat2.default.createElement("svg",{fill:"currentColor",fit:"true",height:"1em",width:"1em",viewBox:"0 0 40 40",preserveAspectRatio:"xMidYMid meet",style:_extends({verticalAlign:'middle'},props.style)},_preactCompat2.default.createElement("g",null,_preactCompat2.default.createElement("path",{d:"m27.7 14.3l2.3 2.3-10 10-10-10 2.3-2.3 7.7 7.7z"})));};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	  This is where we reconcile the object and decide what should and should not
	  end up in the renderTree. Essentially it is a mapping between an object literal
	  representation and a renderable graph
	*/ /*
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
	*/ /*
	  Should infer an interface, an agreement of api functionality.
	  This property has this interface and implements this api, therefore
	  you can safely assume it works in this kind of way, and can be conrolled
	  with this type of controller
	*/ /*
	```
	{
	  // requires explicit knowledge of controller types
	  @annotate( 'This is a slider', min, max, 'colorpicker' )
	  prop:{ r, g, b },

	}
	```
	*/var _preactCompat=__webpack_require__(2);var React=_interopRequireWildcard(_preactCompat);var _annotate=__webpack_require__(7);var _primitiveComponents=__webpack_require__(62);var _primitiveComponents2=_interopRequireDefault(_primitiveComponents);var _validation=__webpack_require__(64);var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}exports.default=function(obj,onChange){var annotation=void 0,Component=void 0,components=[]; /*
	        Iterate through enumerable properties of `obj`
	    */for(var prop in obj){var Element=void 0,_Component=void 0,value=obj[prop]; /*
	            Null properties are discarded regardless of type annotation
	        */if(value===null)continue; /*
	            If there's any annotation associated with the property collect them
	            and pass them along to the Component instance
	        */annotation=(0,_annotate.getAnnotation)(obj,prop)||{}; /*
	            Users can associate a property with a specific Components by including
	            the `control` annotation
	        */_Component=annotation.control; /*
	            If the property has a type annotation, validate the property against
	            the controls propTypes.
	        */if(_Component){(0,_validation.validateProp)(obj,prop,_Component);}else if(!_Component&&_primitiveComponents2.default.has(typeof value==='undefined'?'undefined':_typeof(value))){ /*
	                However if no Component has been declared and the value is one of the
	                primtive types, use one of the default Components
	            */_Component=_primitiveComponents2.default.get(typeof value==='undefined'?'undefined':_typeof(value));} /*
	            Create the Element based on the provided annotaions and the required Component
	        */if(_Component){components.push(React.createElement(_Component,_extends({key:prop,id:prop,label:prop},annotation,{onChange:onChange,value:value})));}}return components;};

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function (obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(global, factory) {
	     true ? module.exports = factory() : 'function' == typeof define && define.amd ? define(factory) : global.preact = factory();
	}(this, function() {
	    'use strict';
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	    }
	    function extend(obj, props) {
	        for (var i in props) if (hasOwnProperty.call(props, i)) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        var out = {};
	        for (var i in obj) out[i] = obj[i];
	        return out;
	    }
	    function memoize(fn, mem) {
	        mem = mem || {};
	        return function(k) {
	            return hasOwnProperty.call(mem, k) ? mem[k] : mem[k] = fn(k);
	        };
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj) {
	        var arr = [], i = obj.length;
	        for (;i--; ) arr[i] = obj[i];
	        return arr;
	    }
	    function styleObjToCss(s) {
	        var str = '';
	        for (var prop in s) {
	            var val = s[prop];
	            if (!empty(val)) {
	                if (str) str += ' ';
	                str += jsToCss(prop);
	                str += ': ';
	                str += val;
	                if ('number' == typeof val && !NON_DIMENSION_PROPS[prop]) str += 'px';
	                str += ';';
	            }
	        }
	        return str;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function normalize(obj, prop, fn) {
	        var v = obj[prop];
	        if (v && !isString(v)) obj[prop] = fn(v);
	    }
	    function optionsHook(name, a, b) {
	        return hook(options, name, a, b);
	    }
	    function hook(obj, name, a, b, c) {
	        if (obj[name]) return obj[name](a, b, c); else ;
	    }
	    function deepHook(obj, type) {
	        do hook(obj, type); while (obj = obj._component);
	    }
	    function h(nodeName, attributes) {
	        var len = arguments.length, attributeChildren = attributes && attributes.children, children = void 0, arr = void 0, lastSimple = void 0;
	        if (attributeChildren) {
	            delete attributes.children;
	            if (3 > len) return h(nodeName, attributes, attributeChildren);
	        }
	        for (var i = 2; len > i; i++) {
	            var _p = arguments[i];
	            if (!falsey(_p)) {
	                if (!children) children = [];
	                if (_p.join) arr = _p; else {
	                    arr = SHARED_TEMP_ARRAY;
	                    arr[0] = _p;
	                }
	                for (var j = 0; j < arr.length; j++) {
	                    var child = arr[j], simple = !(falsey(child) || child instanceof VNode);
	                    if (simple) child = String(child);
	                    if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) children.push(child);
	                    lastSimple = simple;
	                }
	            } else ;
	        }
	        var p = new VNode(nodeName, attributes || void 0, children || void 0);
	        optionsHook('vnode', p);
	        return p;
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0], len = path.length;
	        return function(e) {
	            var _component$setState;
	            var t = this, s = component.state, obj = s, v = void 0, i = void 0;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value;
	            if (isFunction(v)) v = v.call(t);
	            if (len > 1) {
	                for (i = 0; len - 1 > i; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var currentItems = items, p = void 0;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            for (;p = currentItems.pop(); ) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(_ref) {
	        var nodeName = _ref.nodeName;
	        return isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY) || EMPTY_BASE;
	    }
	    function ensureNodeData(node) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = {});
	    }
	    function getNodeType(node) {
	        return node.nodeType;
	    }
	    function appendChildren(parent, children) {
	        var len = children.length, many = len > 2, into = many ? document.createDocumentFragment() : parent;
	        for (var i = 0; len > i; i++) into.appendChild(children[i]);
	        if (many) parent.appendChild(into);
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function getAccessor(node, name, value, cache) {
	        if ('type' !== name && 'style' !== name && name in node) return node[name];
	        var attrs = node[ATTR_KEY];
	        if (cache !== !1 && attrs && hasOwnProperty.call(attrs, name)) return attrs[name];
	        if ('class' === name) return node.className;
	        if ('style' === name) return node.style.cssText; else return value;
	    }
	    function setAccessor(node, name, value) {
	        if ('class' === name) node.className = value || ''; else if ('style' === name) node.style.cssText = value || ''; else if ('dangerouslySetInnerHTML' === name) {
	            if (value && value.__html) node.innerHTML = value.__html;
	        } else if ('key' === name || name in node && 'type' !== name) {
	            node[name] = value;
	            if (falsey(value)) node.removeAttribute(name);
	        } else setComplexAccessor(node, name, value);
	        ensureNodeData(node)[name] = value;
	    }
	    function setComplexAccessor(node, name, value) {
	        if ('on' !== name.substring(0, 2)) {
	            var type = typeof value;
	            if (falsey(value)) node.removeAttribute(name); else if ('function' !== type && 'object' !== type) node.setAttribute(name, value);
	        } else {
	            var _type = normalizeEventName(name), l = node._listeners || (node._listeners = {}), fn = !l[_type] ? 'add' : !value ? 'remove' : null;
	            if (fn) node[fn + 'EventListener'](_type, eventProxy);
	            l[_type] = value;
	        }
	    }
	    function eventProxy(e) {
	        var fn = this._listeners[normalizeEventName(e.type)];
	        if (fn) return fn.call(this, optionsHook('event', e) || e); else ;
	    }
	    function getNodeAttributes(node) {
	        return node[ATTR_KEY] || getRawNodeAttributes(node) || EMPTY;
	    }
	    function getRawNodeAttributes(node) {
	        var list = node.attributes;
	        if (!list || !list.getNamedItem) return list; else return getAttributesAsObject(list);
	    }
	    function getAttributesAsObject(list) {
	        var attrs = void 0;
	        for (var i = list.length; i--; ) {
	            var item = list[i];
	            if (!attrs) attrs = {};
	            attrs[item.name] = item.value;
	        }
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isFunctionalComponent(vnode)) return !0;
	        var nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return node._componentConstructor === nodeName;
	        if (3 === getNodeType(node)) return isString(vnode); else return toLowerCase(node.nodeName) === nodeName;
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes), c = vnode.children;
	        if (c) props.children = c;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (hasOwnProperty.call(defaultProps, i) && !(i in props)) props[i] = defaultProps[i];
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = normalizeName(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName) {
	        var name = normalizeName(nodeName), list = nodes[name], node = list && list.pop() || document.createElement(nodeName);
	        ensureNodeData(node);
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (3 !== getNodeType(node)) {
	            if (!node[ATTR_KEY]) node[ATTR_KEY] = getRawNodeAttributes(node);
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function diff(dom, vnode, context) {
	        var originalAttributes = vnode.attributes;
	        for (;isFunctionalComponent(vnode); ) vnode = buildFunctionalComponent(vnode, context);
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context);
	        if (isString(vnode)) {
	            if (dom) {
	                var type = getNodeType(dom);
	                if (3 === type) {
	                    dom[TEXT_CONTENT] = vnode;
	                    return dom;
	                } else if (1 === type) collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName || UNDEFINED_ELEMENT;
	        if (!dom) out = createNode(nodeName); else if (toLowerCase(dom.nodeName) !== nodeName) {
	            out = createNode(nodeName);
	            appendChildren(out, toArray(dom.childNodes));
	            recollectNodeTree(dom);
	        }
	        innerDiffNode(out, vnode, context);
	        diffAttributes(out, vnode);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        return out;
	    }
	    function innerDiffNode(dom, vnode, context) {
	        var children = void 0, keyed = void 0, keyedLen = 0, len = dom.childNodes.length, childrenLen = 0;
	        if (len) {
	            children = [];
	            for (var i = 0; len > i; i++) {
	                var child = dom.childNodes[i], key = child._component ? child._component.__key : getAccessor(child, 'key');
	                if (!empty(key)) {
	                    if (!keyed) keyed = {};
	                    keyed[key] = child;
	                    keyedLen++;
	                } else children[childrenLen++] = child;
	            }
	        }
	        var vchildren = vnode.children, vlen = vchildren && vchildren.length, min = 0;
	        if (vlen) for (var i = 0; vlen > i; i++) {
	            var vchild = vchildren[i], child = void 0;
	            if (keyedLen) {
	                var attrs = vchild.attributes, key = attrs && attrs.key;
	                if (!empty(key) && hasOwnProperty.call(keyed, key)) {
	                    child = keyed[key];
	                    keyed[key] = null;
	                    keyedLen--;
	                }
	            }
	            if (!child && childrenLen > min) for (var j = min; childrenLen > j; j++) {
	                var c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = null;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = diff(child, vchild, context);
	            if (dom.childNodes[i] !== child) {
	                var c = child.parentNode !== dom && child._component, next = dom.childNodes[i + 1];
	                if (c) deepHook(c, 'componentWillMount');
	                if (next) dom.insertBefore(child, next); else dom.appendChild(child);
	                if (c) deepHook(c, 'componentDidMount');
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (hasOwnProperty.call(keyed, i) && keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (childrenLen > min) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var attrs = node[ATTR_KEY];
	        if (attrs) hook(attrs, 'ref', null);
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (!unmountOnly) {
	                if (1 !== getNodeType(node)) {
	                    removeNode(node);
	                    return;
	                }
	                collectNode(node);
	            }
	            var c = node.childNodes;
	            if (c && c.length) removeOrphanedChildren(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, vnode) {
	        var old = getNodeAttributes(dom) || EMPTY, attrs = vnode.attributes || EMPTY, name = void 0, value = void 0;
	        for (name in old) if (empty(attrs[name])) setAccessor(dom, name, null);
	        if (attrs !== EMPTY) for (name in attrs) if (hasOwnProperty.call(attrs, name)) {
	            value = attrs[name];
	            if (!empty(value) && value != getAccessor(dom, name)) setAccessor(dom, name, value);
	        }
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var list = components[Ctor.name], len = list && list.length, c = void 0;
	        for (var i = 0; len > i; i++) {
	            c = list[i];
	            if (c.constructor === Ctor) {
	                list.splice(i, 1);
	                var inst = new Ctor(props, context);
	                inst.nextBase = c.base;
	                return inst;
	            }
	        }
	        return new Ctor(props, context);
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context) {
	        var d = component._disableRendering;
	        component.__ref = props.ref;
	        component.__key = props.key;
	        delete props.ref;
	        delete props.key;
	        component._disableRendering = !0;
	        if (context) {
	            if (!component.prevContext) component.prevContext = component.context;
	            component.context = context;
	        }
	        if (component.base) hook(component, 'componentWillReceiveProps', props, component.context);
	        if (!component.prevProps) component.prevProps = component.props;
	        component.props = props;
	        component._disableRendering = d;
	        if (!opts || opts.render !== !1) if (opts && opts.renderSync || options.syncComponentUpdates !== !1) renderComponent(component); else triggerComponentRender(component);
	        hook(component, '__ref', component);
	    }
	    function renderComponent(component, opts) {
	        if (!component._disableRendering) {
	            var skip = void 0, rendered = void 0, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (hook(component, 'shouldComponentUpdate', props, state, context) === !1) skip = !0; else hook(component, 'componentWillUpdate', props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                rendered = hook(component, 'render', props, state, context);
	                var childComponent = rendered && rendered.nodeName, childContext = component.getChildContext ? component.getChildContext() : context, toUnmount = void 0, base = void 0;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = component._component;
	                    if (inst && inst.constructor !== childComponent) {
	                        toUnmount = inst;
	                        inst = null;
	                    }
	                    var childProps = getNodeProps(rendered);
	                    if (inst) setComponentProps(inst, childProps, SYNC_RENDER, childContext); else {
	                        inst = createComponent(childComponent, childProps, childContext);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        if (isUpdate) deepHook(inst, 'componentWillMount');
	                        setComponentProps(inst, childProps, NO_RENDER, childContext);
	                        renderComponent(inst, DOM_RENDER);
	                        if (isUpdate) deepHook(inst, 'componentDidMount');
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = component._component;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || opts && opts.build) base = diff(cbase, rendered || EMPTY_BASE, childContext);
	                }
	                if (initialBase && base !== initialBase) {
	                    var p = initialBase.parentNode;
	                    if (p && base !== p) p.replaceChild(base, initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    for (;t = t._parentComponent; ) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	                if (isUpdate) hook(component, 'componentDidUpdate', previousProps, previousState, previousContext);
	            }
	            var cb = component._renderCallbacks, fn = void 0;
	            if (cb) for (;fn = cb.pop(); ) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context) {
	        var c = dom && dom._component, oldDom = dom;
	        var isOwner = c && dom._componentConstructor === vnode.nodeName;
	        for (;c && !isOwner && (c = c._parentComponent); ) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner) {
	            setComponentProps(c, getNodeProps(vnode), SYNC_RENDER, context);
	            dom = c.base;
	        } else {
	            if (c) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            dom = createComponentFromVNode(vnode, dom, context);
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function createComponentFromVNode(vnode, dom, context) {
	        var props = getNodeProps(vnode);
	        var component = createComponent(vnode.nodeName, props, context);
	        if (dom && !component.base) component.base = dom;
	        setComponentProps(component, props, NO_RENDER, context);
	        renderComponent(component, DOM_RENDER);
	        return component.base;
	    }
	    function unmountComponent(component, remove) {
	        hook(component, '__ref', null);
	        hook(component, 'componentWillUnmount');
	        var inner = component._component;
	        if (inner) {
	            unmountComponent(inner, remove);
	            remove = !1;
	        }
	        var base = component.base;
	        if (base) {
	            if (remove !== !1) removeNode(base);
	            removeOrphanedChildren(base.childNodes, !0);
	        }
	        if (remove) {
	            component._parentComponent = null;
	            collectComponent(component);
	        }
	        hook(component, 'componentDidUnmount');
	    }
	    function Component(props, context) {
	        this._dirty = this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context || {};
	        this.props = props;
	        this.state = hook(this, 'getInitialState') || {};
	    }
	    function render(vnode, parent, merge) {
	        var existing = merge && merge._component && merge._componentConstructor === vnode.nodeName, built = diff(merge, vnode), c = !existing && built._component;
	        if (c) deepHook(c, 'componentWillMount');
	        if (built.parentNode !== parent) parent.appendChild(built);
	        if (c) deepHook(c, 'componentDidMount');
	        return built;
	    }
	    var NO_RENDER = {
	        render: !1
	    };
	    var SYNC_RENDER = {
	        renderSync: !0
	    };
	    var DOM_RENDER = {
	        build: !0
	    };
	    var EMPTY = {};
	    var EMPTY_BASE = '';
	    var HAS_DOM = 'undefined' != typeof document;
	    var TEXT_CONTENT = !HAS_DOM || 'textContent' in document ? 'textContent' : 'nodeValue';
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol['for']('preactattr') : '__preactattr_';
	    var UNDEFINED_ELEMENT = 'undefined';
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
	    var isFunction = function(obj) {
	        return 'function' == typeof obj;
	    };
	    var isString = function(obj) {
	        return 'string' == typeof obj;
	    };
	    var hasOwnProperty = {}.hasOwnProperty;
	    var empty = function(x) {
	        return null == x;
	    };
	    var falsey = function(value) {
	        return value === !1 || null == value;
	    };
	    var jsToCss = memoize(function(s) {
	        return s.replace(/([A-Z])/g, '-$1').toLowerCase();
	    });
	    var toLowerCase = memoize(function(s) {
	        return s.toLowerCase();
	    });
	    var ch = void 0;
	    try {
	        ch = new MessageChannel();
	    } catch (e) {}
	    var setImmediate = ch ? function(f) {
	        ch.port1.onmessage = f;
	        ch.port2.postMessage('');
	    } : setTimeout;
	    var options = {
	        vnode: function(n) {
	            var attrs = n.attributes;
	            if (attrs && !isFunction(n.nodeName)) {
	                var p = attrs.className;
	                if (p) {
	                    attrs['class'] = p;
	                    delete attrs.className;
	                }
	                if (attrs['class']) normalize(attrs, 'class', hashToClassName);
	                if (attrs.style) normalize(attrs, 'style', styleObjToCss);
	            }
	        }
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var items = [];
	    var itemsOffline = [];
	    var normalizeEventName = memoize(function(t) {
	        return t.replace(/^on/i, '').toLowerCase();
	    });
	    var nodes = {};
	    var normalizeName = memoize(function(name) {
	        return name.toUpperCase();
	    });
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + (eventPath || '');
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    var preact = {
	        h: h,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options,
	        hooks: options
	    };
	    return preact;
	});
	//# sourceMappingURL=preact.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).setImmediate))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(19);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var defaultSize = '1em';

	var IconBase = function IconBase(_ref, _ref2) {
	    var children = _ref.children;
	    var size = _ref.size;
	    var style = _ref.style;

	    var props = _objectWithoutProperties(_ref, ['children', 'size', 'style']);

	    var reactIconBase = _ref2.reactIconBase;

	    var computedSize = size ? size : reactIconBase && reactIconBase.size || defaultSize;
	    var computedStyle = _extends({
	        verticalAlign: "middle"
	    }, reactIconBase && reactIconBase.style || {}, style);
	    return _react2.default.createElement(
	        'svg',
	        _extends({
	            fill: 'currentColor',
	            fit: true,
	            height: computedSize,
	            width: computedSize
	        }, props, reactIconBase, {
	            preserveAspectRatio: 'xMidYMid meet',
	            style: computedStyle
	        }),
	        children
	    );
	};

	IconBase.contextTypes = {
	    reactIconBase: _react.PropTypes.object
	};

	IconBase.propTypes = {
	    size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    style: _react.PropTypes.object
	};

	exports.default = IconBase;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactNoopUpdateQueue = __webpack_require__(35);
	var ReactInstrumentation = __webpack_require__(83);

	var canDefineProperty = __webpack_require__(16);
	var emptyObject = __webpack_require__(29);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(4);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    ReactInstrumentation.debugTool.onSetState();
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = __webpack_require__(6);
	var ReactPropTypeLocations = __webpack_require__(36);
	var ReactPropTypeLocationNames = __webpack_require__(15);
	var ReactCurrentOwner = __webpack_require__(14);

	var canDefineProperty = __webpack_require__(16);
	var getIteratorFn = __webpack_require__(17);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(4);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }

	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;

	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  return addenda;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(4);

	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(30);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; // import radium from 'radium'
	var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultStyle={cursor:'pointer',outline:'none',border:'none',padding:'1em',verticalAlign:'middle',textAlign:'center',lineHeight:'50%',':hover':{backgroundColor:_styles.highlight.color,color:'white'}}; /**
	    The Button, arguably most basic of all components. You hover, you click, you rollout.
	    Pretty self explanatory. Documentation included for completeness
	*/var Button=function Button(props){return _preactCompat2.default.createElement('button',_extends({},props,{style:_extends({},_styles.base,defaultStyle,props.style)}),props.label);}; // Button = radium( Button )
	Button.defaultProps={label:'Button'};Button.propTypes={ /**
	     * A text label
	     */label:_preactCompat2.default.PropTypes.string, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};exports.default=Button;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _button=__webpack_require__(37);var _button2=_interopRequireDefault(_button);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_button2.default;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /**
	 	Another stupidly simple component, it effectively wraps the native checkbox.
		Documentation included for completeness
	 */var Checkbox=function(_React$Component){_inherits(Checkbox,_React$Component);function Checkbox(){_classCallCheck(this,Checkbox);return _possibleConstructorReturn(this,Object.getPrototypeOf(Checkbox).apply(this,arguments));}_createClass(Checkbox,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var _onChange=_props.onChange;return _preactCompat2.default.createElement('div',{style:_extends({},_styles.base,defaultStyle,{alignItems:'center'}),onClick:function onClick(evt){return _onChange(!value);}},_preactCompat2.default.createElement('label',{style:_styles.base},label),_preactCompat2.default.createElement('input',{checked:value,style:alignRight,type:'checkbox',onChange:function onChange(evt){return _onChange(evt.target.checked);}}));}}]);return Checkbox;}(_preactCompat2.default.Component); // Checkbox = radium( Checkbox )
	Checkbox.propTypes={ /**
		 * A text label
		 */label:_preactCompat2.default.PropTypes.string, /**
		 * Determines whether the element is checked or not.
		 */value:_preactCompat2.default.PropTypes.bool, /**
		 * A callback triggered when the checkbox is toggled
		 */onChange:_preactCompat2.default.PropTypes.func};Checkbox.defaultProps={label:'Checkbox',value:false,onChange:function onChange(a){return a;}};var defaultStyle={display:'flex'};var alignRight={marginLeft:'auto'};exports.default=Checkbox;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _checkbox=__webpack_require__(39);var _checkbox2=_interopRequireDefault(_checkbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_checkbox2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hsv2Hsv=exports.rgbArr2Hsv=exports.rgb2Hsv=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /*
	    A set of validators for common color formats such as;
	    {r, g, b}, {h, s, v}, {h, s, l} and [ r, g, b ]
	*/var _validators=__webpack_require__(21);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var withAlpha=function withAlpha(color,a){return a!==undefined?_extends({a:a},color):color;};var normalizeRGB=function normalizeRGB(c){return {r:c.r*255,g:c.g*255,b:c.b*255};};var deNormalizeRGB=function deNormalizeRGB(c){return {r:c.r/255,g:c.g/255,b:c.b/255};};var rgb2Hsv=exports.rgb2Hsv=function rgb2Hsv(c){return withAlpha(_colr2.default.fromRgbObject(normalizeRGB(c)).toRawHsvObject(),c.a);};var rgbArr2Hsv=exports.rgbArr2Hsv=function rgbArr2Hsv(c){return withAlpha(_colr2.default.fromRgbArray(c.map(function(channel){return channel*255;})).toRawHsvObject(),c[3]);};var hsv2Hsv=exports.hsv2Hsv=function hsv2Hsv(c){return c;};rgb2Hsv.invert=function(c){return withAlpha(deNormalizeRGB(_colr2.default.fromHsvObject(c).toRawRgbObject()),c.a);};rgbArr2Hsv.invert=function(c){return _colr2.default.fromHsvObject(c).toRawRgbArray().map(function(channel){return channel/255;}).concat([c.a]);};hsv2Hsv.invert=function(c){return c;};exports.default=function(value){var converter=hsv2Hsv;if((0,_validators.rgbObject)(value))converter=rgb2Hsv;else if((0,_validators.rgbArray)(value))converter=rgbArr2Hsv;return converter;};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _hsvColorpicker=__webpack_require__(44);var _hsvColorpicker2=_interopRequireDefault(_hsvColorpicker);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);var _palette=__webpack_require__(46);var _palette2=_interopRequireDefault(_palette);var _add=__webpack_require__(73);var _add2=_interopRequireDefault(_add);var _styles=__webpack_require__(3);var _colorConverter=__webpack_require__(41);var _colorConverter2=_interopRequireDefault(_colorConverter);var _validators=__webpack_require__(21);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /**

	A collapsible color picker with colour palette. One is assigned by you, the
	developer, the other is defined by the end user which persists across page refreshes.
	This means that in addition to any pallete you provide, the user can also add and save
	their own colours, much in the same way as photoshop.

	To save the current color click the `+` icon to save it to the users palette.
	Shift click to remove it.

	The users colour palette is saved to [localStorage](localStorage), this means
	each domain will have it's own unique user pallete, meaning `localhost` will differ
	from `staging.com`.

	*/var ColorPicker=function(_Component){_inherits(ColorPicker,_Component);function ColorPicker(){_classCallCheck(this,ColorPicker);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(ColorPicker).call(this));_this.state={colors:[]};_this.getSystemColors=function(_){return JSON.parse(localStorage.getItem('oui.colorpicker'))||[];};_this.setSystemColors=function(colors){return localStorage.setItem('oui.colorpicker',JSON.stringify(colors));};_this.onColorChange=function(hsv){var color=(0,_colorConverter2.default)(_this.props.value).invert(hsv);_this.props.onChange(color);};return _this;}_createClass(ColorPicker,[{key:'onAddColorClick',value:function onAddColorClick(color){var colors=this.getSystemColors();colors.push(color);this.setSystemColors(colors);this.forceUpdate();}},{key:'onRemoveColorClick',value:function onRemoveColorClick(color,index){var colors=this.getSystemColors();colors.splice(index,1);this.setSystemColors(colors);this.forceUpdate();}},{key:'componentWillMount',value:function componentWillMount(){this.setState({open:this.props.open});}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;var palette=_props.palette;var _state=this.state;var colors=_state.colors;var open=_state.open;var toHsv=(0,_colorConverter2.default)(value);var hsvColor=toHsv(value);return _preactCompat2.default.createElement('div',{style:_extends({},_styles.base,style,{height:'auto'})},_preactCompat2.default.createElement('div',{style:{display:'flex',alignItems:'baseline'},onClick:function onClick(v){return _this2.setState({open:!open});}},_preactCompat2.default.createElement('label',null,label),_preactCompat2.default.createElement('span',{style:_extends({},colorDropletStyle,{marginLeft:'auto',backgroundColor:_colr2.default.fromHsvObject(hsvColor).toHex()})})),open?_preactCompat2.default.createElement('div',null,_preactCompat2.default.createElement(_hsvColorpicker2.default,{style:style,value:hsvColor,onChange:this.onColorChange}),_preactCompat2.default.createElement(_palette2.default,{key:'user-palette',values:palette.map(toHsv),onSelect:this.onColorChange}),_preactCompat2.default.createElement(_palette2.default,{key:'system-palette',values:this.getSystemColors(),onSelect:this.onColorChange,onDeselect:this.onRemoveColorClick.bind(this)}),_preactCompat2.default.createElement(_add2.default,{onClick:function onClick(e){return _this2.onAddColorClick(toHsv(value));}})):null);}}]);return ColorPicker;}(_preactCompat.Component);ColorPicker.displayName='ColorPicker';var ValuePropTypeError=function ValuePropTypeError(propName,componentName){return new Error('Invalid prop `'+propName+'` supplied to'+' `'+componentName+'`. Validation failed.');};var rgbObjectPropType=function rgbObjectPropType(props,propName,componentName){if(!(0,_validators.rgbObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};var rgbArrayPropType=function rgbArrayPropType(props,propName,componentName){if(!(0,_validators.rgbArray)(props[propName])){return ValuePropTypeError(propName,componentName);}};var hsvObjectPropType=function hsvObjectPropType(props,propName,componentName){if(!(0,_validators.hsvObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};ColorPicker.propTypes={ /**
	     * The text label to display
	     */label:_preactCompat.PropTypes.string, /**
	     *  If true, the color picker will be initially open
	     */open:_preactCompat.PropTypes.bool, /**
	     *  An color object
	     */value:_preactCompat.PropTypes.oneOfType([rgbObjectPropType,rgbArrayPropType,hsvObjectPropType]), /**
	     * An array of colors used as a palette
	     */palette:_preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.arrayOf(rgbObjectPropType),_preactCompat.PropTypes.arrayOf(rgbArrayPropType),_preactCompat.PropTypes.arrayOf(hsvObjectPropType)]), /**
	     * Optional component styling
	     */style:_preactCompat.PropTypes.object, /**
	     *  A function triggered when the color changes
	     */onChange:_preactCompat.PropTypes.func};ColorPicker.defaultProps={open:false,label:'ColorPicker',value:{h:1,s:50,v:50},palette:[],onChange:function onChange(a){return a;}};var addButton={':hover':_styles.secondary}; // marginLeft: '0.3em',
	// marginRight: '0.3em'
	var colorDropletStyle={borderRadius:"50%",width:'1em',height:'1em',float:'right'};exports.default=ColorPicker;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    This HOC wraps the HSV ColorPicker in a stateful way to prevent loss of
	    information in degenerate color conversions.

	    Mapping { h, s, v } => { r, g, b } and back again, will lose information if
	    { s, v } === 0

	*/var isDegenerate=function isDegenerate(_ref){var h=_ref.h;var s=_ref.s;var v=_ref.v;return s===0;};exports.default=function(Comp){return function(_React$Component){_inherits(RGB2HSV,_React$Component);function RGB2HSV(){_classCallCheck(this,RGB2HSV);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(RGB2HSV).call(this));_this.state={value:null};_this.conditionalChange=function(value){if(isDegenerate(value)){_this.setState({value:value});}else {_this.setState({value:null});_this.props.onChange(value);}};return _this;}_createClass(RGB2HSV,[{key:'render',value:function render(){var _this2=this;return _preactCompat2.default.createElement(Comp,_extends({},this.props,{value:this.state.value||this.props.value,onChange:function onChange(change){return _this2.conditionalChange(change);}}));}}]);return RGB2HSV;}(_preactCompat2.default.Component);};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _catchDegenerateHsv=__webpack_require__(43);var _catchDegenerateHsv2=_interopRequireDefault(_catchDegenerateHsv);var _slider=__webpack_require__(23);var _slider2=_interopRequireDefault(_slider);var _numericstepper=__webpack_require__(22);var _numericstepper2=_interopRequireDefault(_numericstepper);var _math=__webpack_require__(10);var _throttle=__webpack_require__(24);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(3);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var HSVColorPicker=function(_React$Component){_inherits(HSVColorPicker,_React$Component);function HSVColorPicker(){_classCallCheck(this,HSVColorPicker);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(HSVColorPicker).call(this));_this.state={drag:false,boundingRect:null};var computeHsvaFromMouseEvent=function computeHsvaFromMouseEvent(e,bounds){var x=e.clientX===undefined?e.touches[0].clientX:e.clientX,y=e.clientY===undefined?e.touches[0].clientY:e.clientY;var value=_this.props.value;var h=value.h,s=(x-bounds.left)/bounds.width*100,v=(bounds.height-(y-bounds.top))/bounds.height*100,a=_this.props.value.a;return a===undefined?{h:h,s:s,v:v}:{h:h,s:s,v:v,a:a};};_this.onMouseDown=function(e){e.preventDefault(); /*
	                For performance reasons we pre calculate the bounding rect on
	                mouse down, this means we don't need to do this on every mouse move
	                event and therefore we avoid any layout thrashing.

	                The caveat is that any sizing changes that occur between mousedown
	                will cause mean the cached boundingRect is invalid and causes incorrect
	                results. However because of performance gains, this is acceptable
	                behaviour as changes to size are expected to be rare enough
	            */var rect=e.currentTarget.getBoundingClientRect();var hsv=computeHsvaFromMouseEvent(e,rect);_this.setState({drag:true,boundingRect:rect});_this.props.onChange(hsv);};_this.onMouseMove=(0,_throttle2.default)(function(e){e.preventDefault();if(_this.state.drag)_this.props.onChange(computeHsvaFromMouseEvent(e,_this.state.boundingRect));});_this.onMouseUp=function(e){_this.setState({drag:false});};_this.onHueChange=function(h){var _this$props$value=_this.props.value;var s=_this$props$value.s;var v=_this$props$value.v;var a=_this$props$value.a; //
	// if( isDegenerate( this.props.value ) ){
	//     this.setState({ value:{ h, s, v, a }})
	// }else{
	//     this.setState({value:null})
	_this.props.onChange({h:h,s:s,v:v,a:a}); // }
	};_this.onSaturationChange=function(s){var _this$props$value2=_this.props.value;var h=_this$props$value2.h;var v=_this$props$value2.v;var a=_this$props$value2.a;_this.props.onChange({h:h,s:s,v:v,a:a});};_this.onValueChange=function(v){var _this$props$value3=_this.props.value;var h=_this$props$value3.h;var s=_this$props$value3.s;var a=_this$props$value3.a;_this.props.onChange({h:h,s:s,v:v,a:a});};_this.onAlphaChange=function(a){var _this$props$value4=_this.props.value;var h=_this$props$value4.h;var s=_this$props$value4.s;var v=_this$props$value4.v;_this.props.onChange({h:h,s:s,v:v,a:a});};return _this;}_createClass(HSVColorPicker,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){var _props$value=this.props.value;var h=_props$value.h;var s=_props$value.s;var v=_props$value.v;var a=_props$value.a;var color=nextProps.value;return (h!==color.h||s!==color.s||v!==color.v||a!==color.a)&&(0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _props=this.props;var label=_props.label;var onChange=_props.onChange;var value=_props.value;var style=_props.style;var h=value.h;var s=value.s;var v=value.v;var a=value.a; // Preact does not pick up Components defaultProps
	style=style||HSVColorPicker.defaultProps.style; // Used to prevent collisions between fill() refs
	var uuid=Math.floor(Math.random()*999999999999999);return _preactCompat2.default.createElement('div',null,_preactCompat2.default.createElement('div',{style:_extends({},_styles.base,style)},_preactCompat2.default.createElement('svg',{width:'100%',height:'100%',version:'1.1',xmlns:'http://www.w3.org/2000/svg',style:defaultStyle,onMouseDown:this.onMouseDown,onMouseMove:this.state.drag?this.onMouseMove:null,onMouseUp:this.onMouseUp,onTouchStart:this.onMouseDown,onTouchMove:this.state.drag?this.onMouseMove:null,onTouchEnd:this.onMouseUp},_preactCompat2.default.createElement('defs',null,_preactCompat2.default.createElement('linearGradient',{id:"horizontal-gradient"+uuid},_preactCompat2.default.createElement('stop',{offset:'0%','stop-color':'white'}),_preactCompat2.default.createElement('stop',{offset:'100%','stop-color':"hsl("+h+",100%,50%)"})),_preactCompat2.default.createElement('linearGradient',{id:"vertical-gradient"+uuid,x1:'0',x2:'0',y1:'0',y2:'1'},_preactCompat2.default.createElement('stop',{offset:'0%','stop-color':'black','stop-opacity':'0'}),_preactCompat2.default.createElement('stop',{offset:'100%','stop-color':'black'})),_preactCompat2.default.createElement('linearGradient',{id:'alpha-gradient',x1:'0',x2:'1',y1:'0',y2:'0'},_preactCompat2.default.createElement('stop',{offset:'0%','stop-color':"hsl("+h+",100%,50%)",'stop-opacity':'0'}),_preactCompat2.default.createElement('stop',{offset:'100%','stop-color':"hsl("+h+",100%,50%)",'stop-opacity':'100'})),_preactCompat2.default.createElement('linearGradient',{id:'hsv-gradient'},stops)),_preactCompat2.default.createElement('rect',{width:'100%',height:'100%',style:rect,fill:'url(#horizontal-gradient'+uuid+')'}),_preactCompat2.default.createElement('rect',{width:'100%',height:'100%',style:rect,fill:'url(#vertical-gradient'+uuid+')'}),_preactCompat2.default.createElement('circle',{fill:'none',stroke:'white','stroke-width':'1.5',r:'0.3em',cx:s+'%',cy:100-v+'%'}))),_preactCompat2.default.createElement(_slider2.default,{includeStepper:false,label:'',step:1,min:1,max:360,value:h,style:hueSlider,onChange:this.onHueChange}),a!==undefined?_preactCompat2.default.createElement(_slider2.default,{includeStepper:false,label:'alpha',step:0.001,min:0,max:1,value:a,style:alphaSlider,onChange:this.onAlphaChange}):null,_preactCompat2.default.createElement('div',{style:_extends({},_styles.base,stepperStyle)},_preactCompat2.default.createElement(_numericstepper2.default,{key:'h',style:componentLabels,step:1,min:1,max:360,value:Math.round(h),onChange:this.onHueChange,label:'H'}),_preactCompat2.default.createElement(_numericstepper2.default,{key:'s',style:componentLabels,step:1,min:1,max:100,value:Math.round(s),onChange:this.onSaturationChange,label:'S'}),_preactCompat2.default.createElement(_numericstepper2.default,{key:'v',style:componentLabels,step:1,min:1,max:100,value:Math.round(v),onChange:this.onValueChange,label:'V'})));}}]);return HSVColorPicker;}(_preactCompat2.default.Component);HSVColorPicker.defaultProps={label:'HSVColorPicker',style:{width:'100%',height:150},value:{h:0,s:80,l:50}};HSVColorPicker.propTypes={ /**
	     *  A text label
	     */label:_preactCompat2.default.PropTypes.string, /**
	     * The default color of the component
	     */value:_preactCompat2.default.PropTypes.shape({h:_preactCompat2.default.PropTypes.number.isRequired,s:_preactCompat2.default.PropTypes.number.isRequired,v:_preactCompat2.default.PropTypes.number.isRequired}).isRequired, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};var defaultStyle={cursor:'default',display:'block'};var hueSlider={backgroundBar:{fill:'url(#hsv-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var alphaSlider={backgroundBar:{fill:'url(#alpha-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var stepperStyle={ // marginLeft: '0.3em',
	// marginRight: '0.3em'
	};var componentLabels={display:'inline'};var colorDrop={borderRadius:"50%",width:'1em',height:'1em',float:'right'};var rect={rx:_styles.base.borderRadius,ry:_styles.base.borderRadius}; /*
	    Creates an array of svg `<stop>` elements representing a full linear gradient
	    from hue 0 -> 360 in a given number of steps
	*/var createLinearGradientOfSVGStops=function createLinearGradientOfSVGStops(steps){var l=0,i=100/steps,stops=[];while(l++<steps){stops.push(_preactCompat2.default.createElement('stop',{offset:String(i*l)+"%",key:l,'stop-color':"hsl( "+l*360/steps+", 100%, 50% )"}));}return stops;}; /*
	    Pre calculate an array of `<stops>` to use as the slider gradient
	*/var stops=createLinearGradientOfSVGStops(100);exports.default=(0,_catchDegenerateHsv2.default)(HSVColorPicker);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.color=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _colorpicker=__webpack_require__(42);var _colorpicker2=_interopRequireDefault(_colorpicker);var _annotate=__webpack_require__(7);var _withChangeObject=__webpack_require__(9);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_colorpicker2.default;var color=exports.color=function color(options){return (0,_annotate.annotate)(_extends({},options,{control:(0,_withChangeObject2.default)(_colorpicker2.default)}));};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);var _button=__webpack_require__(38);var _button2=_interopRequireDefault(_button);var _styles=__webpack_require__(3);var _remove=__webpack_require__(74);var _remove2=_interopRequireDefault(_remove);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /**
	 * The ColorButton is simply a coloured button used as
	 * square glyph in the colour palette
	 */var ColorButton=function ColorButton(props){var value=props.value;var onClick=props.onClick;var children=props.children;var color=_colr2.default.fromHsvObject(value).toHex();var style={backgroundColor:color,width:'1em',height:'1em', // marginLeft: '0.3em',
	marginBottom:'0.5em',marginRight:'0.5em',padding:'0.5em',display:'inline-block',':hover':{backgroundColor:color}};return _preactCompat2.default.createElement(_button2.default,_extends({label:''},props,{style:style}),children);};var Palette=function(_React$Component){_inherits(Palette,_React$Component);function Palette(){_classCallCheck(this,Palette);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Palette).call(this));_this.state={hover:null};return _this;}_createClass(Palette,[{key:'render',value:function render(){var _this2=this;var _props=this.props;var values=_props.values;var onSelect=_props.onSelect;var onDeselect=_props.onDeselect;var hover=this.state.hover; //
	var areColoursRemoveable=onDeselect!==undefined; // If we have no colors then don't bother showing anything
	if(!values||values.length===0)return null;return _preactCompat2.default.createElement('div',null,values.map(function(color,i){return _preactCompat2.default.createElement(ColorButton,{key:i,value:color,onMouseOver:function onMouseOver(e){return areColoursRemoveable&&e.shiftKey?_this2.setState({hover:i}):null;},onMouseOut:areColoursRemoveable?function(e){return _this2.setState({hover:null});}:null,onClick:function onClick(e){return e.shiftKey?onDeselect(color,i):onSelect(color);}},i===hover?_preactCompat2.default.createElement(_remove2.default,null):null);}));}}]);return Palette;}(_preactCompat2.default.Component);Palette.defaultProps={ /**
	     * An array of colors
	     */values:[],onSelect:function onSelect(a){return a;}};Palette.propTypes={values:_preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.shape({h:_preactCompat.PropTypes.number.isRequired,s:_preactCompat.PropTypes.number.isRequired,v:_preactCompat.PropTypes.number.isRequired})).isRequired,onSelect:_preactCompat.PropTypes.func,onDeselect:_preactCompat.PropTypes.func, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};var style={margin:'0.5em'};exports.default=Palette;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaultStyle={float:'right',":focus":{outline:'none'}}; /**
	    Another simple component. The Combobox provides a basic wrapper around the
	    native form element with support for an array of strings, an array
	    of key value tuples, or an object.
	*/var ComboBox=function(_React$Component){_inherits(ComboBox,_React$Component);function ComboBox(){_classCallCheck(this,ComboBox);return _possibleConstructorReturn(this,Object.getPrototypeOf(ComboBox).apply(this,arguments));}_createClass(ComboBox,[{key:'render',value:function render(){var _props=this.props;var label=_props.label;var options=_props.options;var value=_props.value;var _onChange=_props.onChange;var isArray=Array.isArray(options);var valueSelected=false;var optionsElems=[],arrOptions=[];for(var i in options){var element=void 0;arrOptions.push(options[i]);if(options[i]===value&&!valueSelected){valueSelected=true;element=_preactCompat2.default.createElement('option',{key:i,value:options[i],selected:true},isArray?options[i]:i);}else {element=_preactCompat2.default.createElement('option',{key:i,value:options[i]},isArray?options[i]:i);}optionsElems.push(element);}return _preactCompat2.default.createElement('div',{style:_styles.base},_preactCompat2.default.createElement('label',null,label),_preactCompat2.default.createElement('select',{onChange:function onChange(e){return _onChange(arrOptions[e.target.selectedIndex]);},style:defaultStyle},optionsElems));}}]);return ComboBox;}(_preactCompat2.default.Component);ComboBox.defaultProps={ /**
		 * A text label
		 */label:'ComboBox', /**
		 * An array of options to populate the combobox
		 */options:[], /**
		 * A callback triggered when the component updates
		 */onChange:function onChange(a){return a;}};ComboBox.propTypes={label:_preactCompat.PropTypes.any,options:_preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.any).isRequired,_preactCompat.PropTypes.objectOf(_preactCompat.PropTypes.any).isRequired]),value:_preactCompat.PropTypes.any.isRequired,onChange:_preactCompat.PropTypes.func};exports.default=ComboBox;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.oneOf=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _combobox=__webpack_require__(47);var _combobox2=_interopRequireDefault(_combobox);var _annotate=__webpack_require__(7);var _withChangeObject=__webpack_require__(9);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_combobox2.default;var oneOf=exports.oneOf=function oneOf(options){return (0,_annotate.annotate)(_extends({},options,{control:(0,_withChangeObject2.default)(_combobox2.default)}));};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);var _expandLess=__webpack_require__(25);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(26);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} // import radium from 'radium'
	// import Tree from "../../render-tree"
	/*
	    The Folder is a container component that can be toggled opened and closed.
	    To render it's children, it accepts an array or object of react elements.
	*/var Folder=function(_Component){_inherits(Folder,_Component);function Folder(){_classCallCheck(this,Folder);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Folder).call(this));_this.state={open:false};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}_createClass(Folder,[{key:'render',value:function render(){var _props=this.props;var label=_props.label;var value=_props.value;var style=_props.style;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preactCompat2.default.createElement('div',{style:_styles.base},_preactCompat2.default.createElement('div',{onClick:this.toggleOpen,style:{display:'flex',alignItems:'center'}},_preactCompat2.default.createElement('label',null,label),_preactCompat2.default.createElement(Chevron,{style:{marginLeft:'auto'}})),open?_preactCompat2.default.createElement('div',{style:{padding:'1em',backgroundColor:'rgba( 1, 1, 1, 0.04 )',borderRadius:2}},value()):null);}}]);return Folder;}(_preactCompat.Component); // Folder = radium( Folder )
	Folder.defaultProps={label:'Folder',onChange:function onChange(a){return a;}};Folder.propTypes={ // value : PropTypes.oneOfType([
	//     PropTypes.object,
	//     PropTypes.array,
	// ]).isRequired,
	value:_preactCompat.PropTypes.func.isRequired,onChange:_preactCompat.PropTypes.func,label:_preactCompat.PropTypes.string,style:_preactCompat.PropTypes.object};var floatRight={ // float: 'right'
	};exports.default=Folder;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _folder=__webpack_require__(49);var _folder2=_interopRequireDefault(_folder);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_folder2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _math=__webpack_require__(10);var _styles=__webpack_require__(3);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} // import radium from 'radium'
	/**
	    This component is an alternative way to control a number. It's generally used
	    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
	    although you can optionally supply either.
	*/var NumericStepper=function(_React$Component){_inherits(NumericStepper,_React$Component);function NumericStepper(){_classCallCheck(this,NumericStepper);return _possibleConstructorReturn(this,Object.getPrototypeOf(NumericStepper).apply(this,arguments));}_createClass(NumericStepper,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return (0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var style=_props.style;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};var value=validate(this.props.value);var onChange=function onChange(e){e.preventDefault();var value=parseFloat(e.currentTarget.value);if(!isNaN(value))_this2.props.onChange(validate(value));};return _preactCompat2.default.createElement('div',{style:_extends({},_styles.base,{display:'flex',alignItems:'baseline'},style)},_preactCompat2.default.createElement('label',null,label),_preactCompat2.default.createElement('style',null,'\n                input[type=number] {\n                    -moz-appearance:textfield;\n                }\n\n                input::-webkit-inner-spin-button,\n                input::-webkit-outer-spin-button{\n                    margin: 0;\n                    -webkit-appearance: none;\n                }\n            '),_preactCompat2.default.createElement('input',_extends({type:'number'},this.props,{style:defaultStyle,value:value,onInput:onChange,onChange:onChange,ref:function ref(_ref){return _this2.domRef=_ref;}})));}}]);return NumericStepper;}(_preactCompat2.default.Component); // NumericStepper = radium( NumericStepper )
	NumericStepper.propTypes={ /**
	     *  A text label
	     */label:_preactCompat2.default.PropTypes.string, /**
	     *  The value of the slider
	     */value:_preactCompat2.default.PropTypes.number.isRequired, /**
	     *  Specifies the minimum value for the component
	     */min:_preactCompat2.default.PropTypes.number, /**
	     *  Specifies the maximum value for the component
	     */max:_preactCompat2.default.PropTypes.number, /**
	     * Specifies the intervals step
	     */step:_preactCompat2.default.PropTypes.number, /**
		 * A callback triggered when the component updates
		 */onChange:_preactCompat2.default.PropTypes.func, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};NumericStepper.defaultProps={label:'NumericStepper',min:0,max:100,style:{width:'100%'},step:0.1,onChange:function onChange(a){return a;}};var defaultStyle={fontFamily:'inherit',borderWidth:1,borderStyle:'solid',borderColor:_styles.secondary.color,borderRadius:2,backgroundColor:'transparent',outline:'none',textAlign:'center',width:30,fontSize:_styles.base.fontSize, // lineHeight: '15  px',
	color:_styles.base.color, // float:'right',
	marginLeft:'auto',":focus":{borderColor:_styles.highlight.color},":hover":{borderColor:_styles.highlight.color}};exports.default=NumericStepper;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _panel=__webpack_require__(53);var _panel2=_interopRequireDefault(_panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_panel2.default;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);var _expandLess=__webpack_require__(25);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(26);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Panel=function(_React$Component){_inherits(Panel,_React$Component);function Panel(){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Panel).call(this));_this.state={open:true};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}_createClass(Panel,[{key:'render',value:function render(){var children=this.props.children;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preactCompat2.default.createElement('div',{style:_extends({},_styles.base,style),'class':'oui-panel'},_preactCompat2.default.createElement('header',{style:{lineHeight:'11px'},onClick:this.toggleOpen},_preactCompat2.default.createElement('div',{style:{display:'flex'}},_preactCompat2.default.createElement('label',null,'Panel'),_preactCompat2.default.createElement(Chevron,{style:{marginLeft:'auto'}})),open?_preactCompat2.default.createElement('hr',{style:lineStyle}):null),open?_preactCompat2.default.createElement('div',{style:{overflowY:'scroll',maxHeight:'90%'}},children):null);}}]);return Panel;}(_preactCompat2.default.Component);var lineStyle={borderWidth:'0px 0px 1px 0px',borderTopStyle:'solid',borderRightStyle:'solid',borderLeftStyle:'solid',borderTopColor:_styles.secondary.color,borderRightColor:_styles.secondary.color,borderLeftColor:_styles.secondary.color,borderBottomColor:_styles.secondary.color};var style={boxSizing:'border-box',lineHeight:'2em',display:'flex',flexDirection:'column',width:275,background:'rgb( 250, 250, 250 )',borderRadius:2,padding:'1em',margin:0};exports.default=Panel;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _numericstepper=__webpack_require__(22);var _numericstepper2=_interopRequireDefault(_numericstepper);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);var _math=__webpack_require__(10);var _throttle=__webpack_require__(24);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} // import radium from 'radium'
	/**
	    A classic numerical slider, useful for representing numbers within a bounded
	    range. It also contains a `NumericalStepper` for displaying the text value
	    and entering values directly.
	*/var Slider=function(_React$Component){_inherits(Slider,_React$Component);function Slider(){_classCallCheck(this,Slider);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Slider).call(this));_this.state={drag:false,rect:null};_this.validate=function(value){var _this$props=_this.props;var onChange=_this$props.onChange;var min=_this$props.min;var max=_this$props.max;var step=_this$props.step;value=(0,_math.clamp)(value,min,max);value=Math.round(value*(1/step))/(1/step);return value;};_this.onNumericStepperChange=function(value){_this.props.onChange(_this.validate(value));}; /*
	            Compute the numerical value from a touch/mouse event
	        */var computeValuefromMouseEvent=function computeValuefromMouseEvent(e,bounds){return (0,_math.map)(e.clientX===undefined?e.touches[0].clientX:e.clientX,bounds.left,bounds.right,_this.props.min,_this.props.max);}; /*
	            Computes the value on mouse/touch down and triggers an `onChange`
	        */_this.onMouseDown=function(e){e.preventDefault();var _this$props2=_this.props;var value=_this$props2.value;var min=_this$props2.min;var max=_this$props2.max;var step=_this$props2.step;var onChange=_this$props2.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);}; /*
	                For performance reasons we pre calculate the bounding rect on
	                mouse down, this means we don't need to do this on every mouse move
	                event and therefore we avoid any layout thrashing.

	                The caveat is that any sizing changes that occur between mousedown
	                will cause mean the cached boundingRect is invalid and causes incorrect
	                results. However because of performance gains, this is acceptable
	                behaviour as changes to size are expected to be rare enough
	            */var rect=e.currentTarget.getBoundingClientRect();_this.setState({drag:true,rect:rect});onChange(validate(computeValuefromMouseEvent(e,rect)));}; /*
	            On mouse/touch move, trigger an onChange event
	        */_this.onMouseMove=(0,_throttle2.default)(function(e){var _this$props3=_this.props;var value=_this$props3.value;var min=_this$props3.min;var max=_this$props3.max;var step=_this$props3.step;var onChange=_this$props3.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};onChange(validate(computeValuefromMouseEvent(e,_this.state.rect)));});_this.onTouchMove=(0,_throttle2.default)(function(e){e.preventDefault();var _this$props4=_this.props;var value=_this$props4.value;var min=_this$props4.min;var max=_this$props4.max;var step=_this$props4.step;var onChange=_this$props4.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};onChange(validate(computeValuefromMouseEvent(e,_this.state.rect)));}); /*
	            changes the dragging state
	        */_this.onMouseUp=function(e){_this.setState({drag:false});};return _this;}_createClass(Slider,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return (0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'componentDidUpdate',value:function componentDidUpdate(props,state){if(this.state.drag&&!state.drag){document.addEventListener('mousemove',this.onMouseMove);document.addEventListener('mouseup',this.onMouseUp);document.addEventListener('touchmove',this.onTouchMove);document.addEventListener('touchend',this.onMouseUp);}else if(!this.state.drag&&state.drag){document.removeEventListener('mousemove',this.onMouseMove);document.removeEventListener('mouseup',this.onMouseUp);document.removeEventListener('touchmove',this.onTouchMove);document.removeEventListener('touchend',this.onMouseUp);}}},{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var onChange=_props.onChange;var includeStepper=_props.includeStepper;var style=_props.style;var stepperProps={value:value,label:label,min:min,max:max,step:step,onChange:onChange};var offsetPercentage=(0,_math.map)((0,_math.clamp)(value,min,max),min,max,0,100)+'%';value=this.validate(value);return _preactCompat2.default.createElement('div',{style:_styles.base},includeStepper?_preactCompat2.default.createElement(_numericstepper2.default,_extends({},stepperProps,{onChange:this.onNumericStepperChange})):null,_preactCompat2.default.createElement('svg',{width:'100%',height:'1em',style:defaultStyle,onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown},_preactCompat2.default.createElement('rect',{width:'100%',height:'100%',style:_extends({},defaultStyle,backgroundBar,style.backgroundBar)}),_preactCompat2.default.createElement('rect',_defineProperty({width:'100%',height:'100%',style:_extends({},defaultStyle,bar,style.bar)},'width',offsetPercentage)),_preactCompat2.default.createElement('circle',{cy:'50%',cx:offsetPercentage,r:'0.5em',style:_extends({},defaultStyle,thumb,style.thumb)})));}}]);return Slider;}(_preactCompat2.default.Component); // Slider = radium( Slider )
	Slider.propTypes={ /**
	     *  A text label
	     */label:_preactCompat2.default.PropTypes.string, /**
	     *  The value of the slider
	     */value:_preactCompat2.default.PropTypes.number.isRequired, /**
	     *  Specifies the minimum value for the component
	     */min:_preactCompat2.default.PropTypes.number, /**
	     *  Specifies the maximum value for the component
	     */max:_preactCompat2.default.PropTypes.number, /**
	     * Specifies the intervals step
	     */step:_preactCompat2.default.PropTypes.number, /**
		 * A callback triggered when the component updates
		 */onChange:_preactCompat2.default.PropTypes.func, /**
	     *  If false, the numeric stepper is not displayed
	     */includeStepper:_preactCompat2.default.PropTypes.bool, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};Slider.defaultProps={label:'Slider',includeStepper:true,min:0,max:100,step:1,onChange:function onChange(a){return a;},style:{width:'100%'}};var defaultStyle={display:'block',overflow:'visible',cursor:'default',stroke:'none',rx:2,ry:2};var thumb={fill:'none'};var backgroundBar={fill:_styles.secondary.color};var bar={fill:_styles.highlight.color};exports.default=Slider;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _textinput=__webpack_require__(56);var _textinput2=_interopRequireDefault(_textinput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_textinput2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _styles=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} // import radium from 'radium'
	/**

		A simple wrapper around a editable text field. It pretty much does what you'd
		expect it to.

	*/var TextInput=function(_React$Component){_inherits(TextInput,_React$Component);function TextInput(){_classCallCheck(this,TextInput);return _possibleConstructorReturn(this,Object.getPrototypeOf(TextInput).apply(this,arguments));}_createClass(TextInput,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;return _preactCompat2.default.createElement('div',{style:_extends({},_styles.base,style,{display:'flex'})},_preactCompat2.default.createElement('label',null,label),_preactCompat2.default.createElement('input',{type:'text',value:value,style:_extends({},defaultStyle),onInput:function onInput(evt){return onChange(evt.target.value);}}));}}]);return TextInput;}(_preactCompat2.default.Component); // TextInput = radium( TextInput )
	TextInput.propTypes={ /**
		 * The default value for the text input field
		 */value:_preactCompat2.default.PropTypes.string, /**
		 * A function called when the text field changes
		 */onChange:_preactCompat2.default.PropTypes.func, /**
		 * A text label for the input field
		 */label:_preactCompat2.default.PropTypes.string, /**
	     * Optional component styling
	     */style:_preactCompat2.default.PropTypes.object};TextInput.defaultProps={value:'',style:{width:'100%'},label:'Text Input',onChange:function onChange(a){return a;}};var defaultStyle={fontFamily:'inherit',fontSize:'inherit',color:'inherit',borderTop:'none',borderLeft:'none',borderRight:'none',borderRadius:'none',marginLeft:'auto',textAlign:'right',borderBottom:'1px solid '+_styles.secondary.color,backgroundColor:'transparent',":focus":{outline:'none',borderBottom:'1px solid '+_styles.highlight.color},":hover":{borderBottom:'1px solid '+_styles.highlight.color}};exports.default=TextInput;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _renderTree=__webpack_require__(27);var _renderTree2=_interopRequireDefault(_renderTree);var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    The `core-controllers` Folder component generates it's children using a function
	    passed in it's props. This is only called when it's open meaning that the whole
	    render tree is lazily instantiated, and only as much as neccesary.

	    This Component wraps the `core-controllers/Folder` by providing the default
	    `render-tree` function to generate the render list. Doing this in it's own
	    component rather than directly on the Folder component itself means we can
	    normalize the api in 'render-tree'
	*/exports.default=function(FolderComponent){ // let style = {
	//     paddingBottom: '0.5em',
	//     paddingTop: '0.5em',
	//     borderBottom: '1px solid rgb( 230, 230, 230 )'
	// }
	var WrappedComponent=function(_FolderComponent){_inherits(WrappedComponent,_FolderComponent);function WrappedComponent(){_classCallCheck(this,WrappedComponent);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(WrappedComponent).call(this));_this.tree=function(_){return (0,_renderTree2.default)(_this.props.value,_this.props.onChange);};return _this;}_createClass(WrappedComponent,[{key:"render",value:function render(){return _preactCompat2.default.createElement(FolderComponent,_extends({},this.props,{value:this.tree}));}}]);return WrappedComponent;}(FolderComponent);WrappedComponent.propTypes={value:_preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.object,_preactCompat.PropTypes.array]).isRequired,onChange:_preactCompat.PropTypes.func,label:_preactCompat.PropTypes.string,style:_preactCompat.PropTypes.object};return WrappedComponent;};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	    This module deeply mutatively merges properties of change `b` into `a`
	*/var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isWritable=function isWritable(obj,prop){var propDesc=Object.getOwnPropertyDescriptor(obj,prop);return propDesc?propDesc.writable===true:true;};var deepmerge=function deepmerge(a,b){var isFrozen=Object.isFrozen(a)||!Object.isExtensible(a);(0,_warn2.default)(isFrozen,'The merge target is frozen and cannot be mutated');if(isFrozen)return a;var breakOn=Array.isArray(a)&&b.length;var index=0;for(var prop in b){if(_typeof(a[prop])==='object'){var _isFrozen=Object.isFrozen(a[prop]);(0,_warn2.default)(_isFrozen,'The property `'+prop+'` is frozen and cannot be mutated.');if(!_isFrozen)deepmerge(a[prop],b[prop]);}else {var writable=isWritable(a,prop);(0,_warn2.default)(!writable,'The property `'+prop+'` is not writable and cannot be mutated.');if(writable)a[prop]=b[prop];}if(breakOn===++index)a.splice(breakOn);}return a;};exports.default=deepmerge;

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var element=document.createElement('div');document.body.appendChild(element);element.style.position='absolute';element.style.left='0';element.style.top='0'; // element.style.width = '100%'
	// element.style.height = '100%'
	element.style.padding='0.25em'; // element.style.margin = '0.5em'
	element.style.display='flex';element.style.flexDirection='column';element.style.flexWrap='wrap';element.style.alignItems='flex-start';element.style.alignContent='flex-start';exports.default=element;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _preactCompat=__webpack_require__(2);var _preactCompat2=_interopRequireDefault(_preactCompat);var _renderTree=__webpack_require__(27);var _renderTree2=_interopRequireDefault(_renderTree);var _panel=__webpack_require__(52);var _panel2=_interopRequireDefault(_panel);var _dom=__webpack_require__(59);var _dom2=_interopRequireDefault(_dom);var _deepMerge=__webpack_require__(58);var _deepMerge2=_interopRequireDefault(_deepMerge);var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(opts){var container=null;var render=function render(api){if(!api){_preactCompat2.default.unmountComponentAtNode(container);_dom2.default.removeChild(container);container=null;}else if(container===null){container=document.createElement('div');container.style.margin='0.25em';container.style.flexBasis='auto';_dom2.default.appendChild(container);}if(api){var onChange=function onChange(change){var isFrozen=Object.isFrozen(api);(0,_warn2.default)(Object.isFrozen(api),'The `api` object is frozen an cannot be mutated.');if(!isFrozen)render((0,_deepMerge2.default)(api,change));};var Element=_preactCompat2.default.createElement(_panel2.default,opts,(0,_renderTree2.default)(api,onChange));_preactCompat2.default.render(Element,container);}};return render;}; /*
	    Oui is mostly a stateless library. UI is declared using plain js objects and
	    oui simply maps them to controllers. This workflow serves the functional
	    community quite well, however many people prefer a more idiomatic imperative
	    api without having to maintain state themselves.

	    This module covers those scenarios where you just want to fire up the ui,
	    without having to worry about merging in UI changes.

	    Changes are deeply merged into the api object and the UI is automatically
	    re-rendered.
	*/

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _imperativeApi=__webpack_require__(60);var _imperativeApi2=_interopRequireDefault(_imperativeApi);var _combobox=__webpack_require__(48);var _combobox2=_interopRequireDefault(_combobox);var _colorpicker=__webpack_require__(45);var _annotate=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var oui=(0,_imperativeApi2.default)();exports.default={oui:oui,panel:_imperativeApi2.default,annotate:_annotate.annotate,oneOf:_combobox.oneOf,color:_colorpicker.color};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(23);var _slider2=_interopRequireDefault(_slider);var _checkbox=__webpack_require__(40);var _checkbox2=_interopRequireDefault(_checkbox);var _textinput=__webpack_require__(55);var _textinput2=_interopRequireDefault(_textinput);var _folder=__webpack_require__(50);var _folder2=_interopRequireDefault(_folder);var _withChangeObject=__webpack_require__(9);var _withChangeObject2=_interopRequireDefault(_withChangeObject);var _withTree=__webpack_require__(57);var _withTree2=_interopRequireDefault(_withTree);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=new Map([['number',(0,_withChangeObject2.default)(_slider2.default)],['string',(0,_withChangeObject2.default)(_textinput2.default)],['boolean',(0,_withChangeObject2.default)(_checkbox2.default)],['object',(0,_withChangeObject2.default)((0,_withTree2.default)(_folder2.default))]]);

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */function is(x,y){ // SameValue algorithm
	if(x===y){ // Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else { // Step 6.a: NaN == NaN
	return x!==x&&y!==y;}} /**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;} // Test for A's keys different from B.
	for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}exports.default=shallowEqual;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isValidControl=exports.validateProp=undefined;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	    Validates an object against a components `propTypes`
	*/var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);var _preactCompat=__webpack_require__(2);var React=_interopRequireWildcard(_preactCompat);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var validateProp=exports.validateProp=function validateProp(prop,propName,Comp){var name=Comp.displayName||Comp.name;var err=Comp.propTypes.value(prop,propName,name,'prop');(0,_warn2.default)(err,err?err.message:'');}; /*
	    Validates a control.

	    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
	    object containing a `value` field. `onChange` and `label` are optional.*
	*/var isValidControl=exports.isValidControl=function isValidControl(Control){return React.isValidElement(React.createElement(Control,null))&&Control.propTypes&&_typeof(Control.propTypes)==='object'&&typeof Control.propTypes.value==='function';};

/***/ },
/* 65 */
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
/* 66 */
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
/* 67 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(28);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(69);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function () {
	    return performance.now();
	  };
	} else {
	  performanceNow = function () {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(31)) :
		typeof define === 'function' && define.amd ? define(['preact'], factory) :
		(global.preactSvg = factory(global.preact));
	}(this, function (preact) { 'use strict';

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
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

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.objectWithoutProperties = function (obj, keys) {
		  var target = {};

		  for (var i in obj) {
		    if (keys.indexOf(i) >= 0) continue;
		    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		    target[i] = obj[i];
		  }

		  return target;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var DOM = typeof document !== 'undefined' && !!document.createElement;

		var SVG_ATTRS = ['viewBox'];

		var NS = {
			xlink: 'http://www.w3.org/1999/xlink'
		};

		var NS_ATTR = /^([a-zA-Z]+)(?:\:|([A-Z]))/;

		var PROP_TO_ATTR_MAP = {
			'className': 'class'
		};

		var EMPTY = {};

		var updateMode = false;

		if (DOM) {
			(function () {
				var div = document.createElement('div');

				var oldCreate = document.createElement;
				document.createElement = function (name) {
					if (updateMode || name === 'svg') {
						var el = document.createElementNS('http://www.w3.org/2000/svg', name);

						el.setAttribute = createAttributeShim('setAttribute');
						el.getAttribute = createAttributeShim('getAttribute');
						el.removeAttribute = createAttributeShim('removeAttribute');
						for (var key in el) {
							if (~SVG_ATTRS.indexOf(key) || !(key in div) || PROP_TO_ATTR_MAP.hasOwnProperty(key)) {
								overwriteProperty(el, key);
							}
						}
						return el;
					}
					return oldCreate.call(document, name);
				};
			})();
		}

		var PROPERTY_ERRORS = {};
		var hasPropertyErrors = false;

		function overwriteProperty(el, key) {
			var err = PROPERTY_ERRORS[key];
			if (err === false) {
				Object.defineProperty(el, key, contentPropertyDef(key));
			} else {
				attemptOverwriteProperty(el, key);
			}
		}

		function attemptOverwriteProperty(el, key) {
			try {
				Object.defineProperty(el, key, contentPropertyDef(key));
				PROPERTY_ERRORS[key] = false;
			} catch (e) {
				if (!PROPERTY_ERRORS[key]) {
					var err = el.nodeName + ': ' + e;
					PROPERTY_ERRORS[key] = err;
					if (!hasPropertyErrors && 'undefined' !== typeof console && console.warn) {
						hasPropertyErrors = true;
						console.warn('Error overwriting some SVG properties.', { errors: PROPERTY_ERRORS });
					}
				}
			}
		}

		var memoize = function (fn) {
			var mem = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			return function (k) {
				return mem.hasOwnProperty(k) ? mem[k] : mem[k] = fn(k);
			};
		};

		var contentPropertyDef = memoize(function (prop) {
			var attr = arguments.length <= 1 || arguments[1] === undefined ? PROP_TO_ATTR_MAP[prop] || prop : arguments[1];
			return {
				set: function (v) {
					if (v === null || v === undefined) this.removeAttribute(attr);else this.setAttribute(attr, v);
				},
				get: function () {
					return this.getAttribute(attr);
				}
			};
		});

		var createAttributeShim = memoize(function (method) {
			return function (name, value) {
				var proto = this.constructor.prototype,
				    p = name.match(NS_ATTR);
				if (p && NS.hasOwnProperty(p[1])) {
					name = name.replace(NS_ATTR, '$2').toLowerCase();
					var ns = NS[p[1]];
					return proto[method + 'NS'].call(this, ns, name, value);
				} else {
					return proto[method].call(this, name, value);
				}
			};
		});

		var SVG = function (_Component) {
			babelHelpers.inherits(SVG, _Component);

			function SVG() {
				babelHelpers.classCallCheck(this, SVG);
				return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
			}

			SVG.prototype.componentWillUpdate = function componentWillUpdate() {
				updateMode = true;
			};

			SVG.prototype.componentDidUpdate = function componentDidUpdate() {
				updateMode = false;
			};

			SVG.prototype.render = function render(_ref) {
				var children = _ref.children;
				var props = babelHelpers.objectWithoutProperties(_ref, ['children']);

				if (!this.hasRendered) {
					this.hasRendered = updateMode = true;

					this.setState(EMPTY, setStateUpdateProxy(this));
				}

				return preact.h(
					'svg',
					babelHelpers.extends({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }, props),
					children
				);
			};

			return SVG;
		}(preact.Component);

		function setStateUpdateProxy(component) {
			return function () {
				component.componentDidUpdate();
				component = null;
			};
		}

		return SVG;

	}));
	//# sourceMappingURL=preact-svg.js.map

/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(19);
	var IconBase = __webpack_require__(32);

	var MdAdd = function (_React$Component) {
	    _inherits(MdAdd, _React$Component);

	    function MdAdd() {
	        _classCallCheck(this, MdAdd);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdAdd).apply(this, arguments));
	    }

	    _createClass(MdAdd, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z' })
	                )
	            );
	        }
	    }]);

	    return MdAdd;
	}(React.Component);

	exports.default = MdAdd;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(19);
	var IconBase = __webpack_require__(32);

	var MdRemove = function (_React$Component) {
	    _inherits(MdRemove, _React$Component);

	    function MdRemove() {
	        _classCallCheck(this, MdRemove);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdRemove).apply(this, arguments));
	    }

	    _createClass(MdRemove, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm31.6 21.6h-23.2v-3.2h23.2v3.2z' })
	                )
	            );
	        }
	    }]);

	    return MdRemove;
	}(React.Component);

	exports.default = MdRemove;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {*} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(18);

	var ReactChildren = __webpack_require__(78);
	var ReactComponent = __webpack_require__(33);
	var ReactClass = __webpack_require__(79);
	var ReactDOMFactories = __webpack_require__(81);
	var ReactElement = __webpack_require__(6);
	var ReactElementValidator = __webpack_require__(34);
	var ReactPropTypes = __webpack_require__(86);
	var ReactVersion = __webpack_require__(87);

	var onlyChild = __webpack_require__(88);
	var warning = __webpack_require__(4);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(76);
	var ReactElement = __webpack_require__(6);

	var emptyFunction = __webpack_require__(13);
	var traverseAllChildren = __webpack_require__(89);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _assign = __webpack_require__(18);

	var ReactComponent = __webpack_require__(33);
	var ReactElement = __webpack_require__(6);
	var ReactPropTypeLocations = __webpack_require__(36);
	var ReactPropTypeLocationNames = __webpack_require__(15);
	var ReactNoopUpdateQueue = __webpack_require__(35);

	var emptyObject = __webpack_require__(29);
	var invariant = __webpack_require__(5);
	var keyMirror = __webpack_require__(30);
	var keyOf = __webpack_require__(67);
	var warning = __webpack_require__(4);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeDevtool
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	var tree = {};
	var rootIDs = [];

	function updateTree(id, update) {
	  if (!tree[id]) {
	    tree[id] = {
	      parentID: null,
	      ownerID: null,
	      text: null,
	      childIDs: [],
	      displayName: 'Unknown',
	      isMounted: false,
	      updateCount: 0
	    };
	  }
	  update(tree[id]);
	}

	function purgeDeep(id) {
	  var item = tree[id];
	  if (item) {
	    var childIDs = item.childIDs;

	    delete tree[id];
	    childIDs.forEach(purgeDeep);
	  }
	}

	var ReactComponentTreeDevtool = {
	  onSetDisplayName: function (id, displayName) {
	    updateTree(id, function (item) {
	      return item.displayName = displayName;
	    });
	  },
	  onSetChildren: function (id, nextChildIDs) {
	    updateTree(id, function (item) {
	      var prevChildIDs = item.childIDs;
	      item.childIDs = nextChildIDs;

	      nextChildIDs.forEach(function (nextChildID) {
	        var nextChild = tree[nextChildID];
	        !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected devtool events to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.displayName != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetDisplayName() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.childIDs != null || nextChild.text != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() or onSetText() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;

	        if (prevChildIDs.indexOf(nextChildID) === -1) {
	          nextChild.parentID = id;
	        }
	      });
	    });
	  },
	  onSetOwner: function (id, ownerID) {
	    updateTree(id, function (item) {
	      return item.ownerID = ownerID;
	    });
	  },
	  onSetText: function (id, text) {
	    updateTree(id, function (item) {
	      return item.text = text;
	    });
	  },
	  onMountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = true;
	    });
	  },
	  onMountRootComponent: function (id) {
	    rootIDs.push(id);
	  },
	  onUpdateComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.updateCount++;
	    });
	  },
	  onUnmountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = false;
	    });
	    rootIDs = rootIDs.filter(function (rootID) {
	      return rootID !== id;
	    });
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeDevtool._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    Object.keys(tree).filter(function (id) {
	      return !tree[id].isMounted;
	    }).forEach(purgeDeep);
	  },
	  isMounted: function (id) {
	    var item = tree[id];
	    return item ? item.isMounted : false;
	  },
	  getChildIDs: function (id) {
	    var item = tree[id];
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var item = tree[id];
	    return item ? item.displayName : 'Unknown';
	  },
	  getOwnerID: function (id) {
	    var item = tree[id];
	    return item ? item.ownerID : null;
	  },
	  getParentID: function (id) {
	    var item = tree[id];
	    return item ? item.parentID : null;
	  },
	  getText: function (id) {
	    var item = tree[id];
	    return item ? item.text : null;
	  },
	  getUpdateCount: function (id) {
	    var item = tree[id];
	    return item ? item.updateCount : 0;
	  },
	  getRootIDs: function () {
	    return rootIDs;
	  },
	  getRegisteredIDs: function () {
	    return Object.keys(tree);
	  }
	};

	module.exports = ReactComponentTreeDevtool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(6);
	var ReactElementValidator = __webpack_require__(34);

	var mapObject = __webpack_require__(68);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(28);

	var performanceNow = __webpack_require__(70);
	var warning = __webpack_require__(4);

	var eventHandlers = [];
	var handlerDoesThrowForEvent = {};

	function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
	  if (process.env.NODE_ENV !== 'production') {
	    eventHandlers.forEach(function (handler) {
	      try {
	        if (handler[handlerFunctionName]) {
	          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
	        }
	      } catch (e) {
	        process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
	        handlerDoesThrowForEvent[handlerFunctionName] = true;
	      }
	    });
	  }
	}

	var isProfiling = false;
	var flushHistory = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerType = null;

	function clearHistory() {
	  ReactComponentTreeDevtool.purgeUnmountedComponents();
	  ReactNativeOperationHistoryDevtool.clearHistory();
	}

	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
	    var parentID = ReactComponentTreeDevtool.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeDevtool.getDisplayName(id),
	      text: ReactComponentTreeDevtool.getText(id),
	      updateCount: ReactComponentTreeDevtool.getUpdateCount(id),
	      childIDs: ReactComponentTreeDevtool.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}

	function resetMeasurements() {
	  if (process.env.NODE_ENV !== 'production') {
	    var previousStartTime = currentFlushStartTime;
	    var previousMeasurements = currentFlushMeasurements || [];
	    var previousOperations = ReactNativeOperationHistoryDevtool.getHistory();

	    if (!isProfiling || currentFlushNesting === 0) {
	      currentFlushStartTime = null;
	      currentFlushMeasurements = null;
	      clearHistory();
	      return;
	    }

	    if (previousMeasurements.length || previousOperations.length) {
	      var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
	      flushHistory.push({
	        duration: performanceNow() - previousStartTime,
	        measurements: previousMeasurements || [],
	        operations: previousOperations || [],
	        treeSnapshot: getTreeSnapshot(registeredIDs)
	      });
	    }

	    clearHistory();
	    currentFlushStartTime = performanceNow();
	    currentFlushMeasurements = [];
	  }
	}

	function checkDebugID(debugID) {
	  process.env.NODE_ENV !== 'production' ? warning(debugID, 'ReactDebugTool: debugID may not be empty.') : void 0;
	}

	var ReactDebugTool = {
	  addDevtool: function (devtool) {
	    eventHandlers.push(devtool);
	  },
	  removeDevtool: function (devtool) {
	    for (var i = 0; i < eventHandlers.length; i++) {
	      if (eventHandlers[i] === devtool) {
	        eventHandlers.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  beginProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling) {
	        return;
	      }

	      isProfiling = true;
	      flushHistory.length = 0;
	      resetMeasurements();
	    }
	  },
	  endProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!isProfiling) {
	        return;
	      }

	      isProfiling = false;
	      resetMeasurements();
	    }
	  },
	  getFlushHistory: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      return flushHistory;
	    }
	  },
	  onBeginFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      currentFlushNesting++;
	      resetMeasurements();
	    }
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      resetMeasurements();
	      currentFlushNesting--;
	    }
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(!currentTimerType, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentTimerStartTime = performanceNow();
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	    }
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(currentTimerType === timerType, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentFlushMeasurements.push({
	          timerType: timerType,
	          instanceID: debugID,
	          duration: performanceNow() - currentTimerStartTime
	        });
	        currentTimerStartTime = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	    }
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginReconcilerTimer', debugID, timerType);
	  },
	  onEndReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onEndReconcilerTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onNativeOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onNativeOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetDisplayName: function (debugID, displayName) {
	    checkDebugID(debugID);
	    emitEvent('onSetDisplayName', debugID, displayName);
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onSetOwner: function (debugID, ownerDebugID) {
	    checkDebugID(debugID);
	    emitEvent('onSetOwner', debugID, ownerDebugID);
	  },
	  onSetText: function (debugID, text) {
	    checkDebugID(debugID);
	    emitEvent('onSetText', debugID, text);
	  },
	  onMountRootComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountRootComponent', debugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactInvalidSetStateWarningDevTool = __webpack_require__(84);
	  var ReactNativeOperationHistoryDevtool = __webpack_require__(85);
	  var ReactComponentTreeDevtool = __webpack_require__(80);
	  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
	  ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
	  ReactDebugTool.addDevtool(ReactNativeOperationHistoryDevtool);
	  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	  if (/[?&]react_perf\b/.test(url)) {
	    ReactDebugTool.beginProfiling();
	  }
	}

	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */

	'use strict';

	var ReactDebugTool = __webpack_require__(82);

	module.exports = { debugTool: ReactDebugTool };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningDevTool
	 */

	'use strict';

	var warning = __webpack_require__(4);

	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}

	var ReactInvalidSetStateWarningDevTool = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};

	module.exports = ReactInvalidSetStateWarningDevTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeOperationHistoryDevtool
	 */

	'use strict';

	var history = [];

	var ReactNativeOperationHistoryDevtool = {
	  onNativeOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactNativeOperationHistoryDevtool._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }

	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};

	module.exports = ReactNativeOperationHistoryDevtool;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(6);
	var ReactPropTypeLocationNames = __webpack_require__(15);

	var emptyFunction = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(17);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

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

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

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
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
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
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
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
	      if (is(propValue, expectedValues[i])) {
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
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
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
	          // Iterator will provide entry [k,v] tuples rather than values.
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

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
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

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.1.0';

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(6);

	var invariant = __webpack_require__(5);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(14);
	var ReactElement = __webpack_require__(6);

	var getIteratorFn = __webpack_require__(17);
	var invariant = __webpack_require__(5);
	var KeyEscapeUtils = __webpack_require__(75);
	var warning = __webpack_require__(4);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;