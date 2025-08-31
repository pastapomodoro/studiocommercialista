"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, FileText, BarChart3, Calculator, Building2, Shield, Clock } from "lucide-react"

export default function ServiziPage() {
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
  const services = [
    {
      icon: Users,
      title: "Consulenza Fiscale",
      description: "Servizi completi di consulenza fiscale per privati e aziende",
      features: [
        "Dichiarazione dei Redditi (730/UNICO)",
        "Modello Redditi PF/ENC",
        "Consulenza Tributaria",
        "Pianificazione Fiscale",
        "Agevolazioni Fiscali",
        "Contenzioso Tributario"
      ],
      price: "Da €50/ora"
    },
    {
      icon: FileText,
      title: "Contabilità Aziendale",
      description: "Gestione completa della contabilità per imprese e professionisti",
      features: [
        "Contabilità Ordinaria e Semplificata",
        "Fatturazione Elettronica",
        "Libro Giornale e Mastri",
        "Bilanci di Esercizio",
        "IVA e Intrastat",
        "Comunicazioni Periodiche"
      ],
      price: "Da €80/mese"
    },
    {
      icon: BarChart3,
      title: "Revisione e Audit",
      description: "Servizi di revisione contabile e controllo di gestione",
      features: [
        "Revisione Legale dei Conti",
        "Audit di Bilancio",
        "Due Diligence",
        "Controllo di Gestione",
        "Analisi di Bilancio",
        "Report Finanziari"
      ],
      price: "Su Preventivo"
    },
    {
      icon: Building2,
      title: "Consulenza Societaria",
      description: "Supporto completo per costituzioni e operazioni societarie",
      features: [
        "Costituzione Società",
        "Trasformazioni Societarie",
        "Fusioni e Scissioni",
        "Liquidazioni",
        "Aumenti di Capitale",
        "Consulenza Amministrativa"
      ],
      price: "Su Preventivo"
    },
    {
      icon: Calculator,
      title: "Consulenza del Lavoro",
      description: "Gestione delle pratiche del lavoro e previdenziali",
      features: [
        "Buste Paga",
        "Dichiarazioni Unilav/Uniemens",
        "Contratti di Lavoro",
        "Consulenze Sindacali",
        "Licenziamenti e Dimissioni",
        "Pratiche INPS/INAIL"
      ],
      price: "Da €30/mese"
    },
    {
      icon: Shield,
      title: "Privacy e Compliance",
      description: "Assistenza per conformità normativa e privacy",
      features: [
        "GDPR e Privacy Policy",
        "DPO Esterno",
        "Audit Compliance",
        "Modelli Organizzativi",
        "Antiriciclaggio",
        "Sicurezza dei Dati"
      ],
      price: "Da €200/anno"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`${heroCollapsed ? "py-8 min-h-[20vh]" : "py-16 md:py-20 lg:py-24 min-h-[50vh] md:min-h-[60vh]"} relative overflow-hidden transition-all duration-700 ease-in-out`}>
        <div className="absolute inset-0">
          <img src="/servizi.jpg" alt="Servizi" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-center ${heroCollapsed ? "min-h-[20vh]" : "min-h-[50vh] md:min-h-[60vh]"} transition-all duration-700`}>
          <div className="text-center bg-black/50 backdrop-blur-sm px-6 py-6 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
              I Nostri Servizi
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Soluzioni complete e personalizzate per tutte le vostre esigenze fiscali e contabili
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={nextSectionRef} className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-accent/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group h-full hover:shadow-2xl transition-all duration-500 border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl hover:scale-105 hover:-translate-y-2">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-accent/20 p-4 rounded-2xl group-hover:bg-accent/30 transition-colors">
                      <service.icon className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                      <div className="text-lg font-semibold text-primary">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-12 rounded-2xl font-semibold hover:scale-105 transition-transform">
                    Richiedi Informazioni
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-secondary/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Come Lavoriamo</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un processo semplice e trasparente per il vostro successo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                <div className="bg-secondary w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Consulenza Iniziale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analizziamo le vostre esigenze e definiamo insieme gli obiettivi da raggiungere
                </p>
              </div>
            </div>

            <div className="group text-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                <div className="bg-secondary w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Pianificazione</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Elaboriamo un piano di lavoro personalizzato con tempistiche e costi chiari
                </p>
              </div>
            </div>

            <div className="group text-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                <div className="bg-secondary w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Implementazione</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eseguiamo i servizi concordati mantenendo una comunicazione costante
                </p>
              </div>
            </div>

            <div className="group text-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                <div className="bg-secondary w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Follow-up</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitoriamo i risultati e forniamo assistenza continuativa per il vostro business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Domande Frequenti</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>

          <div className="space-y-8">
            <Card className="group border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-foreground">Quanto costa una consulenza fiscale?</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I costi variano in base alla complessità del caso. Per privati partiamo da €50/ora,
                  mentre per aziende dipende dal tipo di servizio richiesto. Forniamo sempre un preventivo dettagliato e trasparente.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-foreground">Quanto tempo richiede la dichiarazione dei redditi?</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Per una situazione standard, completiamo la dichiarazione dei redditi in 7-10 giorni lavorativi.
                  In casi più complessi potrebbero essere necessari fino a 15-20 giorni.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-foreground">Offrite assistenza per controlli fiscali?</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sì, forniamo assistenza completa durante controlli fiscali, rappresentanza in giudizio tributario
                  e difesa nei confronti dell&apos;Agenzia delle Entrate. La nostra esperienza ci permette di gestire al meglio queste situazioni.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-foreground">Lavorate con professionisti e piccole imprese?</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Assolutamente sì! Lavoriamo con privati, professionisti (avvocati, medici, commercialisti),
                  artigiani, commercianti e piccole/medie imprese. Adattiamo i nostri servizi alle specifiche esigenze di ogni cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Avete Bisogno di un Servizio Specifico?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Contattateci per una consulenza gratuita e scoprirete come possiamo aiutarvi
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-card text-primary hover:bg-muted h-14 px-8 text-lg font-semibold rounded-2xl hover:scale-105 transition-transform">
              <Clock className="h-6 w-6 mr-3" />
              Richiedi Preventivo Gratuito
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-card hover:text-primary h-14 px-8 text-lg font-semibold rounded-2xl hover:scale-105 transition-transform">
              Contattaci Subito
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

