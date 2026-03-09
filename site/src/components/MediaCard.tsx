import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { type ReactNode } from 'react'

interface PictureData {
    sources: { srcset: string; type: string }[] | Record<string, string>
    img: { src: string; w?: number; h?: number }
}

interface MediaCardProps {
    title?: string
    description?: string
    href?: string
    ctaLabel?: string
    reverse?: boolean
    children?: ReactNode
    image: {
        picture: PictureData
        alt: string
    }
}

export function MediaCard({ title, description, href, ctaLabel, image, reverse, children }: MediaCardProps) {
    const hasContent = title || description || href || children

    return (
        <div className={`flex flex-col gap-12 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
            {/* Content */}
            {hasContent && (
                <div className={`flex-1 flex flex-col gap-6 ${reverse ? '' : 'text-right items-end'}`}>
                    {title && <h3 className="text-3xl font-black tracking-tight">{title}</h3>}
                    {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
                    {children}
                    {href && (
                        <Button variant="secondary" className="w-fit" asChild>
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                {ctaLabel ?? 'Visit site'}
                                <ArrowRight size={14} strokeWidth={2.5} />
                            </a>
                        </Button>
                    )}
                </div>
            )}

            {/* Image */}
            <div className={`flex-1 aspect-video overflow-hidden ${reverse
                    ? 'rounded-tr-[clamp(32px,6vw,128px)] rounded-bl-[clamp(32px,6vw,128px)]'
                    : 'rounded-tl-[clamp(32px,6vw,128px)] rounded-br-[clamp(32px,6vw,128px)]'
                }`}>
                <picture>
                    {(Array.isArray(image.picture.sources)
                        ? image.picture.sources
                        : Object.entries(image.picture.sources).map(([format, srcset]) => ({
                            type: `image/${format}`,
                            srcset: srcset,
                        }))
                    ).map(({ srcset, type }) => (
                        <source
                            key={type}
                            srcSet={srcset}
                            type={type}
                            sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) calc(50vw - 5rem), calc(50vw - 8rem)"
                        />
                    ))}
                    <img
                        src={image.picture.img.src}
                        alt={image.alt}
                        width={image.picture.img.w}
                        height={image.picture.img.h}
                        className="w-full h-full object-cover"
                    />
                </picture>
            </div>
        </div>
    )
}