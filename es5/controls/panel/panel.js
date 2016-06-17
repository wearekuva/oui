'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _styles = require('../styles');

var _expandLess = require('../../icons/expand-less');

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = require('../../icons/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Panel extends _preactCompat2.default.Component {

    constructor() {

        super();

        this.state = { open: true };

        this.toggleOpen = _ => this.setState({ open: !this.state.open });
    }

    render() {

        let { children } = this.props,
            { open } = this.state,
            Chevron = open ? _expandMore2.default : _expandLess2.default;

        return _preactCompat2.default.createElement(
            'div',
            { style: _extends({}, _styles.base, style), 'class': 'oui-panel' },
            _preactCompat2.default.createElement(
                'header',
                { style: { lineHeight: '11px' }, onClick: this.toggleOpen },
                _preactCompat2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _preactCompat2.default.createElement(
                        'label',
                        null,
                        'Panel'
                    ),
                    _preactCompat2.default.createElement(Chevron, { style: { marginLeft: 'auto' } })
                ),
                open ? _preactCompat2.default.createElement('hr', { style: lineStyle }) : null
            ),
            open ? _preactCompat2.default.createElement(
                'div',
                { style: { overflowY: 'scroll', maxHeight: '90%' } },
                children
            ) : null
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
    display: 'flex',
    flexDirection: 'column',
    width: 275,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 2,
    padding: '1em',
    margin: 0
};

exports.default = Panel;