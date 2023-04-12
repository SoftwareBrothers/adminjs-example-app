import { Box, Button, H3, Link, Placeholder, Text } from '@adminjs/design-system';
import { ApiClient, useNotice, useTranslation } from 'adminjs';
import React, { FC, useEffect, useState } from 'react';

const api = new ApiClient();

type ApiGetPageResponse = { text: string };

const CustomPage: FC = () => {
  const [text, setText] = useState<string>();
  const addNotice = useNotice();
  const {
    tc,
    tm,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    api.getPage<ApiGetPageResponse>({ pageName: 'customPage' }).then((res) => {
      setText(tm(res.data.text, { defaultValue: res.data.text }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const sendSimpleNotice = () =>
    addNotice({
      message: 'CustomPage.message',
      type: 'success',
    });

  const sendTranslatedNotice = () =>
    addNotice({
      message: 'CustomPage.messageWithInterpolation',
      options: {
        someParams: ['param 1', 'param2'].join(', '),
      },
      body: (
        <>
          {tm('CustomPage.message')} <Link>{tc('CustomPage.button')}</Link>
        </>
      ),
    } as any);

  return (
    <Box variant="transparent">
      <Box variant="container">
        <H3>{tc('CustomPage.header')}</H3>
        <Box flex flexDirection="column" style={{ gap: '1rem' }}>
          <Text>{tc('CustomPage.introduction')}</Text>
          {text ? JSON.stringify(text, null, 2) : <Placeholder style={{ width: 400, height: 14 }} />}
          <Text>{tc('CustomPage.ending')}</Text>
        </Box>
        <Box flex style={{ gap: 16 }}>
          <Button variant="contained" mt="xl" onClick={sendSimpleNotice}>
            {tc('CustomPage.button')}
          </Button>
          <Button variant="contained" mt="xl" onClick={sendTranslatedNotice}>
            {tc('CustomPage.noticeWithInterpolation')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomPage;
