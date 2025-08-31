"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Building2, ScrollText, Shield, Clock, BadgeCheck, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
      <main className="overflow-x-hidden">
      <section className="relative">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-28 md:py-36">
          <div className="max-w-3xl bg-black/50 backdrop-blur-sm px-6 py-6 rounded-2xl">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-white drop-shadow-md">
              Atti notarili chiari e sicuri
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/95 max-w-2xl drop-shadow-md">
              Studio notarile specializzato in atti immobiliari, societari, successioni e donazioni. Trasparenza dei costi, tempi certi e massima riservatezza.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link href="/contatti">
                  Prenota una consulenza
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
                <Link href="/servizi">Scopri le aree di attività</Link>
                  </Button>
                </div>
              </div>
            </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<FileText className="h-6 w-6 text-accent" />} title="Atti Immobiliari" description="Compravendite, mutui, donazioni, servitù e ipoteche." />
            <FeatureCard icon={<Building2 className="h-6 w-6 text-accent" />} title="Societario" description="Costituzioni, patti sociali, aumenti, trasformazioni e M&A." />
            <FeatureCard icon={<ScrollText className="h-6 w-6 text-accent" />} title="Successioni" description="Dichiarazioni di successione, testamenti, donazioni e divisioni." />
            <FeatureCard icon={<Shield className="h-6 w-6 text-accent" />} title="Procure e Autentiche" description="Procure speciali, autentiche firme e copie conformi." />
            </div>
          </div>
        </section>

      <section className="py-12 md:py-16 lg:py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyUsItem icon={<Clock className="h-6 w-6 text-primary" />} title="Tempi certi" description="Pianificazione chiara delle fasi e consegna puntuale degli atti." />
            <WhyUsItem icon={<BadgeCheck className="h-6 w-6 text-primary" />} title="Chiarezza dei costi" description="Preventivi trasparenti e nessun costo nascosto." />
            <WhyUsItem icon={<Shield className="h-6 w-6 text-primary" />} title="Sicurezza e riservatezza" description="Tutela dei dati e firme digitali qualificate." />
              </div>
                  </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Serve un atto o una consulenza?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Descrivi la tua esigenza: ti rispondiamo entro 24 ore lavorative.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8 rounded-full">
              <Link href="/contatti">Richiedi un appuntamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full">
              <Link href="/servizi">Vedi aree di attività</Link>
            </Button>
            </div>
          </div>
        </section>
      </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5">
        <Link href="/servizi" className="text-primary text-sm font-medium">Approfondisci →</Link>
              </div>
            </div>
  )
}

function WhyUsItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-border bg-background p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
