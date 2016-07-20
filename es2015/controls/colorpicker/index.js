import ColorPicker from './colorpicker'
import { annotate } from '../../annotate'
import withChange from '../../controls/with-change-object'

let control = withChange( ColorPicker )

export default control
export let color = ( options ) => annotate({ ...options, control })
