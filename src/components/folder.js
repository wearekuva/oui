import React from 'react'
import { Label } from 'dui.components'
import createTree from '../render-tree'
import primitives from '../primitive-components'
import { annotate } from '../annotate'


export default ({ metadata, propKey, value, onChange, onMetadataChange }) => {
    return <div>
        <Label value={propKey} onClick={_ => onMetadataChange({ open: !metadata.open })}/>
        { metadata.open ? createTree( value, primitives ) : null }
    </div>
}
