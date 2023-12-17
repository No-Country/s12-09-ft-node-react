import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('URL: ', request.url);
  // console.log('URL NEXT: ', request.nextUrl.pathname);

  // if (request.nextUrl.pathname.startsWith('/client')) {
  //   // allow
  //   return NextResponse.next();
  // }
  // if (request.nextUrl.pathname.startsWith('/workshop')) {
  //   // rewrite route
  //   return NextResponse.rewrite(new URL('/workshop/dashboard', request.url));
  // }
  // // redirect
  // return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/workshop/:path*', '/client/:path*', '/mechanic/:path*'],
};
