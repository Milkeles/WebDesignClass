const DOCS_BASE = 'https://milkeles.github.io/FervorWeb/docs'

export const docsPath = (locale: string, slug = ''): string => {
    const cleanSlug = slug.replace(/^\/+/, '').replace(/\/+$/, '')
    const path = locale === 'en'
        ? cleanSlug
        : `${locale}/${cleanSlug}`
    return path ? `${DOCS_BASE}/${path}/` : `${DOCS_BASE}/`
}