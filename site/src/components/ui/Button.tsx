import { type ComponentProps } from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground font-bold hover:brightness-90 active:scale-95 active:brightness-85 focus-visible:ring-2 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-white font-bold dark:bg-destructive/60 hover:brightness-90 active:scale-95 active:brightness-85 focus-visible:ring-2 focus-visible:ring-destructive",
        secondary:
          "border border-border bg-background font-bold text-foreground hover:bg-muted active:scale-95 active:brightness-85 focus-visible:ring-2 focus-visible:ring-ring",
        ghost:
          "hover:bg-accent hover:text-foreground dark:hover:bg-accent/50 active:scale-95 active:brightness-85 focus-visible:ring-2 focus-visible:ring-ring",
        link:
          "text-accent underline-offset-4 underline hover:brightness-90 active:brightness-60",
        navigation:
          "text-foreground font-bold uppercase hover:text-foreground/80 active:text-foreground/70",
        icon:
          "rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all active:scale-95 active:brightness-85 focus-visible:ring-2 focus-visible:ring-ring",
      },

      effect: {
        shineHover:
          "relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] hover:before:bg-[position:-100%_0,0_0] before:duration-1000",

        /**
         * Works only with buttons that have an underline!
         */
        hoverUnderline:
          "relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[2px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },

      size: {
        default: "h-10 px-6 py-3 text-base has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md text-lg px-6 py-3 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  effect,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, effect, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }