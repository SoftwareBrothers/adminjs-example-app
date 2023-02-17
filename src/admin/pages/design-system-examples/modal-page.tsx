import { Box, Header } from '@adminjs/design-system';
import React, { FC } from 'react';
import { ModalExample } from '../../components/design-system-examples';

const ModalPage: FC = () => (
  <Box variant="grey">
    <Header>Modal </Header>
    <Box variant="white">
      <ModalExample />
    </Box>
  </Box>
);

export default ModalPage;
