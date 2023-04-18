export type AuthUser = {
  email: string;
  password: string;
  title: string;
  theme: string;
};

export const AuthUsers: AuthUser[] = [
  {
    email: 'admin@example.com',
    password: 'password',
    title: 'Admin',
    theme: 'light',
  },
  {
    email: 'dark@example.com',
    password: 'password',
    title: 'AdminJS dark theme',
    theme: 'dark',
  },
  {
    email: 'no-sidebar@example.com',
    password: 'password',
    title: 'AdminJS no-sidebar theme',
    theme: 'no-sidebar',
  },
  {
    email: 'custom@example.com',
    password: 'password',
    title: 'AdminJS custom theme',
    theme: 'custom-theme',
  },
];
