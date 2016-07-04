import panel from './imperative-api'
import { annotate } from './annotate'

import { color } from './controls/colorpicker'
import { combobox } from './controls/combobox'

export let oui = panel()
// p.panel = panel
// p.annotate = annotate
export default { panel, annotate, color, combobox }
