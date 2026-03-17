import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-4 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-neo-sm transition-transform hover:rotate-3",
  {
    variants: {
      variant: {
        default:
          "bg-neo-accent text-white",
        secondary:
          "bg-neo-secondary text-black",
        muted:
          "bg-neo-muted text-black",
        outline:
          "bg-white text-black",
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
