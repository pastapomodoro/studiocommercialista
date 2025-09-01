"use client"
import React, { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"
import { Award, Users, Target, Heart, Mail, Phone, MapPin, GraduationCap } from "lucide-react"
import Team1 from "@/components/team"

export default function ChiSiamoPage() {
  const [heroCollapsed, setHeroCollapsed] = useState(false)
  const nextSectionRef = useRef<HTMLDivElement | null>(null)
  const hasTriggeredRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!hasTriggeredRef.current && window.scrollY > 40) {
        hasTriggeredRef.current = true
        setHeroCollapsed(true)
        setTimeout(() => {
          const targetTop = (nextSectionRef.current?.offsetTop ?? 0) - 120
          window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" })
        }, 750)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const team = [
    {
      name: "Dott. Marco Rossi",
      role: "Fondatore e Commercialista",
      image: "/avv1.jpg",
      description: "Esperto commercialista con oltre 20 anni di esperienza nel settore fiscale e societario.",
      specializations: ["Diritto Tributario", "Consulenza Societaria", "Revisione Contabile"],
      education: "Laurea in Economia - Università Bocconi",
      certifications: ["Revisore Legale", "Dottore Commercialista"]
    },
    {
      name: "Dott.ssa Laura Bianchi",
      role: "Commercialista Senior",
      image: "/avv2.jpg",
      description: "Specializzata in contabilità aziendale e assistenza fiscale per PMI.",
      specializations: ["Contabilità", "Fiscale Aziendale", "Bilanci"],
      education: "Laurea in Economia Aziendale - Università Cattolica",
      certifications: ["Dottore Commercialista", "Esperto Contabile"]
    },
    {
      name: "Avv. Giovanni Verdi",
      role: "Consulente Legale",
      image: "/avv3.jpg",
      description: "Esperto in diritto societario e consulenza legale per imprese.",
      specializations: ["Diritto Societario", "Contrattualistica", "Contenzioso"],
      education: "Laurea in Giurisprudenza - Università Statale",
      certifications: ["Avvocato", "Mediatore Civile"]
    },
    {
      name: "Dott. Paolo Neri",
      role: "Consulente del Lavoro",
      image: "/avv4.jpg",
      description: "Specializzato in diritto del lavoro e gestione del personale.",
      specializations: ["Diritto del Lavoro", "Buste Paga", "Consulenze Sindacali"],
      education: "Laurea in Scienze Politiche - Università Milano",
      certifications: ["Consulente del Lavoro", "Esperto in Risorse Umane"]
    }
  ]

  const values = [
    { icon: Target, title: "Mission", description: "Fornire servizi professionali di alta qualità, accompagnando i nostri clienti nel loro percorso di crescita economica e fiscale." },
    { icon: Heart, title: "Passione", description: "La nostra passione per il lavoro e l'attenzione al cliente sono i pilastri che guidano ogni nostra azione." },
    { icon: Users, title: "Team", description: "Un team di professionisti esperti e qualificati, sempre aggiornati sulle ultime normative fiscali e contabili." },
    { icon: Award, title: "Eccellenza", description: "Perseguire l'eccellenza in ogni servizio offerto, garantendo risultati concreti e soddisfacenti per i nostri clienti." }
  ]

  const teamMembersForCard = team.map(m => ({
    name: m.name,
    role: m.role,
    bio: m.description,
    imageUrl: m.image,
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`${heroCollapsed ? "py-8 min-h-[20vh]" : "py-16 md:py-20 lg:py-24 min-h-[50vh] md:min-h-[60vh]"} relative overflow-hidden transition-all duration-700 ease-in-out`}>
        <div className="absolute inset-0">
          <img src="/chisiamo.jpg" alt="Chi Siamo" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-center ${heroCollapsed ? "min-h-[20vh]" : "min-h-[50vh] md:min-h-[60vh]"} transition-all duration-700`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl" style={{textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.6)'}}>
              Chi Siamo
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-xl" style={{textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)'}}>
              Un team di professionisti dedicati al vostro successo fiscale e finanziario
            </p>
          </div>
        </div>
      </section>

      {/* Studio Description */}
      <section ref={nextSectionRef} className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Il Nostro Studio</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Lo Studio Commercialista Rossi & Associati è una realtà consolidata nel panorama professionale milanese, fondata nel 2005 dal Dott. Marco Rossi.
                </p>
                <p className="text-lg">
                  Con oltre 15 anni di esperienza, abbiamo assistito centinaia di clienti, dalle piccole imprese ai professionisti, garantendo sempre un servizio personalizzato e di alta qualità.
                </p>
                <p className="text-lg">
                  La nostra forza risiede nella combinazione di competenze tecniche specialistiche e nella capacità di instaurare rapporti di fiducia duraturi con i nostri clienti.
                </p>
                <p className="text-lg">
                  Crediamo che ogni cliente meriti attenzione personalizzata e soluzioni su misura per le proprie esigenze specifiche.
                </p>
              </div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-10 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-3 group-hover:text-primary transition-colors">500+</div>
                  <div className="text-muted-foreground font-medium">Clienti Affidati</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-3 group-hover:text-primary transition-colors">15+</div>
                  <div className="text-muted-foreground font-medium">Anni di Esperienza</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-3 group-hover:text-primary transition-colors">98%</div>
                  <div className="text-muted-foreground font-medium">Clienti Soddisfatti</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-3 group-hover:text-primary transition-colors">24/7</div>
                  <div className="text-muted-foreground font-medium">Supporto Disponibile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">I Nostri Valori</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I principi che guidano il nostro lavoro ogni giorno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                  <div className="bg-secondary/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary/30 transition-colors">
                    <value.icon className="h-10 w-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (2x2) */}
      <Team1
        title="Il Nostro Team"
        subtitle="Professionisti esperti al vostro servizio"
        members={teamMembersForCard}
      />

      {/* Contact CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Conosceteci di Persona
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Venite a trovarci nel nostro studio di Milano per una consulenza gratuita
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center gap-4 transition-colors">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-foreground font-medium text-lg">Via Roma, 123 - Milano</span>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center gap-4 transition-colors">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium text-lg whitespace-nowrap">+39 345 123 4567</span>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center gap-4 transition-colors">
              <Mail className="h-8 w-8 text-primary" />
              <span className="text-foreground font-medium text-lg">info@studioveritas.it</span>
            </div>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold rounded-2xl transition-transform">
            Prenota un Appuntamento
          </Button>
        </div>
      </section>
    </div>
  )
}

