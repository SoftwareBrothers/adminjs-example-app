import { Box, Header } from '@adminjs/design-system';
import React, { FC } from 'react';

import { ModalExample } from '../../components/design-system-examples/index.js';

const ModalPage: FC = () => (
  <Box variant="grey" id="modal">
    <Header as="a" href="#modal">
      Modal
    </Header>
    <Box variant="container">
      <ModalExample />
    </Box>
  </Box>
);

export default ModalPage;
