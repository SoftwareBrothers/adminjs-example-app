/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { Navigation } from '@adminjs/design-system';
import { useTranslation, type SidebarResourceSectionProps, useNavigationResources } from 'adminjs';

const SidebarResourceSection: FC<SidebarResourceSectionProps> = ({ resources }) => {
  const elements = useNavigationResources(resources);
  const { translateLabel } = useTranslation();

  const openUrl = (url: string) => () => {
    window.open(url, '_blank');
  };

  elements.unshift({
    icon: 'Truck',
    label: translateLabel('kanbanBoard'),
    onClick: openUrl('https://github.com/orgs/SoftwareBrothers/projects/5'),
  });

  elements.unshift({
    icon: 'PieChart',
    label: translateLabel('stats'),
    onClick: openUrl('https://stats.adminjs.co'),
  });

  return <Navigation label={translateLabel('navigation')} elements={elements} />;
};

export default SidebarResourceSection;
