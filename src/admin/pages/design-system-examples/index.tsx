import { Box, Placeholder } from '@adminjs/design-system';
import React, { FC, lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('./blog-page'));
const ButtonsPage = lazy(() => import('./buttons-page'));
const FormPage = lazy(() => import('./form-page'));
const IconsPage = lazy(() => import('./icons-page'));
const IllustrationPage = lazy(() => import('./illustrations-page'));
const ModalPage = lazy(() => import('./modal-page'));
const TabsPage = lazy(() => import('./tabs-page'));
const TypographyPage = lazy(() => import('./typography-page'));

const DesignSystemPage: FC = () => (
  <Suspense fallback={<DesignSytemPagePlaceholder />}>
    <ButtonsPage />
    <TypographyPage />
    <ModalPage />
    <TabsPage />
    <IconsPage />
    <IllustrationPage />
    <FormPage />
    <BlogPage />
  </Suspense>
);

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
