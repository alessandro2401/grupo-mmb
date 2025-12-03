import { Link } from "wouter";
import { MARCAS, CONTATO } from "@/data/grupo-mmb";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const linksSite = [
    { label: "Início", href: "/" },
    { label: "Plataforma", href: "/plataforma" },
    { label: "Ecossistema", href: "/ecossistema" },
    { label: "Pós-Venda", href: "/pos-venda" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">GRUPO MMB</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Hub Administrativo e de Pós-Venda do ecossistema de proteção veicular.
              Garantindo excelência operacional e suporte de qualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {linksSite.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marcas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossas Marcas</h4>
            <ul className="space-y-2">
              {MARCAS.map((marca) => (
                <li key={marca.url}>
                  <a
                    href={marca.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {marca.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">{CONTATO.endereco}</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">{CONTATO.telefone}</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">{CONTATO.email}</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">{CONTATO.horario}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Grupo MMB. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidade">
                <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
              </Link>
              <Link href="/termos">
                <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
