import axios from 'axios';

import nextIntlConfig from '../../next-intl.config';

const api = axios.create({
  baseURL: '/.netlify/functions/',
});

export function getLanguageFromClientCookies() {
  const cookies: Record<string, string> = document.cookie
    .split('; ')
    .reduce((acc: Record<string, string>, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});

  return cookies['NEXT_LOCALE'] || nextIntlConfig.defaultLocale;
}

api.interceptors.request.use(
  (config) => {
    const langFromUrl = getLanguageFromClientCookies();
    const language = langFromUrl || nextIntlConfig.defaultLocale;
    config.headers['Accept-Language'] = language;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
