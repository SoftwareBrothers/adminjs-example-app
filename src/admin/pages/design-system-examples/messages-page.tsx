import { Box, Header, MessageBox, MessageBoxProps } from '@adminjs/design-system';
import React, { FC } from 'react';

const MessagesPage: FC = () => {
  const variants: MessageBoxProps['variant'][] = ['info', 'danger', 'success', 'warning'];

  return (
    <Box variant="grey" id="modal">
      <Header as="a" href="#modal">
        Messages
      </Header>
      <Box variant="container">
        {variants.map((variant) => (
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          <MessageBox key={variant} message={variant} variant={variant} mb="lg" onCloseClick={() => {}} />
        ))}
      </Box>
    </Box>
  );
};

export default MessagesPage;
