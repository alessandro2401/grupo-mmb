import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="https://www.administradoramutual.com.br/_next/image?url=%2Flogo.png&w=128&q=75" 
                alt="Administradora Mutual" 
                className="h-10"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/legislacao" className="text-foreground hover:text-primary transition-colors font-medium">
              Legislação
            </Link>
            <Link href="/seguradoras" className="text-foreground hover:text-primary transition-colors font-medium">
              Seguradoras
            </Link>
            <Link href="/mutualismo" className="text-foreground hover:text-primary transition-colors font-medium">
              Mutualismo
            </Link>
            
            {/* Dropdown Sistemas Internos */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-white font-medium"
                >
                  Sistemas Internos
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/manual-da-marca" className="cursor-pointer">
                    Manual da Marca
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gerador-assinaturas" className="cursor-pointer">
                    Gerador de Assinaturas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu - Placeholder */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
