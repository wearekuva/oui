'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _expandMore = require('react-icons/lib/md/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Panel extends _react.Component {

    constructor() {

        super();

        this.state = { open: true };

        this.toggleOpen = _ => this.setState({ open: !this.state.open });
    }

    render() {

        let { children } = this.props,
            { open } = this.state;

        return _react2.default.createElement(
            'div',
            { style: _extends({}, _styles.base, style), 'class': 'oui-panel' },
            _react2.default.createElement(
                'header',
                { style: { lineHeight: '11px' }, onClick: this.toggleOpen },
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Panel'
                    ),
                    _react2.default.createElement(_expandMore2.default, { style: { marginLeft: 'auto' } })
                ),
                open ? _react2.default.createElement('hr', { style: lineStyle }) : null
            ),
            open ? children : null
        );
    }
}

var lineStyle = {
    borderWidth: '0px 0px 1px 0px',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopColor: _styles.secondary.color,
    borderRightColor: _styles.secondary.color,
    borderLeftColor: _styles.secondary.color,
    borderBottomColor: _styles.secondary.color
};

var style = {
    boxSizing: 'border-box',

    lineHeight: '2em',

    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'baseline',
    // overflow:'scroll',
    width: 300,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 2,
    padding: '1em',
    // border: 'green'
    margin: 0
    // marginBottom: '0'
};

exports.default = Panel;