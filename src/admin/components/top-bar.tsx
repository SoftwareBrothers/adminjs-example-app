import { Box, Button, Icon } from '@adminjs/design-system';
import React, { FC } from 'react';

const TopBar: FC = () => {
  const GITHUB_URL = (window as any).AdminJS.env.GITHUB_URL;
  const SLACK_URL = (window as any).AdminJS.env.SLACK_URL;
  const DOCUMENTATION_URL = (window as any).AdminJS.env.DOCUMENTATION_URL;

  return (
    <Box flex flexGrow={1} justifyContent="end" alignItems="center">
      <Button color="text" as="a" href={SLACK_URL} target="_blank">
        <Icon icon="Slack" />
        Slack
      </Button>
      <Button color="text" as="a" href={GITHUB_URL} target="_blank">
        <Icon icon="GitHub" />
        GitHub
      </Button>
      <Button color="text" as="a" href={DOCUMENTATION_URL} target="_blank">
        <Icon icon="BookOpen" />
        Documentation
      </Button>
    </Box>
  );
};

export { TopBar };
export default TopBar;
