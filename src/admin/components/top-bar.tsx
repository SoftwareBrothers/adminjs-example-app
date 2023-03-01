import { Box, Button, Icon } from '@adminjs/design-system';
import React from 'react';

const TopBar = () => (
  <Box flex flexGrow={1} justifyContent="end" alignItems="center">
    <Button color="text" as="a" href="https://adminjs.page.link/slack" target="_blank">
      <Icon icon="Slack" />
      Slack
    </Button>
    <Button color="text" as="a" href="https://github.com/SoftwareBrothers/adminjs/issues" target="_blank">
      <Icon icon="GitHub" />
      GitHub
    </Button>
    <Button color="text" as="a" href="https://docs.adminjs.co" target="_blank">
      <Icon icon="BookOpen" />
      Documentation
    </Button>
  </Box>
);

export { TopBar };
export default TopBar;
