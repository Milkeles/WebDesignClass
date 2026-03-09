interface TeamMemberProps {
  name: string
  role: string
  description: string
  picture: {
    sources: { srcset: string; type: string }[] | Record<string, string>
    img: { src: string }
  }
  alt: string
}

export function TeamMember({ name, role, picture, alt, description }: Readonly<TeamMemberProps>) {
  return (
    <div className="flex flex-col gap-6">
      {/* Top - picture + name/role */}
      <div className="flex flex-row items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 shrink-0">
          <picture>
            {(Array.isArray(picture.sources)
              ? picture.sources
              : Object.entries(picture.sources).map(([format, srcset]) => ({
                  type: `image/${format}`,
                  srcset: srcset,
                }))
            ).map(({ srcset, type }) => (
              <source key={type} srcSet={srcset} type={type} sizes="128px" />
            ))}
            <img src={picture.img.src} alt={alt} className="w-full h-full object-cover" />
          </picture>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-1">
            {role}
          </p>
          <h3 className="text-2xl font-black tracking-tight">{name}</h3>
        </div>
      </div>
      
      {description && (
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      )}
    </div>
  )
}