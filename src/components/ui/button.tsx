import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border rounded-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-navy text-white border-navy hover:bg-sky hover:border-sky hover:text-white shadow-sm",
        secondary: "bg-transparent text-navy border-navy hover:bg-navy hover:text-white",
        outline: "border-navy/20 bg-white hover:bg-slate-100 text-navy",
        accent: "bg-sky text-white border-sky hover:bg-sky-dark",
        ghost: "border-transparent hover:bg-slate-200/60 text-navy",
        destructive: "bg-red-600 text-white border-red-600 hover:bg-red-700",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-1.5 text-[0.7rem]",
        lg: "h-13 px-8 py-3.5 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
