'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colr = require('colr');

var _colr2 = _interopRequireDefault(_colr);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _styles = require('../../../controls/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MdRemove from 'react-icons/lib/md/remove';

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

    return _preact2.default.h(
        _button2.default,
        _extends({ label: '' }, props, { style: style }),
        children
    );
};

class Palette extends _preact2.default.Component {

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

        return _preact2.default.h(
            'div',
            null,
            values.map((color, i) => _preact2.default.h(
                ColorButton,
                { key: i, value: color,
                    onMouseOver: e => areColoursRemoveable && e.shiftKey ? this.setState({ hover: i }) : null,
                    onMouseOut: areColoursRemoveable ? e => this.setState({ hover: null }) : null,
                    onClick: e => e.shiftKey ? onDeselect(color, i) : onSelect(color) },
                i === hover ? _preact2.default.h('div', null) : null
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

    values: _propTypes2.default.arrayOf(_propTypes2.default.shape({ h: _propTypes2.default.number.isRequired, s: _propTypes2.default.number.isRequired, v: _propTypes2.default.number.isRequired })).isRequired,

    onSelect: _propTypes2.default.func,

    onDeselect: _propTypes2.default.func,

    /**
     * Optional component styling
     */
    style: _propTypes2.default.object
};

var style = {
    margin: '0.5em'
};

exports.default = Palette;