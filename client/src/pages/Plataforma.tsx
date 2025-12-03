import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PILARES } from "@/data/grupo-mmb";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Plataforma() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nossa Plataforma Operacional</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Três pilares integrados que garantem excelência em gestão financeira, operações e tecnologia
          </p>
        </div>
      </section>

      {PILARES.map((pilar, idx) => (
        <section key={pilar.id} id={pilar.id} className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">{pilar.titulo}</h2>
                <h3 className="text-2xl text-primary font-semibold">{pilar.subtitulo}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{pilar.descricao}</p>
                <div className="space-y-4">
                  {pilar.destaques.map((destaque) => (
                    <Card key={destaque.titulo}>
                      <CardContent className="p-4 flex gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{destaque.titulo}</h4>
                          <p className="text-gray-600 text-sm">{destaque.descricao}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <img src={pilar.imagem} alt={pilar.titulo} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}