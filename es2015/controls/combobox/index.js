import ComboBox from './combobox'
import { annotate } from '../../annotate'
import withChange from '../with-change-object'

let control = withChange( ComboBox )
export default control
export let combobox = ( options ) => annotate({ ...options, control })
