import { CurrentAdmin, SelectableBranding } from 'adminjs';
import { DarkTheme, LightTheme } from '@adminjs/themes';

export const lightTheme = {
  theme: LightTheme,
};

export const darkTheme = {
  theme: DarkTheme,
};

export const brandings: SelectableBranding[] = [
  {
    ...darkTheme,
    logo: '/images/logo_white.svg',
  },
  {
    ...lightTheme,
    logo: '/images/logo_dark.svg',
    isAvailable: (currentAdmin?: CurrentAdmin) => {
      return currentAdmin && currentAdmin.email !== 'admin@example.com';
    },
  },
];
