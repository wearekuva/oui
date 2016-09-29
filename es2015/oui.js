import panel from './imperative-api'
import { annotate } from './annotate'
import datoui from './datoui'

import ColorPicker, { color } from './controls/colorpicker'
import ComboBox, { combobox } from './controls/combobox'
import Graph, { graph } from './controls/graph'
import NumericStepper, { numericstepper } from './controls/numericstepper'
import XYPad, { xypad } from './controls/xypad'

let oui = panel({label:'Master'})

const controls = { ColorPicker, ComboBox, Graph, NumericStepper, XYPad }

export default { oui, panel, datoui, annotate, color, combobox, graph, numericstepper, xypad, controls }
