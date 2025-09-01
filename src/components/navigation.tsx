"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, FileText, Users, Phone, Scale, Mail, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/servizi", label: "Aree di Attività", icon: FileText },
    { href: "/chi-siamo", label: "Lo Studio", icon: Users },
    { href: "/contatti", label: "Contatti", icon: Mail },
  ]

  return (
    <nav className="bg-background shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Studio Veritas" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold text-xl text-foreground">Studio Veritas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Button className="ml-4">
              <Phone className="h-4 w-4 mr-2" />
              Chiama Ora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/50 hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Button className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Chiama Ora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

