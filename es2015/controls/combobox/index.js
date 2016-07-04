import ComboBox from './combobox'
import { annotate } from '../../annotate'
import withChange from '../with-change-object'

export default ComboBox
export let combobox = ( options ) => annotate({ ...options, control:withChange( ComboBox ) })
