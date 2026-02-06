import { VALORES } from "@/data/grupo-mmb";
import { fluxoTrabalho, resultadosEsperados } from "@/data/grupo-mmb-updated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre o Grupo MMB
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Hub Administrativo e de Pós-Venda que administra 7 marcas do ecossistema, 
            trabalhando em sinergia com a Alpha Proteções (Hub Comercial).
          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Administrar o pós-venda de todas as marcas do ecossistema com excelência operacional, 
                  garantindo conformidade regulatória e satisfação do cliente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser referência em gestão administrativa e pós-venda no mercado de proteção patrimonial, 
                  combinando especialização, tecnologia e governança.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Excelência Operacional</li>
                  <li>✓ Conformidade e Transparência</li>
                  <li>✓ Foco no Cliente</li>
                  <li>✓ Especialização</li>
                  <li>✓ Inovação Contínua</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como os Dois Hubs Trabalham Juntos */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Como os Dois Hubs Trabalham Juntos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Da Venda à Satisfação: Um fluxo integrado que garante excelência em todas as etapas
          </p>

          <div className="space-y-6">
            {fluxoTrabalho.map((etapa, index) => (
              <Card 
                key={etapa.id} 
                className={`border-l-4 ${
                  etapa.cor === 'laranja' ? 'border-l-orange-500' : 'border-l-blue-500'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl font-bold ${
                      etapa.cor === 'laranja' ? 'text-orange-600' : 'text-blue-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle>{etapa.etapa}</CardTitle>
                      <CardDescription className="text-base">
                        <span className={etapa.cor === 'laranja' ? 'text-orange-600' : 'text-blue-600'}>
                          {etapa.responsavel}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{etapa.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-center">Integração Tecnológica</h3>
            <p className="text-center text-muted-foreground">
              CRM unificado, SGA compartilhado e API Gateway garantem fluxo de informações em tempo real entre os hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Resultados Esperados
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Eficiência, Crescimento e Conformidade
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Para o Negócio */}
            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-600">Para o Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {resultadosEsperados.negocio.map((resultado, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{resultado.titulo}</p>
                        <p className="text-sm text-muted-foreground">{resultado.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Para os Colaboradores */}
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-blue-600">Para os Colaboradores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {resultadosEsperados.colaboradores.map((resultado, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{resultado.titulo}</p>
                        <p className="text-sm text-muted-foreground">{resultado.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Para os Clientes */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Para os Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {resultadosEsperados.clientes.map((resultado, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{resultado.titulo}</p>
                        <p className="text-sm text-muted-foreground">{resultado.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Mensagem Final */}
          <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Uma Estrutura Moderna para um Crescimento Sustentável
            </h3>
            <p className="text-center text-muted-foreground max-w-4xl mx-auto">
              Esta reestruturação não é apenas uma mudança organizacional, é um posicionamento estratégico 
              que nos prepara para liderar o mercado de proteção patrimonial nos próximos anos, combinando 
              a agilidade comercial da <span className="text-orange-600 font-semibold">Alpha Proteções</span> com 
              a solidez administrativa do <span className="text-blue-600 font-semibold">Grupo MMB</span>.
            </p>
          </div>

          {/* Apresentação Institucional */}
          <div className="mt-12 text-center">
            <div className="bg-white border-2 border-primary/20 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Apresentação Institucional Completa</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Acesse nossa apresentação institucional detalhada com 17 slides, incluindo visão executiva, 
                arquitetura organizacional, modelo econômico, indicadores de crescimento e glossário técnico.
              </p>
              <a 
                href="/GRUPOMMB_Apresentacao_Institucional_v2.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#001D3F', color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#274A78'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#001D3F'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="M7 3v18"/>
                  <path d="M3 7.5h4"/>
                  <path d="M3 12h18"/>
                  <path d="M3 16.5h4"/>
                  <path d="M17 3v18"/>
                  <path d="M17 7.5h4"/>
                  <path d="M17 16.5h4"/>
                </svg>
                Ver Apresentação Completa
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
