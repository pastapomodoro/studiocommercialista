"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "relative overflow-hidden rounded-lg transition-all duration-300 group bg-background/20",
  {
    variants: {
      variant: {
        default: "hover:scale-[1.01] text-foreground backdrop-blur-[2px]",
        primary: "bg-primary/5 hover:bg-primary/5 text-foreground backdrop-blur-[2px]",
        destructive: "bg-destructive/5 hover:bg-destructive/10 text-foreground backdrop-blur-[2px]",
        secondary: "bg-secondary/5 hover:bg-secondary/10 text-foreground backdrop-blur-[2px]",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        default: "hover:scale-[1.02]",
        none: "",
        glow: "hover:shadow-lg hover:shadow-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default",
    },
  }
)

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
  glassEffect?: boolean
}

function GlassFilter() {
  const filterId = React.useId()
  return (
    <svg className="hidden">
      <title>Glass Effect Filter</title>
      <defs>
        <filter
          id={filterId}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="30" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  (
    { className, variant, size, hover, asChild = false, glassEffect = true, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div"
    const filterId = React.useId()
    return (
      <>
        <Comp ref={ref} className={cn("relative", cardVariants({ variant, size, hover, className }))} {...props}>
          <div
            className="absolute inset-0 z-0 h-full w-full rounded-lg 
          shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
          transition-all pointer-events-none
          dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
          />

          {glassEffect && (
            <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden rounded-lg" style={{ backdropFilter: `url("#${filterId}")` }} />
          )}

          <div className="relative z-10">{children}</div>

          <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent dark:via-white/5 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />

          {glassEffect && <GlassFilter />}
        </Comp>
      </>
    )
  }
)

LiquidGlassCard.displayName = "LiquidGlassCard"

export { LiquidGlassCard }


