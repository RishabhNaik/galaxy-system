import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-none",
  {
    variants: {
      variant: {
        default:
          "border-sky bg-sky-light text-sky-dark",
        secondary:
          "border-navy/20 bg-slate-100 text-navy",
        destructive:
          "border-transparent bg-red-600 text-white shadow hover:bg-red-700",
        outline: "text-navy border-navy/20",
        dark: "border-white/20 bg-navy text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
