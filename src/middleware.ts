import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname === '/'
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;
  const allowedRoutes = ['/login'];
  const isRouteAllowed = allowedRoutes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (!token) {
    if (isRouteAllowed) {
      // Set user

      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isRouteAllowed && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}
