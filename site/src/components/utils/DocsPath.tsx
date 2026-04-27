const DOCS_BASE = 'https://milkeles.github.io/FervorWeb/docs'

export const docsPath = (locale: string, slug = ''): string => {
    const cleanSlug = slug.replaceAll(/^\/+|\/+$/g, '')
    const segments = [locale === 'en' ? '' : locale, cleanSlug].filter(Boolean)
    return segments.length
        ? `${DOCS_BASE}/${segments.join('/')}/`
        : `${DOCS_BASE}/`
}