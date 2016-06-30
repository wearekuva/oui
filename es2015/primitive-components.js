import Slider from './controls/slider'
import Checkbox from './controls/checkbox'
import TextInput from './controls/textinput'
import Folder from './controls/folder'
import Button from './controls/button'
import withChangeObject from './controls/with-change-object'
import withTree from './controls/with-Tree'

export default new Map([
  [ 'function', Button ],
  [ 'number', withChangeObject( Slider ) ],
  [ 'string', withChangeObject( TextInput )],
  [ 'boolean', withChangeObject( Checkbox )],
  [ 'object', withChangeObject( withTree( Folder ))]
])
