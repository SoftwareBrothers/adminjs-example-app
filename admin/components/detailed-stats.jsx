import React from 'react'
import { H5, Text, DrawerContent } from '@admin-bro/design-system'
import { ActionHeader } from 'admin-bro'


const DetailedStats = (props) => {
  return (
    <DrawerContent>
      <ActionHeader {...props} omitActions={true} />
      <H5 mt="xxl">Custom action example</H5>
      <Text>Where you can do whatever you like...</Text>
    </DrawerContent>
  )
}

export default DetailedStats