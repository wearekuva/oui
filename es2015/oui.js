import panel from './imperative-api'
import annotate from './annotate'

import { color } from './controls/colorpicker'
import { combobox } from './controls/combobox'

let oui = panel()
// p.panel = panel
// p.annotate = annotate
export default { oui, panel, annotate, controls:{ color, combo }}
