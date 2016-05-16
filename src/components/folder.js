// import React from 'react'
// //import Label from 'dui.components/components/label'
// import createTree from '../render-tree'
// import primitives from '../primitive-components'
// import { annotate } from '../annotate'
// import merge from 'deepmerge'
//
//
// export default ({ open, label, value, onChange, onMetadataChange }) => {
//     return <div>
//         <label onClick={_ => onMetadataChange({ open: !open })}>{ label }</label>
//         { open ? createTree( value, primitives, ( key, change ) => onChange(merge( value, { [key] : change }))) : null }
//     </div>
// }
