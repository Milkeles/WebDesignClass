import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-32 px-8 md:px-16 lg:px-24 border-t border-border">
      <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
        {title}
      </h2>
      {description && (
        <p className="pb-16 text-lg text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </section>
  )
}