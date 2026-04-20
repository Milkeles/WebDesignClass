const DOCS_BASE = 'https://milkeles.github.io/FervorWeb/' // or wherever Jekyll lives

export const docsPath = (locale: string, slug = ''): string => {
    const cleanSlug = slug.replace(/^\/+/, '')
    return locale === 'en'
        ? `${DOCS_BASE}/${cleanSlug}`
        : `${DOCS_BASE}/${locale}/${cleanSlug}`
}