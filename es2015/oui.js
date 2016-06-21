import panel from './imperative-api'
import ComboBox, { oneOf } from './controls/combobox'
import { color } from './controls/colorpicker'
import { annotate } from './annotate'

let oui = panel()

export default { oui, panel, annotate, oneOf, color }
