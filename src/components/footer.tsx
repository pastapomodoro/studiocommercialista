import Link from "next/link"
import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Studio Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg">Studio Notarile</span>
            </div>
            <p className="text-background/80 text-sm">
              Atti immobiliari e societari, successioni e donazioni. Chiarezza, riservatezza e tempi certi.
            </p>
          </div>

          {/* Aree di Attività */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Aree di Attività</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Atti Immobiliari</li>
              <li>Costituzioni e Operazioni Societarie</li>
              <li>Successioni e Donazioni</li>
              <li>Procure e Autentiche</li>
              <li>Convenzioni Patrimoniali</li>
            </ul>
          </div>

          {/* Link Utili */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Link Utili</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/servizi" className="hover:text-blue-400 transition-colors">Aree di Attività</Link></li>
              <li><Link href="/chi-siamo" className="hover:text-blue-400 transition-colors">Lo Studio</Link></li>
              <li><Link href="/contatti" className="hover:text-blue-400 transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contatti</h3>
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Via Roma, 123 - Milano</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@studiocommercialista.it</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Lun-Ven: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/30 mt-12 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © 2024 Studio Notarile. Tutti i diritti riservati.
            </p>
            <p className="text-background/70 text-sm mt-2 md:mt-0">
              Partita IVA: 12345678901
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

