/** Card Grid component that
 * 
 */
import { type ReactNode, Children } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"

interface CardGridProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  carousel?: boolean
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
}

export function CardGrid({ children, columns = 3, carousel = false }: Readonly<CardGridProps>) {
  if (carousel) {
  return (
    <Carousel>
      <CarouselContent>
        {Children.map(children, (child) => (
          <CarouselItem style={{ flexBasis: `${100 / columns}%` }}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

  return (
    <div className={`grid gap-6 ${columnClasses[columns]}`}>
      {children}
    </div>
  )
}