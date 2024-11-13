import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { locales } from 'i18n/request';

export const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'us',
});

const PUBLIC_FILE = /\.(.*)$/;

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'us';
  const response = intlMiddleware(request);

  //to take the files from the publisc folder
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return;
  }

  response.headers.set('x-your-custom-locale', defaultLocale);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/public|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
