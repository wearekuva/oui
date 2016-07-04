import panel from './imperative-api'
import { annotate } from './annotate'

import { color } from './controls/colorpicker'
import { combobox } from './controls/combobox'

let oui = panel()
export default { oui, panel, annotate, color, combobox }
