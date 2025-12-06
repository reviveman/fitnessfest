"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button Variants — FitnessFest Theme
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        /** PRIMARY — FitnessFest Gradient */
        default:
          "bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] text-white shadow-md hover:from-[#d63b30] hover:to-[#ff6339] active:scale-[0.98]",

        /** OUTLINE */
        outline:
          "border border-[#EA4A3E] text-[#EA4A3E] bg-transparent hover:bg-[#EA4A3E]/10",

        /** SECONDARY */
        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300",

        /** GHOST BUTTON */
        ghost:
          "text-gray-300 hover:bg-white/10",

        /** LINK BUTTON */
        link:
          "text-[#EA4A3E] underline-offset-4 hover:underline",
        
        /** DESTRUCTIVE (Red) */
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10 rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button Component
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }
