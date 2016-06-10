'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import radium from 'radium'


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

	A simple wrapper around a editable text field. It pretty much does what you'd
	expect it to.

*/

class TextInput extends _react2.default.Component {

	render() {

		const { value, label, onChange, style } = this.props;

		return _react2.default.createElement(
			'div',
			{ style: _extends({}, _styles.base, style, { display: 'flex' }) },
			_react2.default.createElement(
				'label',
				null,
				label
			),
			_react2.default.createElement('input', { type: 'text', value: value,
				style: _extends({}, defaultStyle), onInput: evt => onChange(evt.target.value) })
		);
	}
}

// TextInput = radium( TextInput )

TextInput.propTypes = {

	/**
  * The default value for the text input field
  */
	value: _react2.default.PropTypes.string,

	/**
  * A function called when the text field changes
  */
	onChange: _react2.default.PropTypes.func,

	/**
  * A text label for the input field
  */
	label: _react2.default.PropTypes.string,

	/**
  * Optional component styling
  */
	style: _react2.default.PropTypes.object

};

TextInput.defaultProps = {

	value: '',
	style: { width: '100%' },
	label: 'Text Input',
	onChange: a => a

};

var defaultStyle = {
	fontFamily: 'inherit',
	fontSize: 'inherit',
	color: 'inherit',
	borderTop: 'none',
	borderLeft: 'none',
	borderRight: 'none',
	borderRadius: 'none',
	marginLeft: 'auto',
	textAlign: 'right',
	borderBottom: '1px solid ' + _styles.secondary.color,
	backgroundColor: 'transparent',
	":focus": {
		outline: 'none',
		borderBottom: '1px solid ' + _styles.highlight.color
	},
	":hover": {
		borderBottom: '1px solid ' + _styles.highlight.color
	}
};

exports.default = TextInput;