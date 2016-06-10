'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colr = require('colr');

var _colr2 = _interopRequireDefault(_colr);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _styles = require('../../../controls/styles');

var _remove = require('react-icons/lib/md/remove');

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The ColorButton is simply a coloured button used as
 * square glyph in the colour palette
 */
let ColorButton = props => {

    let { value, onClick, children } = props;

    let color = _colr2.default.fromHsvObject(value).toHex();

    let style = {
        backgroundColor: color,
        width: '1em', height: '1em',
        // marginLeft: '0.3em',
        marginBottom: '0.5em',
        marginRight: '0.5em',
        padding: '0.5em',
        display: 'inline-block',
        ':hover': {
            backgroundColor: color
        }
    };

    return _react2.default.createElement(
        _button2.default,
        _extends({ label: '' }, props, { style: style }),
        children
    );
};

class Palette extends _react2.default.Component {

    constructor() {
        super();
        this.state = { hover: null };
    }

    render() {

        let { values, onSelect, onDeselect } = this.props,
            { hover } = this.state;

        //
        let areColoursRemoveable = onDeselect !== undefined;

        // If we have no colors then don't bother showing anything
        if (!values || values.length === 0) return null;

        return _react2.default.createElement(
            'div',
            null,
            values.map((color, i) => _react2.default.createElement(
                ColorButton,
                { key: i, value: color,
                    onMouseOver: e => areColoursRemoveable && e.shiftKey ? this.setState({ hover: i }) : null,
                    onMouseOut: areColoursRemoveable ? e => this.setState({ hover: null }) : null,
                    onClick: e => e.shiftKey ? onDeselect(color, i) : onSelect(color) },
                i === hover ? _react2.default.createElement(_remove2.default, null) : null
            ))
        );
    }
}

Palette.defaultProps = {

    /**
     * An array of colors
     */

    values: [],

    onSelect: a => a
};

Palette.propTypes = {

    values: _react.PropTypes.arrayOf(_react.PropTypes.shape({ h: _react.PropTypes.number.isRequired, s: _react.PropTypes.number.isRequired, v: _react.PropTypes.number.isRequired })).isRequired,

    onSelect: _react.PropTypes.func,

    onDeselect: _react.PropTypes.func,

    /**
     * Optional component styling
     */
    style: _react2.default.PropTypes.object
};

var style = {
    margin: '0.5em'
};

exports.default = Palette;