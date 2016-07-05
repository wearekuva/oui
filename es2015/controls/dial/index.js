import Dial from './dial'
import { annotate } from '../../annotate'
import withChange from '../with-change-object'

export default Dial
export let dial = ( options ) => annotate({ ...options, control:withChange( Dial ) })
