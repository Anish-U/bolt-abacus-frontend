import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/favicon.ico') ||
    request.nextUrl.pathname.startsWith('/logo.png') ||
    request.nextUrl.pathname.startsWith('/sw.js') ||
    request.nextUrl.pathname === '/'
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;
  const user = request.cookies.get('user')?.value;
  const allowedRoutes = ['/login'];
  const isRouteAllowed = allowedRoutes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (!token || !user) {
    if (isRouteAllowed) {
      // Set user

      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isRouteAllowed && token && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}