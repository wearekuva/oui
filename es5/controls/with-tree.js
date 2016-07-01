'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                      The `core-controllers` Folder component generates it's children using a function
                                                                                                                                                                                                                                                                      passed in it's props. This is only called when it's open meaning that the whole
                                                                                                                                                                                                                                                                      render tree is lazily instantiated, and only as much as neccesary.
                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      This Component wraps the `core-controllers/Folder` by providing the default
                                                                                                                                                                                                                                                                      `render-tree` function to generate the render list. Doing this in it's own
                                                                                                                                                                                                                                                                      component rather than directly on the Folder component itself means we can
                                                                                                                                                                                                                                                                      normalize the api in 'render-tree'
                                                                                                                                                                                                                                                                  */
/** @jsx React.h */


var _renderTree = require('../render-tree');

var _renderTree2 = _interopRequireDefault(_renderTree);

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = FolderComponent => {

    // let style = {
    //     paddingBottom: '0.5em',
    //     paddingTop: '0.5em',
    //     borderBottom: '1px solid rgb( 230, 230, 230 )'
    // }

    class WrappedComponent extends FolderComponent {

        constructor() {

            super();
            this.tree = _ => (0, _renderTree2.default)(this.props.value, this.props.onChange);
        }

        render() {

            return _preact2.default.h(FolderComponent, _extends({}, this.props, { value: this.tree }));
        }
    }

    WrappedComponent.propTypes = {

        value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,

        onChange: _propTypes2.default.func,

        label: _propTypes2.default.string,

        style: _propTypes2.default.object

    };

    return WrappedComponent;
};