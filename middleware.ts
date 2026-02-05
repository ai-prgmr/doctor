import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'hi']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, and static files
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)'],
}
