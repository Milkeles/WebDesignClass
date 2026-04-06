/**
 * Renders children in a responsive grid or carousel layout.
 *
 * @param children - Card elements to display.
 * @param columns - Number of columns/visible slides (1–4). Defaults to 3.
 * @param carousel - If true, renders a carousel. Defaults to false.
 * @returns A responsive grid or carousel.
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

const carouselBasisClasses = {
  1: "basis-full",
  2: "basis-full sm:basis-1/2",
  3: "basis-full sm:basis-1/2 lg:basis-1/3",
  4: "basis-full sm:basis-1/2 lg:basis-1/4",
}

export function CardGrid({ children, columns = 3, carousel = false }: Readonly<CardGridProps>) {
  if (carousel) {
    return (
      <Carousel>
        <CarouselContent>
          {Children.map(children, (child) => (
            <CarouselItem className={carouselBasisClasses[columns]}>
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