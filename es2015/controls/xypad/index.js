import XYPad from './xypad'
import { annotate } from '../../annotate'
import withChange from '../../controls/with-change-object'

export default XYPad
export let xypad = ( options ) => annotate({ ...options, control:withChange( XYPad ) })
