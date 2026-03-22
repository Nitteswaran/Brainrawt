import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-neo-muted/20 border-4 border-black", className)}
      {...props}
    />
  )
}

export { Skeleton }
