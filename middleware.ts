import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'pl'];
export const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');

  if (!acceptLanguage) {
    return defaultLocale;
  }

  headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();

  return match(languages, locales, defaultLocale);
}

const isProtectedRoute = createRouteMatcher([
  'dashboard/(.*)',
  'offer/(.*)/checkout',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // Skip locale handling for webhook requests
  const svix_id = req.headers.get('svix-id');
  const svix_timestamp = req.headers.get('svix-timestamp');
  const svix_signature = req.headers.get('svix-signature');

  if (svix_id && svix_timestamp && svix_signature) {
    return NextResponse.next();
  }

  // Handle locale for non-webhook requests
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
