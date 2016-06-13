import React, { PropTypes } from 'react'
import { base, secondary, highlight } from '../../controls/styles'
import { map } from '../../math'
import warning from '../../controls/utils/warning'

 const defaultStyle = {
    nonScalingStroke: {
        vectorEffect:'non-scaling-stroke',
        shapeRendering:'geometricPrecision'
    },
    rect:{
        fill: 'none',
        strokeWidth: 1,
        stroke: secondary.color
    }
}

/**
This is a read only component that visualises an array of numbers as a line graph.
entries are plotted along the X axis with their value the Y axis. The domain of
the graph can beset using the `min` and `max` properties, however if none are
supplied, they're calculated using the inherent minimum and maximum values from
the suplied data.

Handy for plotting functions, visualising sound information and graphing general data
*/

class Graph extends React.Component{




    render(){

        let { value, label, style, min, max, fill } = this.props


        warning(
            value.length <= 1,
            "warning: The `graph` component expects and array of more than 1 number. Any less will result in an empty graph." )


        /**
         *  If no domain is supplied, calculate based on the bounds
         *  of the `value` data
         */

        min = min !== undefined ? min : Math.min( ...value )
        max = max !== undefined ? max : Math.max( ...value )



        /*
            The data is rendered using a SVG Polyine which expects an array of `x`
            `y` values. Here we fill in the missing `y` values
        */

        let value2D = [],
            length = value.length, n,
            interval = 100 / ( length - 1 )

        for( let i = 0 ; i < length ;i++ ){
            n = value[i]
            value2D.push( String( i * interval ))
            value2D.push( String( map( n, min, max, 100, 0 )))
        }


        /*
            If the graph is to be filled in, we need to create additional values at
            the start and end of the sequence.
        */

        if( fill ){
            value2D = [ '0', '100'].concat( value2D, [ '100', '100'])
        }


        /*
            If our domain is degenerate, then don't bother rendering the polyline
        */

        return <div style={base}>
            { label }
            <div style={ style }>
                <svg style={{ ...base, display:'block' }} width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <rect style={{ ...defaultStyle.rect, ...defaultStyle.nonScalingStroke }} width='100%' height='100%' />
                    { min < max ? <polyline style={defaultStyle.nonScalingStroke} fill={ fill ? highlight.color : 'none' } stroke={highlight.color} points={value2D} /> : null }
                </svg>
            </div>
        </div>
    }
}



let arrayLikeStructures = [
    PropTypes.arrayOf( PropTypes.number ),
    PropTypes.instanceOf( Int8Array ),
    PropTypes.instanceOf( Uint8Array ),
    PropTypes.instanceOf( Uint8ClampedArray ),
    PropTypes.instanceOf( Int16Array ),
    PropTypes.instanceOf( Uint16Array ),
    PropTypes.instanceOf( Int32Array ),
    PropTypes.instanceOf( Uint32Array ),
    PropTypes.instanceOf( Float32Array ),
    PropTypes.instanceOf( Float64Array )
]

Graph.propTypes = {


	/**
	 * A text label
	 */
	label: React.PropTypes.string,


    /**
     * An array of numerical data
     */
    value: PropTypes.oneOfType( arrayLikeStructures ).isRequired,


    /**
     * Defines the minimum range of the graph.
     */
    min : PropTypes.number,


    /**
     * Defines the maximum range of the graph.
     */
    max : PropTypes.number,


    /**
     * If true, the graph will be a solid color
     */
    fill: PropTypes.bool,


    /**
     * Optional component styling
     */
    style: PropTypes.object

}


Graph.defaultProps = {

    fill: false,
    label: 'Graph',
    value:[],
    style:{width:'100%',height:150}

}

export default Graph
