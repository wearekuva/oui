import Slider from 'core-controllers/es5/slider'
import Checkbox from 'core-controllers/es5/checkbox'
import TextInput from 'core-controllers/es5/textinput'
import WrappedFolder from './components/WrappedFolder'
import Folder from 'core-controllers/es5/folder'
import WrappedComponent from './components/WrappedComponent'



export default new Map([
  [ 'number', WrappedComponent( Slider ) ],
  [ 'string', WrappedComponent( TextInput )],
  [ 'boolean', WrappedComponent( Checkbox )],
  [ 'object', WrappedComponent( WrappedFolder( Folder ))]
])
