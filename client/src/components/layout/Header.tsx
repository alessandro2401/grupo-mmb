import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Plataforma", href: "/plataforma" },
    { label: "Ecossistema", href: "/ecossistema" },
    { label: "Pós-Venda", href: "/pos-venda" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src="/logos/grupo-mmb.png" 
                alt="Grupo MMB" 
                className="h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/pos-venda">
              <Button className="gradient-cta text-white">
                Central de Pós-Venda
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/pos-venda">
                <Button
                  className="gradient-cta text-white w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Central de Pós-Venda
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
