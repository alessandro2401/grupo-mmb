import { marcasEcossistema } from "@/data/grupo-mmb-updated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Ecossistema() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ecossistema de Marcas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Sete marcas distintas, cada uma com sua essência e posicionamento único, 
            todas comercializadas pela <strong>Alpha Proteções</strong> e administradas pelo <strong>Grupo MMB</strong>.
          </p>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marcasEcossistema.map((marca) => (
              <Card key={marca.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{marca.nome}</CardTitle>
                  <CardDescription className="text-lg italic">
                    "{marca.slogan}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{marca.descricao}</p>
                  <Button asChild variant="default" className="w-full">
                    <a href={marca.url} target="_blank" rel="noopener noreferrer">
                      Visitar Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Nota Importante */}
          <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-8 rounded-lg">
            <p className="text-center text-lg font-semibold">
              <span className="text-orange-600">Alpha Proteções</span> VENDE todas as marcas • 
              <span className="text-blue-600"> Grupo MMB</span> ADMINISTRA o pós-venda de todas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
