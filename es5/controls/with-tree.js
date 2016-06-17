"use strict";

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

var _renderTree = require("../render-tree");

var _renderTree2 = _interopRequireDefault(_renderTree);

var _preactCompat = require("preact-compat");

var _preactCompat2 = _interopRequireDefault(_preactCompat);

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

            return _preactCompat2.default.createElement(FolderComponent, _extends({}, this.props, { value: this.tree }));
        }
    }

    WrappedComponent.propTypes = {

        value: _preactCompat.PropTypes.oneOfType([_preactCompat.PropTypes.object, _preactCompat.PropTypes.array]).isRequired,

        onChange: _preactCompat.PropTypes.func,

        label: _preactCompat.PropTypes.string,

        style: _preactCompat.PropTypes.object

    };

    return WrappedComponent;
};