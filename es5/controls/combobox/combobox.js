'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

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

class ComboBox extends _preactCompat2.default.Component {

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
                element = _preactCompat2.default.createElement(
                    'option',
                    { key: i, value: options[i], selected: true },
                    isArray ? options[i] : i
                );
            } else {
                element = _preactCompat2.default.createElement(
                    'option',
                    { key: i, value: options[i] },
                    isArray ? options[i] : i
                );
            }
            optionsElems.push(element);
        }

        return _preactCompat2.default.createElement(
            'div',
            { style: _styles.base },
            _preactCompat2.default.createElement(
                'label',
                null,
                label
            ),
            _preactCompat2.default.createElement(
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

    label: _preactCompat.PropTypes.any,

    options: _preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.any).isRequired, _preactCompat.PropTypes.objectOf(_preactCompat.PropTypes.any).isRequired]),

    value: _preactCompat.PropTypes.any.isRequired,

    onChange: _preactCompat.PropTypes.func

};

exports.default = ComboBox;