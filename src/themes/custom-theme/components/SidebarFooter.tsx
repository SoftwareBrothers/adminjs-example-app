import { Avatar, Box, SmallText, Title, Tooltip } from '@adminjs/design-system';
import { ReduxState, ViewHelpers, useTranslation } from 'adminjs';
import React from 'react';
import { useSelector } from 'react-redux';

const h = new ViewHelpers();

const SidebarFooter = () => {
  const session = useSelector((state: ReduxState) => state.session);
  const { title, email, avatarUrl } = session;
  const { tb } = useTranslation();

  if (!session) return null;

  return (
    <Box mt="lg" mb="md">
      <Box flex flexDirection="row" alignItems="center" px="xl" mb="lg">
        <Avatar src={avatarUrl} alt={email} mr="lg">
          {email.slice(0, 1).toUpperCase()}
        </Avatar>
        <Tooltip direction="right" title={tb('logout')}>
          <Box as="a" href={h.logoutUrl()}>
            <Title>{email}</Title>
            {title && <SmallText>{title}</SmallText>}
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SidebarFooter;
