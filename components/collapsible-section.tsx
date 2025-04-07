"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-lg overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/50 hover:bg-muted transition-colors">
        <h3 className="text-lg font-medium">{title}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border-t">
        <div className="pt-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

