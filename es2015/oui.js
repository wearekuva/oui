import panel from './imperative-api'
import annotate from './annotate'

let p = panel()
p.panel = panel
p.annotate = annotate
export default p
