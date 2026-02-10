import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/education/',
        },
        sitemap: 'https://drjinsiwale.com/sitemap.xml',
    }
}
