"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, BadgeCheck, Shield, FileText, Building2, ScrollText } from "lucide-react"

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
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-white drop-shadow-2xl" style={{textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.6)'}}>
              Atti notarili chiari e sicuri
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/95 max-w-2xl drop-shadow-xl" style={{textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)'}}>
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

      {/* Sezione principale CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Serve un atto o una consulenza?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descrivi la tua esigenza: ti rispondiamo entro 24 ore lavorative con un preventivo chiaro e trasparente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link href="/contatti">Richiedi un appuntamento gratuito</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full border-2 hover:bg-accent/10 transition-all">
              <Link href="/servizi">Esplora le aree di attività</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sezione informazioni aggiuntive */}
      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-background border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Risposta Rapida</h3>
              <p className="text-muted-foreground leading-relaxed">Rispondiamo entro 24 ore con tutte le informazioni necessarie</p>
            </div>

            <div className="group bg-background border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BadgeCheck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Consulenza Gratuita</h3>
              <p className="text-muted-foreground leading-relaxed">Prima consulenza senza impegno per valutare le tue esigenze</p>
            </div>

            <div className="group bg-background border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Riservatezza Totale</h3>
              <p className="text-muted-foreground leading-relaxed">Tutela completa dei tuoi dati personali e riservatezza assoluta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione numeri e statistiche */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">I nostri risultati parlano</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Anni di esperienza al servizio dei nostri clienti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-blue-600 font-medium">Atti notarili completati</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">8%</div>
              <p className="text-blue-600 font-medium">Clienti soddisfatti</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-blue-600 font-medium">Anni di esperienza</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24h</div>
              <p className="text-blue-600 font-medium">Tempi di risposta</p>
            </div>
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
