import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request); // trata localização

  const initialTheme = request.cookies.get('theme')?.value;
  let theme = 'light';
  if (initialTheme === 'dark') {
    theme = 'dark';
  }

  response.headers.set('x-theme', theme);

  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|netlify|_next|_vercel|.*\\..*).*)'],
};
