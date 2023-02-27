import en from './extensions/translations/en.json';

const config = {
  locales: ['en'],
  tutorials: false,
  theme: 'light',
  translations: {
    en: en
  },
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
