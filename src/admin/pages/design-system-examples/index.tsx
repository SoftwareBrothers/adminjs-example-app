import { Box, Header, Link, Placeholder, Text } from '@adminjs/design-system';
import React, { FC, lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('./blog-page.js'));
const ButtonsPage = lazy(() => import('./buttons-page.js'));
const FormPage = lazy(() => import('./form-page.js'));
const IconsPage = lazy(() => import('./icons-page.js'));
const IllustrationPage = lazy(() => import('./illustrations-page.js'));
const MessagesPage = lazy(() => import('./messages-page.js'));
const ModalPage = lazy(() => import('./modal-page.js'));
const TabsPage = lazy(() => import('./tabs-page.js'));
const TypographyPage = lazy(() => import('./typography-page.js'));

const DesignSystemPage: FC = () => {
  const STORYBOOK_URL = (window as any).AdminJS.env.STORYBOOK_URL;
  return (
    <>
      <Box variant="grey" id="storyook" data-css="design-system-examples">
        <Header as="a" href="#storyook">
          Storybook
        </Header>
        <Box variant="container">
          <Text>
            For more examples visit our Storybook
            <Link href={STORYBOOK_URL} ml="md">
              {STORYBOOK_URL}
            </Link>
          </Text>
        </Box>
      </Box>
      <Suspense fallback={<DesignSytemPagePlaceholder />}>
        <ButtonsPage />
        <TypographyPage />
        <ModalPage />
        <TabsPage />
        <MessagesPage />
        <IllustrationPage />
        <IconsPage />
        <FormPage />
        <BlogPage />
      </Suspense>
    </>
  );
};

const DesignSytemPagePlaceholder = () => (
  <>
    {Array.from({ length: 3 }).map((_, index) => (
      <Box variant="grey" key={index}>
        <Placeholder height={33} width={240} />
        <Box variant="container">
          <Placeholder />
        </Box>
      </Box>
    ))}
  </>
);

export default DesignSystemPage;
