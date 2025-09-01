"use client"

import * as React from "react"
import { FileText, Building2, ScrollText, Shield, BadgeCheck, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"

type BentoItem = {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  href?: string
}

export default function BentoGrid1({
  items,
}: {
  items?: BentoItem[]
}) {
  const defaultItems: BentoItem[] = [
    {
      title: "Atti Immobiliari",
      description: "Compravendite, mutui, donazioni, ipoteche",
      icon: <FileText className="h-5 w-5 text-accent" />,
      className: "md:col-span-2",
    },
    {
      title: "Societario",
      description: "Costituzioni, aumenti, trasformazioni e M&A",
      icon: <Building2 className="h-5 w-5 text-accent" />,
    },
    {
      title: "Successioni e Donazioni",
      description: "Dichiarazioni, testamenti, divisioni",
      icon: <ScrollText className="h-5 w-5 text-accent" />,
    },
    {
      title: "Procure e Autentiche",
      description: "Procure speciali, autentiche firme, copie conformi",
      icon: <Shield className="h-5 w-5 text-accent" />,
      className: "md:row-span-2",
    },
    {
      title: "Chiarezza dei costi",
      description: "Preventivi trasparenti e senza sorprese",
      icon: <BadgeCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: "Tempi certi",
      description: "Pianificazione e consegna puntuale degli atti",
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
  ]

  const data = items && items.length > 0 ? items : defaultItems

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8",
      )}>
        {data.map((item, idx) => (
          <LiquidGlassCard
            key={idx}
            className={cn(
              "rounded-3xl p-6 bg-card/70",
              item.className
            )}
          >
            <div className="flex items-start gap-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            </div>
            {item.description && (
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            )}
          </LiquidGlassCard>
        ))}
      </div>
    </div>
  )
}


