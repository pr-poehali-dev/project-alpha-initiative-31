import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#tour", label: "Тур" },
    { href: "#about", label: "О группе" },
    { href: "#members", label: "Участники" },
    { href: "#tickets", label: "Билеты" },
    { href: "#contacts", label: "Контакты" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-base font-bold text-white leading-tight">
              БАГРОВЫЙ <span className="text-red-500">ФАНТОМАС</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-geist text-white hover:text-red-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-red-500 hover:bg-red-600 text-white font-geist border-0"
              onClick={() => document.querySelector('#tickets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Купить билет
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                  Купить билет
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
