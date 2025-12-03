import { pilaresTecnologia } from "@/data/grupo-mmb-updated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Plataforma() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa Plataforma Operacional
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Três pilares fundamentais que sustentam nossa operação: 
            Gestão Financeira, Operações e Tecnologia.
          </p>
        </div>
      </section>

      {/* Pilares Operacionais */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">💰</div>
                <CardTitle>FinOps</CardTitle>
                <CardDescription>Gestão Financeira</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Controle rigoroso de cobranças, inadimplência e fluxo de caixa. 
                  Conformidade regulatória 100% com SUSEP e transparência total.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Ops</CardTitle>
                <CardDescription>Operações</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestão completa do ciclo de vida do cliente: onboarding, suporte, 
                  sinistros e renovações. Atendimento especializado e ágil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">💻</div>
                <CardTitle>Tech</CardTitle>
                <CardDescription>Tecnologia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistemas integrados, automação de processos e dashboards em tempo real. 
                  CRM unificado e API Gateway para fluxo de informações.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tecnologia como Vantagem Competitiva */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tecnologia como Vantagem Competitiva Comercial
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              A alocação da área de T.I. no Hub Comercial é uma decisão estratégica fundamentada em três pilares:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pilaresTecnologia.map((pilar, index) => (
                <Card key={pilar.id} className="border-2">
                  <CardHeader>
                    <div className="text-5xl mb-4">{pilar.icone}</div>
                    <CardTitle className="text-xl">
                      Pilar {String(index + 1).padStart(2, "0")}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {pilar.titulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pilar.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-blue-500/10 p-6 rounded-lg">
              <p className="text-center font-semibold">
                💡 <strong>IMPORTANTE:</strong> A T.I. desenvolve sistemas utilizados por ambos os hubs, 
                mas sua gestão estratégica está alinhada aos objetivos comerciais de crescimento e inovação.
              </p>
            </div>
          </div>

          {/* Integração Tecnológica */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Integração Tecnológica</h3>
            <p className="text-center text-muted-foreground">
              CRM unificado, SGA compartilhado e API Gateway garantem fluxo de informações em tempo real entre os hubs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
