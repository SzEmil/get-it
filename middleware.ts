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
  '/offer/:path*/checkout',
  '/profile',
  '/my-courses',
  '/my-courses/(.*)',
  '/api/images/(.*)',
  '/api/videos/(.*)',
]);

const isApiRoute = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  return pathname.startsWith('/api');
};

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

  if (isApiRoute(req)) {
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
  // matcher: [
  //   // Skip all static files, unless found in search params
  //   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  //   // Always run for api routes
  //   '/(api|trpc)(.*)',
  // ],
  matcher: [
    // Skip middleware for API routes and static files
    '/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4)).*)',
    // Zawsze uruchamiaj dla Clerk w trasach API
    '/api/(.*)',
  ],
};
