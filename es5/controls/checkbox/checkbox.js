'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 	Another stupidly simple component, it effectively wraps the native checkbox.
	Documentation included for completeness
 */
class Checkbox extends _preact2.default.Component {

	render() {

		const { value, label, onChange } = this.props;

		return _preact2.default.h(
			'div',
			{ style: _extends({}, _styles.base, defaultStyle, { alignItems: 'center' }), onClick: evt => onChange(!value) },
			_preact2.default.h(
				'label',
				{ style: _styles.base },
				label
			),
			_preact2.default.h('input', { checked: value, style: alignRight, type: 'checkbox', onChange: evt => onChange(evt.target.checked) })
		);
	}
}

// Checkbox = radium( Checkbox )

Checkbox.propTypes = {

	/**
  * A text label
  */
	label: _proptypes2.default.string,

	/**
  * Determines whether the element is checked or not.
  */
	value: _proptypes2.default.bool,

	/**
  * A callback triggered when the checkbox is toggled
  */
	onChange: _proptypes2.default.func

};

Checkbox.defaultProps = {
	label: 'Checkbox',
	value: false,
	onChange: a => a
};

var defaultStyle = {
	display: 'flex'
};

var alignRight = {
	marginLeft: 'auto'
};

exports.default = Checkbox;