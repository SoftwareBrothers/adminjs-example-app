import { Box, Header, MessageBox, MessageBoxProps, Text } from '@adminjs/design-system';
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
        <Text my="xl">With extra body</Text>
        {variants.map((variant) => (
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          <MessageBox key={variant} message={variant} variant={variant} mb="lg" onCloseClick={() => {}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga itaque quaerat quia eum ratione ipsum
            deleniti. Officiis nisi non necessitatibus laudantium blanditiis inventore.
          </MessageBox>
        ))}
      </Box>
    </Box>
  );
};

export default MessagesPage;
