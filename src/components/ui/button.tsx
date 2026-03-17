import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none border-4 border-black font-bold uppercase tracking-wide transition-all duration-100 ease-linear focus-visible:outline-none focus-visible:ring-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-neo-accent text-white shadow-neo-sm hover:brightness-110",
        secondary:
          "bg-neo-secondary text-black shadow-neo-sm hover:brightness-110",
        outline:
          "border-4 border-black bg-white text-black shadow-neo-sm hover:bg-slate-100",
        ghost: "border-2 border-transparent hover:border-black hover:bg-slate-100 text-black",
      },
      size: {
        default: "h-14 px-8 text-sm",
        sm: "h-12 px-4 text-xs",
        lg: "h-16 px-10 text-lg",
        icon: "h-14 w-14",
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
