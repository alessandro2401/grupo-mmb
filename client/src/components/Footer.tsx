import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#1a1a1a] text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <img 
              src="https://www.administradoramutual.com.br/_next/image?url=%2Flogo.png&w=128&q=75" 
              alt="Administradora Mutual" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Administradora especializada em gestão de seguros mútuos, oferecendo soluções 
              completas e personalizadas para seguradoras autorizadas pela SUSEP.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/legislacao" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Legislação
                </Link>
              </li>
              <li>
                <Link href="/seguradoras" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Seguradoras
                </Link>
              </li>
              <li>
                <Link href="/mutualismo" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mutualismo
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Sistemas */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sistemas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/manual-da-marca" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Manual da Marca
                </Link>
              </li>
              <li>
                <Link href="/gerador-assinaturas" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gerador de Assinaturas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-1">
            © {currentYear} Administradora Mutual. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Seguradoras autorizadas pela SUSEP - Superintendência de Seguros Privados
          </p>
        </div>
      </div>
    </footer>
  );
}
