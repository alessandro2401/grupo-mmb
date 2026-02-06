import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, PieChart, Repeat } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ModeloEconomico() {
  const fontesReceita = [
    {
      unidade: "SOLUÇÕES CORRETORA",
      fonte: "Comissionamento",
      descricao: "Comissões sobre intermediação de seguros tradicionais (auto, residencial, vida, empresarial).",
      tipo: "Direta"
    },
    {
      unidade: "POTERE SEGURO AUTO",
      fonte: "Prêmios de Seguro",
      descricao: "Receita recorrente mensal de assinaturas de seguro auto com pagamento flexível.",
      tipo: "Direta"
    },
    {
      unidade: "POTERE CONSÓRCIO",
      fonte: "Taxa de Administração",
      descricao: "Taxa sobre administração de grupos de consórcio para aquisição de bens.",
      tipo: "Direta"
    },
    {
      unidade: "MOVIMENTO MAIS BRASIL",
      fonte: "Taxa de Administração",
      descricao: "Taxa sobre gestão operacional da associação de proteção veicular (modelo mutualista).",
      tipo: "Direta"
    },
    {
      unidade: "MAIS BRASIL MOTORCYCLE",
      fonte: "Taxa de Administração",
      descricao: "Taxa sobre gestão de proteção para motocicletas de alto valor.",
      tipo: "Direta"
    },
    {
      unidade: "ALPHA PROTEÇÕES",
      fonte: "Comissionamento",
      descricao: "Comissões sobre vendas de produtos de todas as unidades do ecossistema.",
      tipo: "Direta"
    },
    {
      unidade: "MOVIMENTO MAIS SEGURO",
      fonte: "Geração de Leads",
      descricao: "Redução de CAC global ao qualificar e direcionar leads para o hub comercial.",
      tipo: "Indireta"
    },
    {
      unidade: "JUNTOS POD+",
      fonte: "Brand Equity",
      descricao: "Fortalecimento da marca e autoridade institucional, facilitando conversões.",
      tipo: "Indireta"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Modelo Econômico</h1>
            <p className="text-2xl text-white/95 font-semibold mb-4">
              Fontes de Receita e Escalabilidade
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              O modelo econômico do GRUPO MMB foi desenhado para maximizar margens operacionais 
              por meio de diluição de custos e múltiplas fontes de receita, garantindo previsibilidade 
              financeira e crescimento sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Lógica Econômica */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <PieChart className="text-primary" size={32} />
                Lógica de Monetização
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  O GRUPO MMB opera com um modelo de <strong>múltiplas fontes de receita</strong>, 
                  combinando receitas diretas (comissionamento, prêmios, taxas de administração) 
                  com receitas indiretas (redução de CAC, fortalecimento de marca, cross-selling).
                </p>
                <p>
                  A predominância de <strong>receitas recorrentes</strong> (assinaturas mensais, 
                  taxas de administração contínuas) confere previsibilidade de caixa e estabilidade 
                  financeira, reduzindo a dependência de vendas pontuais e facilitando o planejamento 
                  de longo prazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fontes de Receita por Unidade */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Matriz de Receitas por Unidade de Negócio</h2>
            <div className="space-y-3">
              {fontesReceita.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Unidade</p>
                        <p className="font-bold text-primary text-sm">{item.unidade}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Fonte</p>
                        <p className="font-semibold text-gray-900 text-sm">{item.fonte}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Descrição</p>
                        <p className="text-gray-700 text-sm">{item.descricao}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tipo</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          item.tipo === 'Direta' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.tipo}
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

      {/* Diluição de Custos */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-primary" size={32} />
              Diluição de Custos e Ganhos de Escala
            </h2>
            <Card className="mb-8">
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A estrutura de <strong>centro de serviços compartilhados</strong> (Hub Administrativo) 
                  permite que o GRUPO MMB dilua custos fixos à medida que o ecossistema cresce. 
                  Funções como finanças, jurídico, tecnologia, compliance e recursos humanos são 
                  centralizadas, evitando duplicação de estruturas e reduzindo o custo marginal 
                  de expansão.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Quando uma nova unidade de negócio é adicionada ou uma unidade existente dobra 
                  de tamanho, <strong>não é necessário dobrar a equipe administrativa</strong>. 
                  Isso gera ganhos de escala significativos e melhora as margens operacionais 
                  conforme o grupo amadurece.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Custos Fixos Compartilhados</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Equipe de finanças e contabilidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Departamento jurídico e compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Infraestrutura tecnológica (servidores, sistemas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recursos humanos e treinamento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Custos Variáveis por Unidade</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comissões de vendas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Custos de aquisição de clientes (CAC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sinistros e indenizações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Atendimento ao cliente (escala com base ativa)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Escalabilidade e Previsibilidade */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Repeat className="text-primary" size={32} />
              Escalabilidade e Previsibilidade Financeira
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <DollarSign className="text-primary" size={32} />
                  <h3 className="text-xl font-bold">Receitas Recorrentes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Modelo de assinatura mensal e taxas de administração contínuas garantem 
                    previsibilidade de fluxo de caixa e facilitam projeções financeiras.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <TrendingUp className="text-primary" size={32} />
                  <h3 className="text-xl font-bold">Crescimento Escalável</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Adição de novas unidades ou expansão das existentes não requer aumento 
                    proporcional de custos administrativos, melhorando margens.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <PieChart className="text-primary" size={32} />
                  <h3 className="text-xl font-bold">Diversificação de Risco</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Múltiplas fontes de receita em diferentes segmentos reduzem a dependência 
                    de um único produto ou mercado.
                  </p>
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
