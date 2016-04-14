import React from 'react'
import Button from 'core-controllers/components/button'

export default props => {

    let { value } = props

    return <Button { ...props } onClick={value} />

}
