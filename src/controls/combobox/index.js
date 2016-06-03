import ComboBox from './combobox'
import { annotate } from '../../annotate'
import withChange from '../with-change-object'

export default ComboBox
export let oneOf = ( options ) => annotate({ ...options, control:withChange( ComboBox ) })
