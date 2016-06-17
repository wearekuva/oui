'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import radium from 'radium'


var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _numericstepper = require('../numericstepper');

var _numericstepper2 = _interopRequireDefault(_numericstepper);

var _shallowCompare = require('../../shallow-compare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _math = require('../../math');

var _throttle = require('../utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    A classic numerical slider, useful for representing numbers within a bounded
    range. It also contains a `NumericalStepper` for displaying the text value
    and entering values directly.
*/

class Slider extends _preactCompat2.default.Component {

    constructor() {

        super();

        this.state = { drag: false, rect: null };

        this.validate = value => {

            let { onChange, min, max, step } = this.props;

            value = (0, _math.clamp)(value, min, max);
            value = Math.round(value * (1 / step)) / (1 / step);

            return value;
        };

        this.onNumericStepperChange = value => {
            this.props.onChange(this.validate(value));
        };

        /*
            Compute the numerical value from a touch/mouse event
        */

        let computeValuefromMouseEvent = (e, bounds) => (0, _math.map)(e.clientX === undefined ? e.touches[0].clientX : e.clientX, bounds.left, bounds.right, this.props.min, this.props.max);

        /*
            Computes the value on mouse/touch down and triggers an `onChange`
        */

        this.onMouseDown = e => {

            e.preventDefault();

            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round((0, _math.clamp)(v, min, max) * (1 / step)) / (1 / step);

            /*
                For performance reasons we pre calculate the bounding rect on
                mouse down, this means we don't need to do this on every mouse move
                event and therefore we avoid any layout thrashing.
                 The caveat is that any sizing changes that occur between mousedown
                will cause mean the cached boundingRect is invalid and causes incorrect
                results. However because of performance gains, this is acceptable
                behaviour as changes to size are expected to be rare enough
            */
            var rect = e.currentTarget.getBoundingClientRect();

            this.setState({ drag: true, rect });
            onChange(validate(computeValuefromMouseEvent(e, rect)));
        };

        /*
            On mouse/touch move, trigger an onChange event
        */

        this.onMouseMove = (0, _throttle2.default)(e => {
            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round((0, _math.clamp)(v, min, max) * (1 / step)) / (1 / step);

            onChange(validate(computeValuefromMouseEvent(e, this.state.rect)));
        });

        this.onTouchMove = (0, _throttle2.default)(e => {

            e.preventDefault();

            let { value, min, max, step, onChange } = this.props,
                validate = v => Math.round((0, _math.clamp)(v, min, max) * (1 / step)) / (1 / step);

            onChange(validate(computeValuefromMouseEvent(e, this.state.rect)));
        });

        /*
            changes the dragging state
        */

        this.onMouseUp = e => {
            this.setState({ drag: false });
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (0, _shallowCompare2.default)(this, nextProps, nextState);
    }

    componentDidUpdate(props, state) {
        if (this.state.drag && !state.drag) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('touchmove', this.onTouchMove);
            document.addEventListener('touchend', this.onMouseUp);
        } else if (!this.state.drag && state.drag) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('touchmove', this.onTouchMove);
            document.removeEventListener('touchend', this.onMouseUp);
        }
    }

    render() {

        let { value, label, min, max, step, onChange, includeStepper, style } = this.props,
            stepperProps = { value, label, min, max, step, onChange };

        let offsetPercentage = (0, _math.map)((0, _math.clamp)(value, min, max), min, max, 0, 100) + '%';
        value = this.validate(value);

        return _preactCompat2.default.createElement(
            'div',
            { style: _styles.base },
            includeStepper ? _preactCompat2.default.createElement(_numericstepper2.default, _extends({}, stepperProps, { onChange: this.onNumericStepperChange })) : null,
            _preactCompat2.default.createElement(
                'svg',
                { width: '100%', height: '1em',
                    style: defaultStyle,
                    onMouseDown: this.onMouseDown,
                    onTouchStart: this.onMouseDown },
                _preactCompat2.default.createElement('rect', { width: '100%', height: '100%', style: _extends({}, defaultStyle, backgroundBar, style.backgroundBar) }),
                _preactCompat2.default.createElement('rect', { width: '100%', height: '100%', style: _extends({}, defaultStyle, bar, style.bar), width: offsetPercentage }),
                _preactCompat2.default.createElement('circle', { cy: '50%', cx: offsetPercentage, r: '0.5em', style: _extends({}, defaultStyle, thumb, style.thumb) })
            )
        );
    }
}

// Slider = radium( Slider )

Slider.propTypes = {

    /**
     *  A text label
     */
    label: _preactCompat2.default.PropTypes.string,

    /**
     *  The value of the slider
     */
    value: _preactCompat2.default.PropTypes.number.isRequired,

    /**
     *  Specifies the minimum value for the component
     */
    min: _preactCompat2.default.PropTypes.number,

    /**
     *  Specifies the maximum value for the component
     */
    max: _preactCompat2.default.PropTypes.number,

    /**
     * Specifies the intervals step
     */
    step: _preactCompat2.default.PropTypes.number,

    /**
    * A callback triggered when the component updates
    */
    onChange: _preactCompat2.default.PropTypes.func,

    /**
     *  If false, the numeric stepper is not displayed
     */
    includeStepper: _preactCompat2.default.PropTypes.bool,

    /**
     * Optional component styling
     */
    style: _preactCompat2.default.PropTypes.object

};

Slider.defaultProps = {

    label: 'Slider',
    includeStepper: true,
    min: 0,
    max: 100,
    step: 1,
    onChange: a => a,
    style: { width: '100%' }

};

var defaultStyle = {
    display: 'block',
    overflow: 'visible',
    cursor: 'default',
    stroke: 'none',

    rx: 2,
    ry: 2
};

var thumb = {
    fill: 'none'
};

var backgroundBar = {
    fill: _styles.secondary.color
};

var bar = {
    fill: _styles.highlight.color
};

exports.default = Slider;