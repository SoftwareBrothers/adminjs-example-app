import React from 'react';
import { H5, Text, DrawerContent } from '@admin-bro/design-system';
import { ActionHeader, ActionProps } from 'admin-bro';

const DetailedStats: React.FC<ActionProps> = (props) => (
  <DrawerContent>
    <ActionHeader {...props} omitActions />
    <H5 mt="xxl">Custom action example</H5>
    <Text>Where you can do whatever you like...</Text>
  </DrawerContent>
);

export default DetailedStats;
