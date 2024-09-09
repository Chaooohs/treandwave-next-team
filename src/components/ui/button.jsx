import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        button2: " text-[#FDFDFD] border-b border-[#121212] uppercase hover:text-[#CFCFCF] active:text-[#999999] active:border-[#121212] transition-all hover:border-[#CFCFCF] hover:border-b-[1px]	  duration-300 ease-in-out",
        buttonRed: " text-[#E03348] border-b border-[#121212] uppercase hover:text-[#E03348] active:text-[#D8001A] active:border-[#121212] transition-all hover:border-[#E03348] hover:border-b-[1px]	 duration-300 ease-in-out",
        buttonBlack: "bg-[#121212] text-[#FDFDFD] uppercase",
        tag: " px-4 py-3 border-[1px] border-[#EDEDED] uppercase text-[#121212] font-mont font-semibold text-sm rounded-[8px] hover:border-[#121212] active:border-[#121212] active:text-[#FDFDFD] active:bg-[#121212]",
        functional: " px-4 py-3 border-[1px] border-[#121212] uppercase text-[#121212] font-mont font-semibold text-sm rounded-[8px] focus-visible:ring-0  ",
        outlineBlue: " px-5 py-4 border-[1px] border-[#0047FF] uppercase text-[#0047FF] font-mont font-semibold text-sm rounded-[4px] ",
        aboutMenuBut: " uppercase text-[#121212] hover:text-[#6A6A6A] active:text-[#121212] font-mont font-semibold text-sm ",
        grayBut: "border-[1px] border-[#BABABA] uppercase text-[#BABABA] rounded-none font-mont font-semibold text-sm ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
