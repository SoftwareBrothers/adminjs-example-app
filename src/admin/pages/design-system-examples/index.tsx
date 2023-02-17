import React, { FC } from 'react';
import BlogPage from './blog-page';
import ButtonsPage from './buttons-page';
import FormPage from './form-page';
import IconsPage from './icons-page';
import IllustrationPage from './illustrations-page';
import ModalPage from './modal-page';
import TabsPage from './tabs-page';
import TypographyPage from './typography-page';

const DesignSystemPage: FC = () => (
  <>
    <ButtonsPage />
    <TypographyPage />
    <ModalPage />
    <TabsPage />
    <IconsPage />
    <IllustrationPage />
    <FormPage />
    <BlogPage />
  </>
);

export default DesignSystemPage;
