import React from 'react'
import { Icon } from '@adminjs/design-system'

const Thumb = (props) => {
  const { record, property } = props
  const value = record.params[property.name]

  return(
    <span>{value ? <Icon icon="ThumbsUp" /> : <Icon icon="ThumbsDown" />}</span>
  )
}

export default Thumb
