import { Box, Button, Header, Text } from '@adminjs/design-system';
import React from 'react';

const Wrapper = ({ children, title }) => (
  <Box mb="xl">
    <Text mb="md">{title}</Text>
    <Box flex flexDirection="row" alignItems="center" style={{ gap: 16 }}>
      {children}
    </Box>
  </Box>
);

const colors = ['primary', 'secondary', 'success', 'info', 'danger'] as const;

const ButtonsPage = () => (
  <Box variant="grey">
    <Header>Buttons</Header>
    <Box variant="white">
      <Wrapper title="Contained">
        {colors.map((color) => (
          <Button variant="contained" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Contained rounded">
        {colors.map((color) => (
          <Button variant="contained" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Outlined">
        {colors.map((color) => (
          <Button variant="outlined" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Outlined rounded">
        {colors.map((color) => (
          <Button variant="outlined" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Text (default)">
        {colors.map((color) => (
          <Button variant="text" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Text rounded">
        {colors.map((color) => (
          <Button variant="text" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Light">
        {colors.map((color) => (
          <Button variant="light" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Light rounded">
        {colors.map((color) => (
          <Button variant="light" rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Small">
        {colors.map((color) => (
          <Button size="sm" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Medium (default)">
        {colors.map((color) => (
          <Button color={color}>{color}</Button>
        ))}
      </Wrapper>
      <Wrapper title="Large">
        {colors.map((color) => (
          <Button size="lg" color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
      <Wrapper title="Rounded">
        {colors.map((color) => (
          <Button rounded color={color}>
            {color}
          </Button>
        ))}
      </Wrapper>
    </Box>
  </Box>
);

export default ButtonsPage;
