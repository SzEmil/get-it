import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'pl'];
export const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();

  return match(languages, locales, defaultLocale);
}

const isProtectedRoute = createRouteMatcher([
  'dashboard/(.*)',
]);

export default clerkMiddleware((auth, req) => {
  // if (isPublicRoute(req)) return; 
  // auth().protect(); 
  if (isProtectedRoute(req)) auth().protect();

  // Handle locale
  let locale = getLocale(req) ?? defaultLocale;
  const pathname = req.nextUrl.pathname;
  const newUrl = new URL(
    `/${locale}${pathname}${req.nextUrl.search}`,
    req.nextUrl
  );
  return NextResponse.rewrite(newUrl);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
