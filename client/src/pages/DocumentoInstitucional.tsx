import { FileText, Download } from "lucide-react";

export default function DocumentoInstitucional() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001D3F] to-[#274A78] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Documento Institucional
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Estruturação Operacional e Racional Estratégico
            </p>
            <a
              href="/GRUPOMMB_Apresentacao_Institucional_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#001D3F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Download className="w-5 h-5" />
              Baixar PDF Completo
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#001D3F] mb-6 pb-3 border-b-2 border-[#274A78]">
              1. Visão Executiva e Tese de Investimento
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                O GRUPO MMB estrutura-se como um ecossistema integrado de soluções em mobilidade, multiproteção e
                serviços financeiros, operando sob uma arquitetura organizacional que separa de forma clara a gestão de
                risco, a governança institucional e a tração comercial. Diferentemente de operadores monolineares
                tradicionais, o GRUPO MMB adota uma estratégia de diversificação controlada, atuando de forma
                complementar nos mercados de seguro regulado, mutualismo associativo, consórcios e canais próprios de
                geração de demanda e construção de marca.
              </p>
              <p>
                A tese de investimento do GRUPO MMB baseia-se em três pilares centrais: eficiência operacional por meio
                de estruturas compartilhadas, mitigação de riscos regulatórios e jurídicos via segregação funcional, e
                maximização do Life Time Value do cliente por meio de um funil proprietário de aquisição e retenção. Esse
                funil direciona cada perfil de cliente para a entidade mais adequada dentro do ecossistema, respeitando
                capacidade contributiva, apetite a risco e exigências regulatórias, ampliando a captura de valor ao longo do
                tempo.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#001D3F] mb-6 pb-3 border-b-2 border-[#274A78]">
              2. Arquitetura Organizacional: Modelo de Dois Hubs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
              <p>
                A governança do GRUPO MMB é estruturada a partir da segregação clara entre funções de estabilidade e
                funções de crescimento, organizadas em dois grandes hubs operacionais, eliminando sobreposições,
                conflitos de interesse e fragilidades regulatórias.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-[#274A78] mb-4">
                2.1 Hub Administrativo: GRUPO MMB
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O GRUPO MMB atua como holding institucional e núcleo de governança do ecossistema. Não possui
                atuação comercial direta, concentrando-se exclusivamente na estabilidade financeira, controle de riscos e
                eficiência operacional. Suas responsabilidades incluem a centralização de finanças, contabilidade, jurídico,
                recursos humanos, compliance e controles internos. A centralização administrativa permite diluição de
                custos fixos, ganhos de escala e crescimento das unidades de negócio sem aumento proporcional de
                despesas estruturais.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#274A78] mb-4">
                2.2 Hub Comercial: ALPHA PROTEÇÕES
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A ALPHA PROTEÇÕES opera como o hub comercial do ecossistema, sendo responsável pela tração,
                distribuição e inovação nos canais de venda. Atua de forma agnóstica em relação aos produtos, focando
                exclusivamente em conversão, tecnologia e eficiência comercial. A ALPHA PROTEÇÕES comercializa o
                portfólio das diferentes fábricas de produto do grupo, priorizando velocidade de conversão e processos
                digitais.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#001D3F] mb-6 pb-3 border-b-2 border-[#274A78]">
              3. Unidades de Negócio e Integração da Cadeia de Valor
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
              <p>
                O ecossistema do GRUPO MMB é composto por unidades especializadas, cada uma desenhada para
                atender perfis distintos de risco, renda e momento de vida, sem competição interna e com forte integração
                operacional.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.1 MOVIMENTO MAIS SEGURO</h3>
                <p className="text-gray-700">
                  Atua como topo de funil e núcleo de inteligência de dados do ecossistema. Funciona como agregador de
                  leads e portal de conteúdo, sem realizar subscrição de risco, reduzindo o custo global de aquisição.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.2 ALPHA PROTEÇÕES</h3>
                <p className="text-gray-700">
                  Como hub de vendas, opera a comercialização de todo o portfólio do grupo, priorizando produtos de decisão
                  rápida e baixa fricção no canal digital para maximizar a conversão inicial.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.3 SOLUÇÕES CORRETORA</h3>
                <p className="text-gray-700">
                  Representa o braço técnico e regulado do grupo no mercado segurador tradicional, intermediando riscos
                  complexos e produtos de maior valor agregado para clientes B2B e B2C de alta renda.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.4 POTERE SEGURO AUTO E CONSÓRCIO</h3>
                <p className="text-gray-700">
                  A Potere Seguro Auto opera produtos massificados sob lógica de assinatura mensal, enquanto a Potere
                  Consórcio atua no planejamento financeiro e aquisição de bens, gerando receitas recorrentes.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.5 MOVIMENTO MAIS BRASIL</h3>
                <p className="text-gray-700">
                  Constitui o braço mutualista do ecossistema, operando como associação de proteção veicular e plataforma
                  de benefícios, com modelo baseado no rateio de despesas.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.6 MAIS BRASIL MOTORCYCLE</h3>
                <p className="text-gray-700">
                  Atua no nicho de motocicletas de maior valor, utilizando uma estratégia de comunidade e pertencimento
                  para reduzir o churn e criar fidelização emocional.
                </p>
              </div>

              <div className="border-l-4 border-[#274A78] pl-6">
                <h3 className="text-xl font-bold text-[#001D3F] mb-2">3.7 JUNTOS POD+</h3>
                <p className="text-gray-700">
                  Funciona como canal de mídia, conteúdo e educação de mercado, fortalecendo o brand equity do GRUPO
                  MMB e construindo autoridade institucional.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-[#001D3F] mb-6 pb-3 border-b-2 border-[#274A78]">
              4. Posicionamento Regulatório, Modelo Econômico e Conclusão
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#274A78] mb-4">
                Posicionamento Regulatório e Mitigação de Riscos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O GRUPO MMB estrutura suas operações de forma aderente ao ambiente regulatório brasileiro. Há
                segregação clara entre a venda de seguros regulados (Soluções Corretora e Potere Seguro Auto) e a
                operação mutualista (Movimento Mais Brasil), o que impede confusão patrimonial e fortalece a governança.
                A atuação em produtos regulados observa integralmente as normas da SUSEP, enquanto o braço
                associativo adota práticas de transparência e controle.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#274A78] mb-4">
                Modelo Econômico e Escalabilidade
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O modelo econômico foi desenhado para maximizar margens operacionais por meio de diluição de custos e
                múltiplas fontes de receita (comissionamento, taxas de administração, serviços agregados). A estrutura de
                centro de serviços compartilhados permite crescimento com custo marginal reduzido, e a predominância de
                receitas recorrentes confere previsibilidade de caixa e estabilidade financeira.
              </p>
            </div>

            <div className="bg-[#001D3F] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Conclusão</h3>
              <p className="leading-relaxed">
                O GRUPO MMB posiciona-se como uma plataforma integrada de proteção e serviços financeiros,
                combinando governança sólida, estratégia de distribuição escalável e atuação multicanal. A
                complementaridade entre as unidades permite capturar valor em diferentes perfis de renda e risco do
                mercado brasileiro, com maturidade operacional e visão de longo prazo.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
