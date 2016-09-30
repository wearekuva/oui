import panel from './imperative-api'
import { annotate } from './annotate'
import datoui from './datoui'

import ColorPicker, { color } from './controls/colorpicker'
import ComboBox, { combobox } from './controls/combobox'
import Graph, { graph } from './controls/graph'
import NumericStepper, { numericstepper } from './controls/numericstepper'
import XYPad, { xypad } from './controls/xypad'
import Button from './controls/button'
import Checkbox from './controls/checkbox'
import TextInput from './controls/button'

let oui = panel({label: 'Master'})

const controls = {ColorPicker, ComboBox, Graph, NumericStepper, XYPad, Button, Checkbox, TextInput}

export default {oui, panel, datoui, annotate, color, combobox, graph, numericstepper, xypad, controls}
