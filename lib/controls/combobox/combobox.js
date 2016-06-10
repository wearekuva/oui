'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let defaultStyle = {
    float: 'right',
    ":focus": {
        outline: 'none'
    }
};

/**
    Another simple component. The Combobox provides a basic wrapper around the
    native form element with support for an array of strings, an array
    of key value tuples, or an object.
*/

class ComboBox extends _react2.default.Component {

    render() {

        let { label, options, value, onChange } = this.props;

        let isArray = Array.isArray(options);
        let valueSelected = false;

        var optionsElems = [],
            arrOptions = [];

        for (var i in options) {
            let element;
            arrOptions.push(options[i]);
            if (options[i] === value && !valueSelected) {
                valueSelected = true;
                element = _react2.default.createElement(
                    'option',
                    { key: i, value: options[i], selected: true },
                    isArray ? options[i] : i
                );
            } else {
                element = _react2.default.createElement(
                    'option',
                    { key: i, value: options[i] },
                    isArray ? options[i] : i
                );
            }
            optionsElems.push(element);
        }

        return _react2.default.createElement(
            'div',
            { style: _styles.base },
            _react2.default.createElement(
                'label',
                null,
                label
            ),
            _react2.default.createElement(
                'select',
                { onChange: e => onChange(arrOptions[e.target.selectedIndex]), style: defaultStyle },
                optionsElems
            )
        );
    }
}

ComboBox.defaultProps = {

    /**
    * A text label
    */
    label: 'ComboBox',

    /**
    * An array of options to populate the combobox
    */
    options: [],

    /**
    * A callback triggered when the component updates
    */
    onChange: a => a
};

ComboBox.propTypes = {

    label: _react.PropTypes.any,

    options: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.any).isRequired, _react.PropTypes.objectOf(_react.PropTypes.any).isRequired]),

    value: _react.PropTypes.any.isRequired,

    onChange: _react.PropTypes.func

};

exports.default = ComboBox;