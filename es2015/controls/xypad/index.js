import XYPad from './xypad'
import { annotate } from '../../annotate'
import withChange from '../../controls/with-change-object'

let control = withChange(XYPad)
export default control
export let xypad = (options) => annotate({...options, control})
