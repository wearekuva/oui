'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../styles');

var _expandLess = require('../../icons/expand-less');

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = require('../../icons/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    The Folder is a container component that can be toggled opened and closed.
    To render it's children, it accepts an array or object of react elements.
*/

class Folder extends _preact.Component {

    constructor() {

        super();

        this.state = { open: false };

        this.toggleOpen = _ => this.setState({ open: !this.state.open });
    }

    render() {

        let { label, value, style } = this.props,
            { open } = this.state,
            Chevron = open ? _expandMore2.default : _expandLess2.default;

        return _preact2.default.h(
            'div',
            { style: _styles.base },
            _preact2.default.h(
                'div',
                { onClick: this.toggleOpen, style: { display: 'flex', alignItems: 'center' } },
                _preact2.default.h(
                    'label',
                    null,
                    label
                ),
                _preact2.default.h(Chevron, { style: { marginLeft: 'auto' } })
            ),
            open ? _preact2.default.h(
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
/** @jsx React.h */
Folder.defaultProps = {

    label: 'Folder',
    onChange: a => a

};

Folder.propTypes = {

    // value : PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.array,
    // ]).isRequired,

    value: _propTypes2.default.func.isRequired,

    onChange: _propTypes2.default.func,

    label: _propTypes2.default.string,

    style: _propTypes2.default.object

};

var floatRight = {
    // float: 'right'
};

exports.default = Folder;