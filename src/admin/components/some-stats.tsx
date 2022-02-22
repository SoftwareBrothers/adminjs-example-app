import React, { useEffect, useState } from 'react';
import { Box, H3, Placeholder, Button } from '@adminjs/design-system';
import { ApiClient, NoticeMessage, useNotice } from 'adminjs';

const api = new ApiClient();

const NOTICE_MESSAGE: NoticeMessage = {
  message: 'I was clicked',
  type: 'success',
};

const SomeStats = () => {
  const [text, setText] = useState('');
  const addNotice = useNotice();

  useEffect(() => {
    api.getPage({ pageName: 'Custom Page' }).then((res) => {
      setText(res.data.text);
    });
  });

  return (
    <Box variant="grey">
      <Box variant="white">
        <H3>Here you can specify a totally custom page</H3>
        <Box>
          <p>With some data fetched from the backend:</p>
          {text?.length ? <pre>{text}</pre> : <Placeholder style={{ width: 400, height: 14 }} />}
          <p>and other interactions like toast :)</p>
          <p>
            <Button mt="xl" onClick={() => addNotice(NOTICE_MESSAGE)}>
              Click me
            </Button>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default SomeStats;
