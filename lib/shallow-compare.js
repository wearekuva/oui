'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shallowEqual = require('./shallow-equal');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
const shallowCompare = (instance, nextProps, nextState) => !(0, _shallowEqual2.default)(instance.props, nextProps) || !(0, _shallowEqual2.default)(instance.state, nextState);

exports.default = shallowCompare;