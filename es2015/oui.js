import panel from './imperative-api'
import { annotate } from './annotate'

import { color } from './controls/colorpicker'
import { combobox } from './controls/combobox'
import { graph } from './controls/graph'
import { xypad } from './controls/xypad'

let oui = panel()

export default { oui, panel, annotate, color, combobox, graph, xypad }
