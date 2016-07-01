'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */

// import radium from 'radium'


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

	A simple wrapper around a editable text field. It pretty much does what you'd
	expect it to.

*/

class TextInput extends _preact2.default.Component {

	render() {

		const { value, label, onChange, style } = this.props;

		return _preact2.default.h(
			'div',
			{ style: _extends({}, _styles.base, style, { display: 'flex' }) },
			_preact2.default.h(
				'label',
				null,
				label
			),
			_preact2.default.h('input', { type: 'text', value: value,
				style: _extends({}, defaultStyle), onInput: evt => onChange(evt.target.value) })
		);
	}
}

// TextInput = radium( TextInput )

TextInput.propTypes = {

	/**
  * The default value for the text input field
  */
	value: _propTypes2.default.string,

	/**
  * A function called when the text field changes
  */
	onChange: _propTypes2.default.func,

	/**
  * A text label for the input field
  */
	label: _propTypes2.default.string,

	/**
  * Optional component styling
  */
	style: _propTypes2.default.object

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