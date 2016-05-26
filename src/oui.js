import panel from './imperative-api'
import ComboBox from './controls/combobox'
import { annotate } from './annotate'
import withChange from './controls/with-change-object'

let oui = panel()

oui.annotate = annotate
oui.oneOf = options => annotate({ control:withChange( ComboBox ), options })

export default oui
