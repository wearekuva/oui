import ColorPicker from './colorpicker'
import { annotate } from '../../annotate'
import withChange from '../../controls/with-change-object'

export default ColorPicker
export let color = ( options ) => annotate({ ...options, control:withChange( ColorPicker ) })
