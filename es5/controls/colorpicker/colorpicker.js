'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */

// // import FaAdd from 'react-icons/lib/md/add';
//


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hsvColorpicker = require('./hsv/hsv-colorpicker');

var _hsvColorpicker2 = _interopRequireDefault(_hsvColorpicker);

var _colr = require('colr');

var _colr2 = _interopRequireDefault(_colr);

var _palette = require('./palette/palette');

var _palette2 = _interopRequireDefault(_palette);

var _styles = require('../../controls/styles');

var _colorConverter = require('./color-converter');

var _colorConverter2 = _interopRequireDefault(_colorConverter);

var _validators = require('./validators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

A collapsible color picker with colour palette. One is assigned by you, the
developer, the other is defined by the end user which persists across page refreshes.
This means that in addition to any pallete you provide, the user can also add and save
their own colours, much in the same way as photoshop.

To save the current color click the `+` icon to save it to the users palette.
Shift click to remove it.

The users colour palette is saved to [localStorage](localStorage), this means
each domain will have it's own unique user pallete, meaning `localhost` will differ
from `staging.com`.

*/

class ColorPicker extends _preact.Component {

    constructor() {
        super();
        this.state = { colors: [] };

        this.getSystemColors = _ => JSON.parse(localStorage.getItem('oui.colorpicker')) || [];
        this.setSystemColors = colors => localStorage.setItem('oui.colorpicker', JSON.stringify(colors));

        this.onColorChange = hsv => {

            let color = (0, _colorConverter2.default)(this.props.value).invert(hsv);
            this.props.onChange(color);
        };
    }

    onAddColorClick(color) {

        let colors = this.getSystemColors();
        colors.push(color);
        this.setSystemColors(colors);
        this.forceUpdate();
    }

    onRemoveColorClick(color, index) {

        let colors = this.getSystemColors();
        colors.splice(index, 1);
        this.setSystemColors(colors);
        this.forceUpdate();
    }

    componentWillMount() {
        this.setState({ open: this.props.open });
    }

    render() {

        let { value, label, onChange, style, palette } = this.props,
            { colors, open } = this.state,
            toHsv = (0, _colorConverter2.default)(value),
            hsvColor = toHsv(value);

        return _preact2.default.h(
            'div',
            { style: _extends({}, _styles.base, style, { height: 'auto' }) },
            _preact2.default.h(
                'div',
                { style: { display: 'flex', alignItems: 'baseline' }, onClick: v => this.setState({ open: !open }) },
                _preact2.default.h(
                    'label',
                    null,
                    label
                ),
                _preact2.default.h('span', { style: _extends({}, colorDropletStyle, { marginLeft: 'auto', backgroundColor: _colr2.default.fromHsvObject(hsvColor).toHex() }) })
            ),
            open ? _preact2.default.h(
                'div',
                null,
                _preact2.default.h(_hsvColorpicker2.default, { style: style, value: hsvColor, onChange: this.onColorChange }),
                _preact2.default.h(_palette2.default, { key: 'user-palette', values: palette.map(toHsv), onSelect: this.onColorChange }),
                _preact2.default.h(_palette2.default, { key: 'system-palette', values: this.getSystemColors(), onSelect: this.onColorChange, onDeselect: this.onRemoveColorClick.bind(this) }),
                _preact2.default.h('div', { onClick: e => this.onAddColorClick(toHsv(value)) })
            ) : null
        );
    }
}

ColorPicker.displayName = 'ColorPicker';

let ValuePropTypeError = (propName, componentName) => new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');

let rgbObjectPropType = (props, propName, componentName) => {
    if (!(0, _validators.rgbObject)(props[propName])) {
        return ValuePropTypeError(propName, componentName);
    }
};

let rgbArrayPropType = (props, propName, componentName) => {
    if (!(0, _validators.rgbArray)(props[propName])) {
        return ValuePropTypeError(propName, componentName);
    }
};

let hsvObjectPropType = (props, propName, componentName) => {
    if (!(0, _validators.hsvObject)(props[propName])) {
        return ValuePropTypeError(propName, componentName);
    }
};

ColorPicker.propTypes = {

    /**
     * The text label to display
     */
    label: _propTypes2.default.string,

    /**
     *  If true, the color picker will be initially open
     */
    open: _propTypes2.default.bool,

    /**
     *  An color object
     */
    value: _propTypes2.default.oneOfType([rgbObjectPropType, rgbArrayPropType, hsvObjectPropType]),

    /**
     * An array of colors used as a palette
     */
    palette: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(rgbObjectPropType), _propTypes2.default.arrayOf(rgbArrayPropType), _propTypes2.default.arrayOf(hsvObjectPropType)]),

    /**
     * Optional component styling
     */
    style: _propTypes2.default.object,

    /**
     *  A function triggered when the color changes
     */
    onChange: _propTypes2.default.func

};

ColorPicker.defaultProps = {
    open: false,
    label: 'ColorPicker',
    value: { h: 1, s: 50, v: 50 },
    palette: [],
    onChange: a => a
};

var addButton = {
    ':hover': _styles.secondary
};

// marginLeft: '0.3em',
// marginRight: '0.3em'
var colorDropletStyle = {
    borderRadius: "50%",
    width: '1em',
    height: '1em',
    float: 'right'
};

exports.default = ColorPicker;