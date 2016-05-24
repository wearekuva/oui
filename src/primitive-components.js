import Slider from './controls/slider'
import Checkbox from './controls/checkbox'
import TextInput from './controls/textinput'
import Folder from './controls/folder'
import withChangeObject from './controls/with-change-object'

export default new Map([
  [ 'number', withChangeObject( Slider ) ],
  [ 'string', withChangeObject( TextInput )],
  [ 'boolean', withChangeObject( Checkbox )],
  [ 'object', withChangeObject( Folder )]
])
