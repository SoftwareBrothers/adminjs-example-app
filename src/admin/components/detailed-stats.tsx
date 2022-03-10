import React from 'react';
import { H5, Text, DrawerContent } from '@adminjs/design-system';
import { ActionHeader, ActionHeaderProps } from 'adminjs';

const DetailedStats = (props: ActionHeaderProps) => {
  return (
    <DrawerContent>
      <ActionHeader {...props} omitActions={true} />
      <H5 mt="xxl">Custom action example</H5>
      <Text>Where you can do whatever you like...</Text>
    </DrawerContent>
  );
};

export default DetailedStats;
