'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../controls/styles');

var _math = require('../../math');

var _warning = require('../../controls/utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultStyle = {
    nonScalingStroke: {
        vectorEffect: 'non-scaling-stroke',
        shapeRendering: 'geometricPrecision'
    },
    rect: {
        fill: 'none',
        strokeWidth: 1,
        stroke: _styles.secondary.color
    }
};

/**
This is a read only component that visualises an array of numbers as a line graph.
entries are plotted along the X axis with their value the Y axis. The domain of
the graph can beset using the `min` and `max` properties, however if none are
supplied, they're calculated using the inherent minimum and maximum values from
the suplied data.

Handy for plotting functions, visualising sound information and graphing general data
*/

class Graph extends _react2.default.Component {

    render() {

        let { value, label, style, min, max, fill } = this.props;

        (0, _warning2.default)(value.length <= 1, "warning: The `graph` component expects and array of more than 1 number. Any less will result in an empty graph.");

        /**
         *  If no domain is supplied, calculate based on the bounds
         *  of the `value` data
         */

        min = min !== undefined ? min : Math.min(...value);
        max = max !== undefined ? max : Math.max(...value);

        /*
            The data is rendered using a SVG Polyine which expects an array of `x`
            `y` values. Here we fill in the missing `y` values
        */

        let value2D = [],
            length = value.length,
            n,
            interval = 100 / (length - 1);

        for (let i = 0; i < length; i++) {
            n = value[i];
            value2D.push(String(i * interval));
            value2D.push(String((0, _math.map)(n, min, max, 100, 0)));
        }

        /*
            If the graph is to be filled in, we need to create additional values at
            the start and end of the sequence.
        */

        if (fill) {
            value2D = ['0', '100'].concat(value2D, ['100', '100']);
        }

        /*
            If our domain is degenerate, then don't bother rendering the polyline
        */

        return _react2.default.createElement(
            'div',
            { style: _styles.base },
            label,
            _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(
                    'svg',
                    { style: _styles.base, width: '100%', height: '100%', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
                    _react2.default.createElement('rect', { style: _extends({}, defaultStyle.rect, defaultStyle.nonScalingStroke), width: '100%', height: '100%' }),
                    min < max ? _react2.default.createElement('polyline', { style: defaultStyle.nonScalingStroke, fill: fill ? _styles.highlight.color : 'none', stroke: _styles.highlight.color, points: value2D }) : null
                )
            )
        );
    }
}

let arrayLikeStructures = [_react.PropTypes.arrayOf(_react.PropTypes.number), _react.PropTypes.instanceOf(Int8Array), _react.PropTypes.instanceOf(Uint8Array), _react.PropTypes.instanceOf(Uint8ClampedArray), _react.PropTypes.instanceOf(Int16Array), _react.PropTypes.instanceOf(Uint16Array), _react.PropTypes.instanceOf(Int32Array), _react.PropTypes.instanceOf(Uint32Array), _react.PropTypes.instanceOf(Float32Array), _react.PropTypes.instanceOf(Float64Array)];

Graph.propTypes = {

    /**
     * A text label
     */
    label: _react2.default.PropTypes.string,

    /**
     * An array of numerical data
     */
    value: _react.PropTypes.oneOfType(arrayLikeStructures).isRequired,

    /**
     * Defines the minimum range of the graph.
     */
    min: _react.PropTypes.number,

    /**
     * Defines the maximum range of the graph.
     */
    max: _react.PropTypes.number,

    /**
     * If true, the graph will be a solid color
     */
    fill: _react.PropTypes.bool,

    /**
     * Optional component styling
     */
    style: _react.PropTypes.object

};

Graph.defaultProps = {

    fill: false,
    label: 'Graph',
    value: [],
    style: { width: '100%', height: 150 }

};

exports.default = Graph;