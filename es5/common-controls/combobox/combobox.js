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

// import radium from 'radium'
let ComboBox = ({ label, options, value, onChange }) => {

    let isArray = Array.isArray(options);

    var optionsElems = [_preactCompat2.default.createElement(
        'option',
        { key: value.toString(), value: value },
        isArray ? value : value.toString()
    )];

    for (var i in options) {
        optionsElems.push(_preactCompat2.default.createElement(
            'option',
            { key: i, value: options[i] },
            isArray ? options[i] : i
        ));
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
            { onChange: e => onChange(e.target.value), style: defaultStyle },
            optionsElems
        )
    );
};

// ComboBox = radium( ComboBox )

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

    options: _preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.string).isRequired, _preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.arrayOf(_preactCompat.PropTypes.any)).isRequired, _preactCompat.PropTypes.objectOf(_preactCompat.PropTypes.any).isRequired]),

    onChange: _preactCompat.PropTypes.func

};

exports.default = ComboBox;