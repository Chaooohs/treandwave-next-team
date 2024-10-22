"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react";
import { Minus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center gap-2 py-4 transition-all [&[data-state=open]>.chevronup-icon]:rotate-180 [&[data-state=open]>.minus-icon]:block [&[data-state=open]>.plus-icon]:hidden  text-lg font-mont uppercase font-semibold text-[#121212]",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="chevronup-icon"/>
      {/* <Plus className="plus-icon h-6 w-6 shrink-0 transition-transform duration-200" />
      <Minus className="minus-icon hidden h-6 w-6 shrink-0 transition-transform duration-200" /> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
