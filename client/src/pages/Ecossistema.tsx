import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MARCAS } from "@/data/grupo-mmb";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Ecossistema() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nosso Ecossistema</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            7 marcas especializadas em proteção veicular, unidas por uma gestão administrativa de excelência
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARCAS.map((marca) => (
              <Card key={marca.nome} className="group hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {marca.nome}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{marca.descricao}</p>
                  <a href={marca.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group/btn">
                      Visitar Site <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <img src="/images/ecosystem-network.png" alt="Ecossistema MMB" className="rounded-lg shadow-2xl" />
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Um Ecossistema Integrado</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Todas as marcas compartilham a mesma infraestrutura administrativa, garantindo eficiência, 
                transparência e qualidade no atendimento ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}