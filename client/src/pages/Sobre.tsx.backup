import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { VALORES } from "@/data/grupo-mmb";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Lightbulb, Handshake } from "lucide-react";

const iconMap: Record<string, any> = { award: Award, eye: Eye, lightbulb: Lightbulb, handshake: Handshake };

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre o Grupo MMB</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conheça nossa história, valores e compromisso com a excelência operacional
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O Grupo MMB nasceu da necessidade de centralizar e profissionalizar a gestão administrativa 
                e de pós-venda de múltiplas marcas de proteção veicular. Ao longo dos anos, desenvolvemos 
                uma plataforma integrada que une tecnologia, processos eficientes e uma equipe altamente 
                qualificada para garantir a melhor experiência aos clientes de todas as marcas do ecossistema.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser o hub administrativo de referência no setor de proteção veicular, garantindo excelência 
                operacional, transparência financeira e suporte de qualidade para todas as marcas do ecossistema.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consolidar-se como o maior e mais eficiente hub administrativo de proteção veicular do Brasil, 
                reconhecido pela inovação tecnológica e pela qualidade no atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Princípios que guiam todas as nossas ações</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALORES.map((valor) => {
              const Icon = iconMap[valor.titulo.toLowerCase()] || Award;
              return (
                <Card key={valor.titulo} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{valor.titulo}</h3>
                    <p className="text-gray-600">{valor.descricao}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}