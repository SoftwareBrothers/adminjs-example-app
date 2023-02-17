import { Box, H6, Header, Icon } from '@adminjs/design-system';
import React from 'react';
import * as FeatherIcons from 'react-feather';

const IconsPage = () => {
  const icons = [];
  for (const [key] of Object.entries(FeatherIcons)) {
    icons.push(key);
  }
  const IconsSet = icons.map((iconName) => (
    <Box width="120px" height="120px" key={iconName} style={{ textAlign: 'center' }}>
      <H6>{iconName}</H6>
      <Icon icon={iconName} size={32} />
    </Box>
  ));
  return (
    <Box variant="grey">
      <Header>Icons</Header>
      <Box variant="white" flex flexWrap="wrap" justifyContent="center" style={{ gap: '16px' }}>
        {IconsSet}
      </Box>
    </Box>
  );
};

export default IconsPage;
