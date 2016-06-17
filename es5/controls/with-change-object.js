'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                      This higher order component modifies the default `onChange( change )` handle by
                                                                                                                                                                                                                                                                      passing back the `change` as a change object `{ [id]:change }` that indicates
                                                                                                                                                                                                                                                                      the slot. This makes it easy to reconcile what changed in the ui without having
                                                                                                                                                                                                                                                                      to have unneccesary references directly in components.
                                                                                                                                                                                                                                                                  */

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Comp => {

    class WrappedComponent extends Comp {

        constructor() {

            super();

            this.onChildChange = change => this.props.onChange({ [this.props.id]: change });
        }

        render() {

            return _preactCompat2.default.createElement(Comp, _extends({}, this.props, { 'class': 'oui-control', onChange: this.onChildChange }));
        }
    }

    // WrappedComponent.name = 'Wrapped'+Comp.name

    WrappedComponent.propTypes = {

        onChange: _preactCompat.PropTypes.func.isRequired,

        id: _preactCompat.PropTypes.string.isRequired,

        value: Comp.propTypes.value

    };

    return WrappedComponent;
};