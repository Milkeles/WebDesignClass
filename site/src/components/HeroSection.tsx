import { type ReactNode } from 'react'

interface HeroSectionProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export function HeroSection({ eyebrow, title, description, children }: Readonly<HeroSectionProps>) {
  return (
    <section className="pt-40 pb-24 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Accent blob */}
      <div className="absolute top-0 right-0 w-100 h-100 rounded-full opacity-10 blur-[150px] bg-primary pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}