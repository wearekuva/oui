'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

/** @jsx React.h */
class ComboBox extends _preact2.default.Component {

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
                element = _preact2.default.h(
                    'option',
                    { key: i, value: options[i], selected: true },
                    isArray ? options[i] : i
                );
            } else {
                element = _preact2.default.h(
                    'option',
                    { key: i, value: options[i] },
                    isArray ? options[i] : i
                );
            }
            optionsElems.push(element);
        }

        return _preact2.default.h(
            'div',
            { style: _styles.base },
            _preact2.default.h(
                'label',
                null,
                label
            ),
            _preact2.default.h(
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

    label: _propTypes2.default.any,

    options: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any).isRequired, _propTypes2.default.objectOf(_propTypes2.default.any).isRequired]),

    value: _propTypes2.default.any.isRequired,

    onChange: _propTypes2.default.func

};

exports.default = ComboBox;