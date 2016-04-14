import Slider from 'core-controllers/components/slider'
import Checkbox from 'core-controllers/components/checkbox'
import TextInput from 'core-controllers/components/textinput'
import WrappedButton from './components/WrappedButton.jsx'
import WrappedFolder from './components/WrappedFolder.jsx'


export default {
  number: Slider,
  string: TextInput,
  boolean: Checkbox,
  function: WrappedButton,
  object: WrappedFolder,
}
