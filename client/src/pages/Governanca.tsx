import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Governanca() {
  const riscos = [
    {
      tipo: "Regulatório",
      descricao: "Mudanças normativas da SUSEP ou LC 213/2025",
      mitigacao: "Segregação funcional clara entre seguro regulado e mutualismo. Compliance dedicado.",
      nivel: "Médio"
    },
    {
      tipo: "Operacional",
      descricao: "Falhas em processos de sinistro ou atendimento",
      mitigacao: "Processos padronizados, auditoria contínua e treinamento de equipes.",
      nivel: "Baixo"
    },
    {
      tipo: "Financeiro",
      descricao: "Inadimplência ou descasamento de fluxo de caixa",
      mitigacao: "Gestão centralizada de risco, análise preditiva e reservas técnicas adequadas.",
      nivel: "Médio"
    },
    {
      tipo: "Tecnológico",
      descricao: "Ataques cibernéticos ou vazamento de dados (LGPD)",
      mitigacao: "Infraestrutura segura, conformidade com LGPD, auditorias de segurança periódicas.",
      nivel: "Baixo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Governança e Compliance</h1>
            <p className="text-2xl text-white/95 font-semibold mb-4">
              Posicionamento Regulatório e Gestão de Riscos
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              O GRUPO MMB estrutura suas operações de forma aderente ao ambiente regulatório brasileiro, 
              com segregação clara entre operações reguladas e não reguladas, fortalecendo a governança 
              e mitigando riscos jurídicos e operacionais.
            </p>
          </div>
        </div>
      </section>

      {/* Posicionamento Regulatório */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileCheck className="text-primary" size={32} />
                Posicionamento Regulatório
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  O GRUPO MMB opera em conformidade com as exigências da <strong>SUSEP (Superintendência 
                  de Seguros Privados)</strong> para as operações de seguro regulado, e com a 
                  <strong> Lei Complementar 213 de 2025</strong> para as operações de proteção veicular 
                  associativa (mutualismo).
                </p>
                <p>
                  A segregação funcional entre as unidades de negócio garante que não haja confusão 
                  patrimonial ou operacional entre as diferentes modalidades de atuação, fortalecendo 
                  a governança e facilitando auditorias externas e fiscalização regulatória.
                </p>
              </div>
            </div>

            {/* Segregação Regulatória */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="text-primary" size={28} />
                    <h3 className="text-xl font-bold">Operações Reguladas (SUSEP)</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>SOLUÇÕES CORRETORA:</strong> Intermediação de seguros tradicionais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>POTERE SEGURO AUTO:</strong> Produtos de seguro auto regulado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Conformidade integral com normas da SUSEP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Auditoria externa e relatórios regulatórios periódicos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="text-primary" size={28} />
                    <h3 className="text-xl font-bold">Operações Mutualistas (LC 213/2025)</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>MOVIMENTO MAIS BRASIL:</strong> Associação de proteção veicular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>MAIS BRASIL MOTORCYCLE:</strong> Proteção para motocicletas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Modelo de rateio de despesas (sem fins lucrativos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Transparência e prestação de contas aos associados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gestão de Riscos */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertTriangle className="text-primary" size={32} />
              Matriz de Riscos e Mitigação
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O GRUPO MMB adota uma abordagem proativa de gestão de riscos, identificando, 
              avaliando e mitigando ameaças potenciais à estabilidade operacional e financeira 
              do ecossistema.
            </p>

            <div className="space-y-4">
              {riscos.map((risco, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-start">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tipo de Risco</p>
                        <p className="font-bold text-primary">{risco.tipo}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Descrição</p>
                        <p className="text-gray-700">{risco.descricao}</p>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-3 mb-1">Mitigação</p>
                        <p className="text-gray-700 text-sm">{risco.mitigacao}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Nível</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          risco.nivel === 'Baixo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {risco.nivel}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance e Auditoria */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Compliance e Auditoria</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Compliance Regulatório</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Área dedicada ao monitoramento contínuo de mudanças normativas e à 
                    garantia de conformidade com SUSEP, LC 213/2025 e demais regulamentações.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Auditoria Interna</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Processos de auditoria interna periódica para validação de controles, 
                    processos financeiros e operacionais em todas as unidades de negócio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Auditoria Externa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Auditoria externa independente para validação de demonstrações financeiras 
                    e conformidade com normas contábeis e regulatórias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LGPD e Proteção de Dados */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Proteção de Dados e LGPD</h2>
            <Card>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  O GRUPO MMB adota práticas rigorosas de proteção de dados pessoais em conformidade 
                  com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. Todos os sistemas são 
                  auditados periodicamente para garantir a segurança da informação e a privacidade 
                  dos clientes e associados.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Criptografia de dados sensíveis em trânsito e em repouso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Controles de acesso baseados em função (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Políticas de retenção e descarte de dados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Treinamento contínuo de colaboradores em proteção de dados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
