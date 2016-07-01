'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx React.h */


var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

var _preactSvg = require('preact-svg');

var _preactSvg2 = _interopRequireDefault(_preactSvg);

var _propTypes = require('propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

class Graph extends _preact2.default.Component {

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

        return _preact2.default.h(
            'div',
            { style: _styles.base },
            label,
            _preact2.default.h(
                'div',
                { style: style },
                _preact2.default.h(
                    _preactSvg2.default,
                    { style: _extends({}, _styles.base, { display: 'block' }), width: '100%', height: '100%', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
                    _preact2.default.h('rect', { style: _extends({}, defaultStyle.rect, defaultStyle.nonScalingStroke), width: '100%', height: '100%' }),
                    min < max ? _preact2.default.h('polyline', { style: defaultStyle.nonScalingStroke, fill: fill ? _styles.highlight.color : 'none', stroke: _styles.highlight.color, points: value2D }) : null
                )
            )
        );
    }
}

let arrayLikeStructures = [_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.instanceOf(Int8Array), _propTypes2.default.instanceOf(Uint8Array), _propTypes2.default.instanceOf(Uint8ClampedArray), _propTypes2.default.instanceOf(Int16Array), _propTypes2.default.instanceOf(Uint16Array), _propTypes2.default.instanceOf(Int32Array), _propTypes2.default.instanceOf(Uint32Array), _propTypes2.default.instanceOf(Float32Array), _propTypes2.default.instanceOf(Float64Array)];

Graph.propTypes = {

    /**
     * A text label
     */
    label: _propTypes2.default.string,

    /**
     * An array of numerical data
     */
    value: _propTypes2.default.oneOfType(arrayLikeStructures).isRequired,

    /**
     * Defines the minimum range of the graph.
     */
    min: _propTypes2.default.number,

    /**
     * Defines the maximum range of the graph.
     */
    max: _propTypes2.default.number,

    /**
     * If true, the graph will be a solid color
     */
    fill: _propTypes2.default.bool,

    /**
     * Optional component styling
     */
    style: _propTypes2.default.object

};

Graph.defaultProps = {

    fill: false,
    label: 'Graph',
    value: [],
    style: { width: '100%', height: 150 }

};

exports.default = Graph;