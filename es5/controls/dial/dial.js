'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _numericstepper = require('../numericstepper');

var _numericstepper2 = _interopRequireDefault(_numericstepper);

var _throttle = require('../utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _styles = require('../styles');

var _math = require('math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

    Another numerical control, that provides similar functionality to the
    [Slider](#Slider) but with different layout and more suited for touch
    enabled devices.

*/

/** @jsx React.h */
class Dial extends _preact.Component {

    constructor() {

        super();

        this.state = { drag: false };

        this.onMouseDown = e => {
            e.preventDefault();
            this.setState({ drag: true, value: this.props.value, dragValue: e.clientY == undefined ? e.touches[0].clientY : e.clientY });
        };

        this.onMouseUp = e => {
            this.setState({ drag: false });
        };

        this.onMouseMove = (0, _throttle2.default)(e => {
            e.preventDefault();
            let y = e.clientY == undefined ? e.touches[0].clientY : e.clientY;
            this.props.onChange(this.state.value + (y - this.state.dragValue) * -0.1);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }

    componentDidUpdate(props, state) {
        if (this.state.drag && !state.drag) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('touchmove', this.onMouseMove);
            document.addEventListener('touchend', this.onMouseUp);
        } else if (!this.state.drag && state.drag) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('touchmove', this.onMouseMove);
            document.removeEventListener('touchend', this.onMouseUp);
        }
    }

    render() {

        let { label, value, min, max, step, style, onChange } = this.props,
            stepperProps = { label, value, min, max, onChange };

        value = (0, _math.clamp)(value, min, max);
        value = Math.round(value * (1 / step)) / (1 / step);
        value = (0, _math.normalize)(value, min, max);

        let radius = style.width * 0.5,
            range = 0.8,
            circumference = 2.0 * Math.PI * radius,
            a = [circumference * value * range, circumference].join(' '),
            b = [circumference, circumference].join(' '),
            transform = 'rotate(' + String((1.0 - range) * 0.5 * 360 + 90) + 'deg )';

        /*
            Using a styling trick with the stroke-dasharray property to create
            the dial outline.
             See https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/
            for future reference
        */

        return _preact2.default.h(
            'div',
            { style: [_styles.base, style, { height: 'auto' }] },
            _preact2.default.h(_numericstepper2.default, stepperProps),
            _preact2.default.h(
                'svg',
                { style: [svgStyle, { transform }], width: style.width, height: style.width, xmlns: 'http://www.w3.org/2000/svg',
                    ref: ref => this.domRef = ref,
                    onMouseDown: this.onMouseDown,
                    onTouchStart: this.onMouseDown },
                _preact2.default.h('circle', { r: radius, cx: radius, cy: radius, strokeDasharray: b, fill: 'transparent', stroke: _styles.secondary.color, strokeWidth: radius }),
                value > 0 ? _preact2.default.h('circle', { r: radius, cx: radius, cy: radius, strokeDasharray: a, fill: 'transparent', stroke: _styles.highlight.color, strokeWidth: radius }) : null
            )
        );
    }
}

Dial = (0, _radium2.default)(Dial);

Dial.propTypes = {

    /**
     *  A text label
     */
    label: _propTypes2.default.string,

    /**
     *  The default value
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

Dial.defaultProps = {

    label: 'Dial',
    min: 0,
    max: 10,
    value: 5,
    step: 0.1,
    onChange: a => a,
    style: { width: 100, display: 'inline-block' }

};

var svgStyle = {
    cursor: 'default',
    borderRadius: "50%"
};

exports.default = Dial;