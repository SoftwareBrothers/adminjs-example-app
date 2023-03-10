import { Box, Button, H3, Placeholder, Text } from '@adminjs/design-system';
import { ApiClient, NoticeMessage, useNotice, useTranslation } from 'adminjs';
import React, { useEffect, useState } from 'react';

const api = new ApiClient();

const NOTICE_MESSAGE: NoticeMessage = {
  message: 'CustomPage.message',
  type: 'success',
};

const CustomPage = () => {
  const [text, setText] = useState<string>();
  const addNotice = useNotice();
  const { tc } = useTranslation();

  useEffect(() => {
    api.getPage<{ text: string }>({ pageName: 'Custom page' }).then((res) => {
      setText(res.data.text);
    });
  }, []);

  return (
    <Box variant="grey">
      <Box variant="white">
        <H3>{tc('CustomPage.header')}</H3>
        <Box flex flexDirection="column" style={{ gap: '1rem' }}>
          <Text>{tc('CustomPage.introduction')}</Text>
          {text ? JSON.stringify(text, null, 2) : <Placeholder style={{ width: 400, height: 14 }} />}
          <Text>{tc('CustomPage.ending')}</Text>
        </Box>
        <Button mt="xl" onClick={() => addNotice(NOTICE_MESSAGE)}>
          {tc('CustomPage.button')}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomPage;
