'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _expandMore = require('react-icons/lib/md/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    The Folder is a container component that can be toggled opened and closed.
    To render it's children, it accepts an array or object of react elements.
*/

class Folder extends _react.Component {

    constructor() {

        super();

        this.state = { open: false };

        this.toggleOpen = _ => this.setState({ open: !this.state.open });
    }

    render() {

        let { label, value, style } = this.props,
            { open } = this.state,
            Chevron = open ? _expandMore2.default : _chevronLeft2.default;

        return _react2.default.createElement(
            'div',
            { style: _styles.base },
            _react2.default.createElement(
                'div',
                { onClick: this.toggleOpen, style: { display: 'flex', alignItems: 'center' } },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(Chevron, { style: { marginLeft: 'auto' } })
            ),
            open ? _react2.default.createElement(
                'div',
                { style: { padding: '1em', backgroundColor: 'rgba( 1, 1, 1, 0.04 )', borderRadius: 2 } },
                value()
            ) : null
        );
    }
}

// Folder = radium( Folder )

// import radium from 'radium'
// import Tree from "../../render-tree"
Folder.defaultProps = {

    label: 'Folder',
    onChange: a => a

};

Folder.propTypes = {

    // value : PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.array,
    // ]).isRequired,

    value: _react.PropTypes.func.isRequired,

    onChange: _react.PropTypes.func,

    label: _react.PropTypes.string,

    style: _react.PropTypes.object

};

var floatRight = {
    // float: 'right'
};

exports.default = Folder;