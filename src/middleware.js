import { NextResponse } from 'next/server';

export function middleware(req) {

    const token = req.cookies.get('adminToken')?.value;

    if (!token && req.nextUrl.pathname.startsWith('/admin')) {
        // Перенаправляем на страницу логина
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    return NextResponse.next();
}

// пути, к которым применить middleware
export const config = {
    matcher: ['/admin/dashboard/:path*'],
};