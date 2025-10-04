import type * as react from "react";

import { cn } from "@hackyard/ui/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-base outline-none transition-all duration-200 ease-in-out focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        icon: "size-9",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      },
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive-700 focus-visible:ring-destructive/20",
        "destructive-ghost":
          "bg-destructive-50 text-destructive hover:bg-destructive-100 focus-visible:ring-destructive/20",
        "destructive-link":
          "text-destructive hover:underline focus-visible:ring-destructive/20",
        "destructive-outline":
          "border border-destructive text-destructive hover:bg-destructive-50 focus-visible:ring-transparent",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-gray-600 focus-visible:ring-primary/20",
        "primary-ghost":
          "bg-accent text-accent-foreground hover:bg-gray-100 focus-visible:ring-primary/20",
        "primary-link":
          "text-accent-foreground hover:text-gray-800 hover:underline focus-visible:ring-primary/20",
        "primary-outline":
          "border border-gray-300 text-accent-foreground hover:border-gray-600 hover:bg-accent focus-visible:ring-transparent",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-brand-700 focus-visible:ring-secondary/20",
        "secondary-ghost":
          "bg-brand-50 text-secondary hover:bg-brand-100 focus-visible:ring-secondary/20",
        "secondary-link":
          "text-secondary hover:text-brand-700 hover:underline focus-visible:ring-secondary/20",
        "secondary-outline":
          "border border-secondary text-secondary hover:bg-brand-50 focus-visible:ring-transparent",

        success:
          "bg-success text-success-foreground shadow-xs hover:bg-success-700 focus-visible:ring-success/20",
        "success-ghost":
          "bg-success-50 text-success hover:bg-success-100 focus-visible:ring-success/20",
        "success-link":
          "text-success hover:underline focus-visible:ring-success/20",
        "success-outline":
          "border border-success text-success hover:bg-success-50 focus-visible:ring-transparent",
        warning:
          "bg-warning text-warning-foreground shadow-xs hover:bg-warning-700 focus-visible:ring-warning/20",
        "warning-ghost":
          "bg-warning-50 text-warning hover:bg-warning-100 focus-visible:ring-warning/20",
        "warning-link":
          "text-warning hover:underline focus-visible:ring-warning/20",
        "warning-outline":
          "border border-warning text-warning hover:bg-warning-50 focus-visible:ring-transparent",
      },
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: react.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
