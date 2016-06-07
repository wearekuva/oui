import Graph from './graph'
import { annotate } from '../../annotate'
import withChange from '../../controls/with-change-object'

export default Graph
export let graph = ( options ) => annotate({ ...options, control:withChange( Graph ) })
