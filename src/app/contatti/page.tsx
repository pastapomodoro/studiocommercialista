"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContattiPage() {
  const [heroCollapsed, setHeroCollapsed] = useState(false)
  const nextSectionRef = useRef<HTMLDivElement | null>(null)
  const hasTriggeredRef = useRef(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      servizio: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Grazie per averci contattato! Ti risponderemo al più presto.')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      details: ["Via Roma, 123", "20121 Milano (MI)", "Italia"]
    },
    {
      icon: Phone,
      title: "Telefono",
      details: ["+39 02 1234 5678", "+39 333 123 4567 (Mobile)"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@studiocommercialista.it", "segreteria@studiocommercialista.it"]
    },
    {
      icon: Clock,
      title: "Orari di Apertura",
      details: ["Lunedì - Venerdì: 9:00 - 18:00", "Sabato: 9:00 - 12:00", "Domenica: Chiuso"]
    }
  ]

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`${heroCollapsed ? "py-8 min-h-[20vh]" : "py-16 md:py-20 lg:py-24 min-h-[50vh] md:min-h-[60vh]"} relative overflow-hidden transition-all duration-700 ease-in-out`}>
        <div className="absolute inset-0">
          <img src="/contattaci.jpg" alt="Contattaci" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-center ${heroCollapsed ? "min-h-[20vh]" : "min-h-[50vh] md:min-h-[60vh]"} transition-all duration-700`}>
          <div className="text-center bg-black/50 backdrop-blur-sm px-6 py-6 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
              Contattaci
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Siamo qui per rispondere alle vostre domande e offrirvi la migliore assistenza
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={nextSectionRef} className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-accent/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl font-bold text-foreground mb-4">Scrivici un Messaggio</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Compila il form sottostante e ti risponderemo entro 24 ore
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nome" className="text-lg font-semibold">Nome e Cognome *</Label>
                      <Input id="nome" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Il tuo nome completo" className="h-12 text-base" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg font-semibold">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="tua@email.com" className="h-12 text-base" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="telefono" className="text-lg font-semibold">Telefono</Label>
                      <Input id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="+39 123 456 7890" className="h-12 text-base" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="servizio" className="text-lg font-semibold">Servizio di Interesse</Label>
                      <Select value={formData.servizio} onValueChange={handleSelectChange}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Seleziona un servizio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulenza-fiscale">Consulenza Fiscale</SelectItem>
                          <SelectItem value="contabilita">Contabilità</SelectItem>
                          <SelectItem value="revisione">Revisione e Audit</SelectItem>
                          <SelectItem value="societario">Consulenza Societaria</SelectItem>
                          <SelectItem value="lavoro">Consulenza del Lavoro</SelectItem>
                          <SelectItem value="altro">Altro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="messaggio" className="text-lg font-semibold">Messaggio *</Label>
                    <Textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleInputChange} placeholder="Descrivi brevemente la tua richiesta..." rows={6} className="text-base resize-none" required />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold rounded-2xl hover:scale-105 transition-transform">
                    <Send className="h-6 w-6 mr-3" />
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg">
                <CardHeader className="p-8">
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">Informazioni di Contatto</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Puoi contattarci tramite i seguenti canali
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="bg-accent/20 p-4 rounded-2xl group-hover:bg-accent/30 transition-colors">
                        <info.icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-foreground">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-lg leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg">
                <CardHeader className="p-8">
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">Richiedi un Appuntamento</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Prenota una consulenza gratuita presso il nostro studio
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Offriamo consulenze gratuite della durata di 30 minuti per valutare
                      le vostre esigenze e proporvi la soluzione più adatta.
                    </p>
                    <Button size="lg" className="w-full h-14 text-lg font-semibold rounded-2xl hover:scale-105 transition-transform">
                      <Clock className="h-6 w-6 mr-3" />
                      Prenota Appuntamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-secondary/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Dove Trovarci</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Il nostro studio è facilmente raggiungibile nel centro di Milano
            </p>
          </div>

          <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl h-96 shadow-lg mb-12 overflow-hidden">
            <iframe
              title="Mappa - Via Roma 123, Milano"
              src="https://www.google.com/maps?q=Via+Roma,+123,+20121+Milano+MI,+Italia&hl=it&z=16&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          
        </div>
      </section>
    </div>
  )
}

