import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://drjinsiwale.com'
    const languages = ['en', 'hi']

    // Static routes
    const routes = ['', 'about', 'contact', 'services']

    const serviceIds = [
        'knee-replacement',
        'hip-knee-and-shoulder-replacement',
        'patient-tech',
        'arthroscopy',
        'spine-surgery',
        'hand-surgery'
    ]

    const locationIds = ['ujjain', 'dewas', 'ratlam']

    const sitemapEntries: MetadataRoute.Sitemap = []

    // Add root URL
    sitemapEntries.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
    })

    languages.forEach((lang) => {
        // Static routes
        routes.forEach((route) => {
            let priority = 0.5
            if (route === '') priority = 1.0
            else if (route === 'services') priority = 0.8

            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route ? `/${route}` : ''}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: priority,
            })
        })

        // Services
        serviceIds.forEach((id) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}/services/${id}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            })
        })

        // Locations
        locationIds.forEach((id) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}/locations/${id}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.5,
            })
        })
    })

    return sitemapEntries
}
