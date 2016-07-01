'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */

// import radium from 'radium'


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _math = require('../../math');

var _styles = require('../styles');

var _shallowCompare = require('../../shallow-compare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    This component is an alternative way to control a number. It's generally used
    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
    although you can optionally supply either.
*/

class NumericStepper extends _preact2.default.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (0, _shallowCompare2.default)(this, nextProps, nextState);
    }

    render() {

        let { label, min, max, step, style } = this.props,
            validate = v => Math.round((0, _math.clamp)(v, min, max) * (1 / step)) / (1 / step),
            value = validate(this.props.value),
            onChange = e => {

            e.preventDefault();

            let value = parseFloat(e.currentTarget.value);

            if (!isNaN(value)) this.props.onChange(validate(value));
        };

        return _preact2.default.h(
            'div',
            { style: _extends({}, _styles.base, { display: 'flex', alignItems: 'baseline' }, style) },
            _preact2.default.h(
                'label',
                null,
                label
            ),
            _preact2.default.h(
                'style',
                null,
                `
                input[type=number] {
                    -moz-appearance:textfield;
                }

                input::-webkit-inner-spin-button,
                input::-webkit-outer-spin-button{
                    margin: 0;
                    -webkit-appearance: none;
                }
            `
            ),
            _preact2.default.h('input', _extends({ type: 'number' }, this.props, { style: defaultStyle, value: value, onInput: onChange, onChange: onChange, ref: ref => this.domRef = ref }))
        );
    }
}

// NumericStepper = radium( NumericStepper )

NumericStepper.propTypes = {

    /**
     *  A text label
     */
    label: _propTypes2.default.string,

    /**
     *  The value of the slider
     */
    value: _propTypes2.default.number.isRequired,

    /**
     *  Specifies the minimum value for the component
     */
    min: _propTypes2.default.number,

    /**
     *  Specifies the maximum value for the component
     */
    max: _propTypes2.default.number,

    /**
     * Specifies the intervals step
     */
    step: _propTypes2.default.number,

    /**
    * A callback triggered when the component updates
    */
    onChange: _propTypes2.default.func,

    /**
     * Optional component styling
     */
    style: _propTypes2.default.object

};

NumericStepper.defaultProps = {

    label: 'NumericStepper',
    min: 0,
    max: 100,
    style: { width: '100%' },
    step: 0.1,
    onChange: a => a

};

var defaultStyle = {
    fontFamily: 'inherit',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _styles.secondary.color,
    borderRadius: 2,
    backgroundColor: 'transparent',
    outline: 'none',
    textAlign: 'center',
    width: 30,
    fontSize: _styles.base.fontSize,
    // lineHeight: '15  px',
    color: _styles.base.color,
    // float:'right',
    marginLeft: 'auto',
    ":focus": {
        borderColor: _styles.highlight.color
    },
    ":hover": {
        borderColor: _styles.highlight.color
    }
};

exports.default = NumericStepper;