import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
          <p className="text-xl text-white/90 mt-4">Última atualização: Janeiro de 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Informações que Coletamos</h2>
            <p>
              O Grupo MMB coleta informações necessárias para prestar nossos serviços de gestão administrativa e pós-venda. 
              Isso inclui dados pessoais fornecidos voluntariamente através de formulários de contato e atendimento.
            </p>

            <h2>2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul>
              <li>Prestar serviços de suporte e atendimento ao cliente</li>
              <li>Processar solicitações de boletos e sinistros</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Comunicar atualizações importantes sobre nossos serviços</li>
            </ul>

            <h2>3. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais 
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. 
              Podemos compartilhar dados apenas quando necessário para prestação de serviços ou quando exigido por lei.
            </p>

            <h2>5. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, 
              entre em contato conosco através dos canais disponíveis na página de Contato.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a experiência de navegação. Você pode configurar seu navegador para 
              recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h2>7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos revisar esta página regularmente 
              para se manter informado sobre como protegemos suas informações.
            </p>

            <h2>8. Contato</h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade, entre em contato através do e-mail: 
              <strong> contato@grupommb.com</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
