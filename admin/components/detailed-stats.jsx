import React from 'react'
import { Box, H5, Text, Drawer, DrawerContent, ActionHeader } from 'admin-bro'


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