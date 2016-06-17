'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _numericstepper = require('../../controls/numericstepper');

var _numericstepper2 = _interopRequireDefault(_numericstepper);

var _math = require('../../math');

var _throttle = require('../../controls/utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _styles = require('../../controls/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

    This component provides a generic way of controlling 2d numerical quantities such as
    vectors. It's a staple of traditional A/V style applications as a way to
    play with multiple inputs via one interaction. Useful for positional values.
    In this case the values signature is `{x:Number, y:Number}`.

*/

class XYPad extends _preactCompat2.default.Component {

    constructor() {

        super();

        this.state = { drag: false, open: true };

        let computeXYfromMouseEvent = (e, bounds) => ({
            x: (0, _math.map)(e.clientX === undefined ? e.touches[0].clientX : e.clientX, bounds.left, bounds.right, this.props.min.x, this.props.max.x),
            y: (0, _math.map)(e.clientY === undefined ? e.touches[0].clientY : e.clientY, bounds.top, bounds.bottom, this.props.min.y, this.props.max.y)
        });

        this.onMouseDown = e => {

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
            this.props.onChange(computeXYfromMouseEvent(e, rect));
        };

        this.onMouseMove = (0, _throttle2.default)(e => {
            if (this.state.drag) this.props.onChange(computeXYfromMouseEvent(e, this.state.rect));
        });

        this.onTouchMove = e => {
            e.preventDefault();
            if (this.state.drag) this.props.onChange(computeXYfromMouseEvent(e, this.state.rect));
        };

        this.onMouseUp = e => {
            this.setState({ drag: false });
        };

        this.onXChange = x => this.props.onChange(_extends({}, this.props.value, { x }));

        this.onYChange = y => this.props.onChange(_extends({}, this.props.value, { y }));
    }

    /*
        We're deliberatley not performing any comparison here. This is because
        the props passed in would have to be a copy of the original value, which
        currently isn't the case
    */
    // shouldComponentUpdate( nextProps, nextState ){}

    render() {

        let { value, label, onChange, style } = this.props,
            { open } = this.state,
            { x, y } = value;

        let min = _extends({}, this.props.min, XYPad.min),
            max = _extends({}, this.props.max, XYPad.max);

        let xVis = (0, _math.map)(x, min.x, max.x, 0, 100) + '%',
            yVis = (0, _math.map)(y, min.y, max.y, 0, 100) + '%';

        return _preactCompat2.default.createElement(
            'div',
            { style: _extends({}, _styles.base, { height: 'auto' }) },
            _preactCompat2.default.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                _preactCompat2.default.createElement(
                    'label',
                    { onClick: v => this.setState({ open: !open }) },
                    label
                ),
                _preactCompat2.default.createElement(
                    'div',
                    { style: { display: 'flex', marginLeft: 'auto' } },
                    _preactCompat2.default.createElement(_numericstepper2.default, { style: componentLabels, min: min.x, max: max.x, value: x, onChange: this.onXChange, label: 'X' }),
                    _preactCompat2.default.createElement(_numericstepper2.default, { style: componentLabels, min: min.y, max: max.y, value: y, onChange: this.onYChange, label: 'Y' })
                )
            ),
            open ? _preactCompat2.default.createElement(
                'svg',
                { width: '100%', height: '100%', xmlns: 'http://www.w3.org/2000/svg',
                    style: _extends({}, defaultStyle, style),
                    ref: ref => this.domRef = ref,
                    onMouseDown: this.onMouseDown,
                    onMouseMove: this.state.drag ? this.onMouseMove : null,
                    onMouseUp: this.onMouseUp,

                    onTouchStart: this.onMouseDown,
                    onTouchMove: this.onTouchMove,
                    onTouchEnd: this.onMouseUp },
                _preactCompat2.default.createElement('rect', { fill: 'none', stroke: _styles.secondary.color, strokeWidth: '1', width: '100%', height: '100%' }),
                _preactCompat2.default.createElement('line', { x1: xVis, x2: xVis, y1: 0, y2: '100%', style: _extends({}, defaultStyle, style, crisp) }),
                _preactCompat2.default.createElement('line', { x1: 0, x2: '100%', y1: yVis, y2: yVis, style: _extends({}, defaultStyle, style, crisp) }),
                _preactCompat2.default.createElement('circle', { r: 3, cx: xVis, cy: yVis, style: circle })
            ) : null
        );
    }
}

XYPad.propTypes = {

    /**
     * A text label
     */
    label: _preactCompat.PropTypes.string,

    /**
     *  The initial value of the component
     */
    value: _preactCompat.PropTypes.shape({ x: _preactCompat.PropTypes.number.isRequired, y: _preactCompat.PropTypes.number.isRequired }).isRequired,

    /**
     *  The minimum bounding range
     */
    min: _preactCompat.PropTypes.shape({ x: _preactCompat.PropTypes.number, y: _preactCompat.PropTypes.number }),

    /**
     *  The maximum bounding range
     */
    max: _preactCompat.PropTypes.shape({ x: _preactCompat.PropTypes.number, y: _preactCompat.PropTypes.number }),

    /**
     *  Called when the component updates
     */
    onChange: _preactCompat.PropTypes.func,

    /**
     * Optional component styling
     */
    style: _preactCompat.PropTypes.object

};

XYPad.defaultProps = {

    label: 'XYPad',
    style: { width: '100%', height: 150 },
    min: { x: 0, y: 0 },
    max: { x: 100, y: 100 },
    onChange: a => a

};

var defaultStyle = {
    display: 'block',
    cursor: 'default',
    stroke: _styles.secondary.color,
    strokeWidth: 1
};

var crisp = {
    shapeRendering: 'crispEdges'
};

var circle = {
    fill: _styles.secondary.color,
    stroke: 'none'
};

var componentLabels = { display: 'inline' };

exports.default = XYPad;