import React from 'react'
import Button from 'core-controllers/es5/button'

export default props => {

    let { value } = props

    return <Button { ...props } onClick={value} />

}
