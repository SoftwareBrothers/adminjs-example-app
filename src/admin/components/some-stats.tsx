import { Box, Button, H3, Placeholder } from '@adminjs/design-system';
import { ApiClient, NoticeMessage, useNotice, useTranslation } from 'adminjs';
import React, { useEffect, useState } from 'react';

const api = new ApiClient();

const NOTICE_MESSAGE: NoticeMessage = {
  message: 'SomeStats.message',
  type: 'success',
};

const SomeStats = () => {
  const [text, setText] = useState('');
  const addNotice = useNotice();
  const { translateComponent } = useTranslation();

  useEffect(() => {
    api.getPage({ pageName: 'Custom Page' }).then((res) => {
      setText(res.data.text);
    });
  });

  return (
    <Box variant="grey">
      <Box variant="white">
        <H3>{translateComponent('SomeStats.header')}</H3>
        <Box>
          <p>{translateComponent('SomeStats.introduction')}</p>
          {text?.length ? <pre>{text}</pre> : <Placeholder style={{ width: 400, height: 14 }} />}
          <p>{translateComponent('SomeStats.ending')}</p>
          <p>
            <Button mt="xl" onClick={() => addNotice(NOTICE_MESSAGE)}>
              {translateComponent('SomeStats.button')}
            </Button>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default SomeStats;
