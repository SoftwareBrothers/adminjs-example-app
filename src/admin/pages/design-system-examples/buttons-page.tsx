import { Box, Button, Header, Text } from '@adminjs/design-system';
import React, { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren & { title: string }> = ({ children, title }) => (
  <Box mb="xl">
    <Text mb="md">{title}</Text>
    <Box flex flexDirection="row" alignItems="center" style={{ gap: 16 }}>
      {children}
    </Box>
  </Box>
);

const colors = ['primary', 'secondary', 'success', 'info', 'danger', 'text'] as const;

const ButtonsPage = () => (
  <Box variant="grey" id="buttons">
    <Header as="a" href="#buttons">
      Buttons
    </Header>
    <Box variant="white">
      <Wrapper title="Text (default)">
        {colors.map((color) => (
          <Button key={color} variant="text" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Text rounded">
        {colors.map((color) => (
          <Button key={color} variant="text" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Contained">
        {colors.map((color) => (
          <Button key={color} variant="contained" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Contained rounded">
        {colors.map((color) => (
          <Button key={color} variant="contained" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Outlined">
        {colors.map((color) => (
          <Button key={color} variant="outlined" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Outlined rounded">
        {colors.map((color) => (
          <Button key={color} variant="outlined" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Light">
        {colors.map((color) => (
          <Button key={color} variant="light" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Light rounded">
        {colors.map((color) => (
          <Button key={color} variant="light" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Small">
        {colors.map((color) => (
          <Button key={color} size="sm" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Medium (default)">
        {colors.map((color) => (
          <Button key={color} color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Large">
        {colors.map((color) => (
          <Button key={color} size="lg" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Rounded">
        {colors.map((color) => (
          <Button key={color} rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
    </Box>
  </Box>
);

export default ButtonsPage;
