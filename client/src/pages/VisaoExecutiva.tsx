import { Card, CardContent } from "@/components/ui/card";
import { PILARES_ESTRATEGICOS } from "@/data/grupo-mmb";
import { Target, TrendingUp, Shield, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function VisaoExecutiva() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Visão Executiva</h1>
            <p className="text-2xl text-white/95 font-semibold mb-4">
              Tese de Investimento e Racional Estratégico
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              O GRUPO MMB estrutura-se como um ecossistema integrado de soluções em mobilidade, 
              multiproteção e serviços financeiros, operando sob uma arquitetura organizacional 
              que separa de forma clara a gestão de risco, a governança institucional e a tração comercial.
            </p>
          </div>
        </div>
      </section>

      {/* Posicionamento Estratégico */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-primary" size={32} />
                Posicionamento Estratégico
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Diferentemente de operadores monolineares tradicionais, o GRUPO MMB adota uma 
                  <strong> estratégia de diversificação controlada</strong>, atuando de forma complementar 
                  nos mercados de seguro regulado, mutualismo associativo, consórcios e canais próprios 
                  de geração de demanda e construção de marca.
                </p>
                <p>
                  Essa abordagem permite capturar valor em diferentes perfis de renda e risco do mercado 
                  brasileiro, com maturidade operacional e visão de longo prazo, sem competição interna 
                  entre as unidades de negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tese de Investimento - Três Pilares */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Tese de Investimento</h2>
            <p className="text-xl text-gray-600">
              Três pilares centrais fundamentam a estratégia de crescimento sustentável do GRUPO MMB
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {PILARES_ESTRATEGICOS.map((pilar, index) => {
              const icons = [TrendingUp, Shield, Zap];
              const Icon = icons[index];
              
              return (
                <Card key={pilar.id} className="group hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">{pilar.titulo}</h3>
                      <p className="text-gray-700 leading-relaxed">{pilar.descricao}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detalhamento dos Pilares */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">1. Eficiência Operacional por Estruturas Compartilhadas</h3>
                <p className="text-gray-700 leading-relaxed">
                  A centralização de funções administrativas no Hub Administrativo (GRUPO MMB) permite 
                  diluição de custos fixos à medida que novas unidades de negócio são adicionadas ou 
                  as existentes crescem. Finanças, jurídico, contabilidade, compliance, tecnologia e 
                  recursos humanos operam como um centro de serviços compartilhados, gerando ganhos 
                  de escala e reduzindo o custo marginal de expansão.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">2. Mitigação de Riscos Regulatórios e Jurídicos</h3>
                <p className="text-gray-700 leading-relaxed">
                  A segregação funcional entre o Hub Administrativo e o Hub Comercial, bem como a 
                  separação clara entre operações de seguro regulado (SUSEP) e mutualismo associativo, 
                  impede confusão patrimonial e fortalece a governança. Essa arquitetura reduz a 
                  exposição a riscos regulatórios, facilita auditorias e garante conformidade com as 
                  exigências da Lei Complementar 213 de 2025 e demais normativos do setor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">3. Maximização do Life Time Value (LTV)</h3>
                <p className="text-gray-700 leading-relaxed">
                  O funil proprietário de aquisição e retenção permite que o GRUPO MMB direcione cada 
                  perfil de cliente para a entidade mais adequada dentro do ecossistema, respeitando 
                  capacidade contributiva, apetite a risco e exigências regulatórias. Isso amplia a 
                  captura de valor ao longo do tempo, reduz o churn e cria oportunidades de cross-selling 
                  e upselling entre as diferentes unidades de negócio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciação Competitiva */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Diferenciação Competitiva</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Operadores Monolineares</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Atuação em um único segmento (seguro OU mutualismo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Estruturas administrativas duplicadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Limitação de captura de valor por perfil de cliente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Menor previsibilidade de receita</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">GRUPO MMB (Ecossistema Integrado)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Diversificação controlada em múltiplos segmentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Centro de serviços compartilhados (diluição de custos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Funil integrado que maximiza LTV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Receitas recorrentes e previsibilidade financeira</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
