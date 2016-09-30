import Button from './button'
import { annotate } from '../../annotate'

export default Button
export let button = (options) => annotate({ ...options, control: Button })
