import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FilePresentation, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Apresentacao() {
  const slidesUrl = "manus-slides://FwOvsx01keuad84UaN9GIX";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <FilePresentation className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Apresentação Institucional
            </h1>
            <p className="text-2xl text-white/95 font-semibold mb-4">
              GRUPO MMB - Ecossistema Integrado de Governança
            </p>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Apresentação completa com 17 slides detalhando a tese de investimento, 
              arquitetura organizacional, modelo econômico e estratégia de crescimento 
              do GRUPO MMB.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Eye className="mr-2" size={20} />
                  Visualizar Apresentação
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Info */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Conteúdo da Apresentação</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Seção 1: Fundamentos Estratégicos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 1:</strong> Capa Institucional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 2:</strong> Visão Executiva e Pilares Estratégicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 3:</strong> Arquitetura dos Hubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 4:</strong> Hub Administrativo - Funções e Impacto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 5:</strong> Ecossistema Integrado - Visualização Master</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Seção 2: Estrutura Comercial</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 6:</strong> Hub Comercial - Tração e Distribuição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 7:</strong> Unidades de Negócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 8:</strong> Sites das Marcas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 9:</strong> Funil Integrado de Conversão</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Seção 3: Governança e Economia</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 10:</strong> Compliance Regulatório</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 11:</strong> Modelo Econômico e Receitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 12:</strong> Indicadores e Estratégia de Crescimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 13:</strong> Gestão de Riscos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 14:</strong> Conclusão e Contato</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Seção 4: Glossário Técnico</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 15:</strong> Glossário - Indicadores Operacionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 16:</strong> Glossário - Indicadores Financeiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Slide 17:</strong> Glossário - Indicadores Estratégicos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Recursos da Apresentação</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FilePresentation className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold mb-2">17 Slides Completos</h4>
                  <p className="text-sm text-gray-600">
                    Apresentação institucional completa com todos os aspectos estratégicos do GRUPO MMB
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Navegação Interativa</h4>
                  <p className="text-sm text-gray-600">
                    Navegue entre os slides, visualize em tela cheia e acesse notas do apresentador
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold mb-2">Exportação Disponível</h4>
                  <p className="text-sm text-gray-600">
                    Exporte para PDF ou PowerPoint diretamente da interface de visualização
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-cta text-white">
                  <Eye className="mr-2" size={20} />
                  Acessar Apresentação Completa
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
