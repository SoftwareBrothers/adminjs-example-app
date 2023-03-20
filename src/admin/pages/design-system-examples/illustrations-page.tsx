import { Box, Header, Illustration, Text } from '@adminjs/design-system';
import React, { FC } from 'react';

const variants = [
  'Accept',
  'Cup',
  'Bag',
  'Beware',
  'Notebook',
  'NotFound',
  'Padlock',
  'Photos',
  'Plug',
  'RocketNew',
  'Tags',
  'Folder',
  'Box',
  'Calendar',
  'Cancel',
  'Cards',
  'Clip',
  'Cloud',
  'Details',
  'Docs',
  'Drawer',
  'IdentityCard',
] as const;

const IllustrationPage: FC = () => (
  <Box variant="grey" id="illustrations">
    <Header as="a" href="#illustrations">
      Illustrations
    </Header>
    <Box variant="container" flex flexWrap="wrap" style={{ rowGap: 32 }}>
      {variants.map((variant) => (
        <Box key={variant} width={200} height={200} style={{ textAlign: 'center' }}>
          <Illustration variant={variant} />
          <Text>{variant}</Text>
        </Box>
      ))}
    </Box>
  </Box>
);

export default IllustrationPage;
