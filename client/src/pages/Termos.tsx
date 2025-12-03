import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Termos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Termos de Uso</h1>
          <p className="text-xl text-white/90 mt-4">Última atualização: Janeiro de 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você aceita e concorda em cumprir estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
              O Grupo MMB é um hub administrativo e de pós-venda que gerencia operações de 7 marcas do ecossistema 
              de proteção veicular. Este site fornece informações sobre nossos serviços e permite contato com nossa equipe.
            </p>

            <h2>3. Uso Permitido</h2>
            <p>
              Você concorda em usar este site apenas para fins legítimos e de maneira que não infrinja os direitos de 
              terceiros ou restrinja ou iniba o uso e aproveitamento deste site por qualquer outra pessoa.
            </p>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones e imagens, é propriedade do Grupo MMB 
              ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
            </p>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>
              O Grupo MMB não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais 
              resultantes do uso ou incapacidade de usar este site.
            </p>

            <h2>6. Links para Sites de Terceiros</h2>
            <p>
              Este site pode conter links para sites de terceiros (marcas do ecossistema). O Grupo MMB não é responsável 
              pelo conteúdo ou práticas de privacidade desses sites.
            </p>

            <h2>7. Modificações do Serviço</h2>
            <p>
              Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o site ou qualquer 
              parte dele, com ou sem aviso prévio.
            </p>

            <h2>8. Alterações nos Termos</h2>
            <p>
              Podemos revisar estes Termos de Uso a qualquer momento. Ao continuar a usar o site após tais alterações, 
              você concorda em ficar vinculado aos termos revisados.
            </p>

            <h2>9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada 
              a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>

            <h2>10. Contato</h2>
            <p>
              Para questões sobre estes Termos de Uso, entre em contato através do e-mail: 
              <strong> contato@grupommb.com</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
