/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { Navigation } from '@adminjs/design-system';
import { useTranslation, type SidebarResourceSectionProps, useNavigationResources } from 'adminjs';

const SidebarResourceSection: FC<SidebarResourceSectionProps> = ({ resources }) => {
  const elements = useNavigationResources(resources);
  const { translateLabel } = useTranslation();

  const navigateToStatsDashboard = async () => {
    window.open('https://stats.adminjs.co', '_blank');
  };

  elements.unshift({
    icon: 'PieChart',
    label: translateLabel('stats'),
    onClick: navigateToStatsDashboard,
  });

  return <Navigation label={translateLabel('navigation')} elements={elements} />;
};

export default SidebarResourceSection;
