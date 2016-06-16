import panel from './imperative-api'
import ComboBox, { oneOf } from './controls/combobox'
import { color } from './common-controls/colorpicker'
import { annotate } from './annotate'
import withChange from './controls/with-change-object'

let oui = panel()

// oui.annotate = annotate
// oui.panel = panel
// oui.oneOf = oneOf

export default { oui, panel, annotate, oneOf, color }
// export { panel, oneOf }
// export oneOf
