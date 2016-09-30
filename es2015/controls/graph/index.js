import Graph from './graph'
import { annotate } from '../../annotate'

export default Graph
export let graph = (options) => annotate({ ...options, control: Graph })
