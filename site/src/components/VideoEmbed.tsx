interface YoutubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export function VideoEmbed({ videoId, title, className }: Readonly<YoutubeEmbedProps>) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-tl-[clamp(32px,6vw,128px)] rounded-br-[clamp(32px,6vw,128px)] ${className ?? ''}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        // https://www.youtube.com/embed/9gzvY3alkvM?rel=0&modestbranding=1
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  )
}