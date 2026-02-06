import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PILARES_ESTRATEGICOS, PILARES_OPERACIONAIS, MARCAS, HUBS } from "@/data/grupo-mmb";
import { ArrowRight, TrendingUp, Shield, Cpu, ExternalLink, Building2, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                GRUPO MMB
              </h1>
              <p className="text-2xl font-semibold text-white/95">
                Holding e Núcleo de Governança
              </p>
              <p className="text-xl text-white/90">
                Ecossistema integrado de proteção e serviços financeiros, estruturado em dois hubs operacionais com governança sólida e estratégia de crescimento sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/arquitetura">
                  <Button size="lg" variant="secondary">
                    Entenda a Arquitetura <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/ecossistema">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Conheça o Ecossistema
                  </Button>
                </Link>
              </div>
            </div>
            <img src="/images/hero-home.png" alt="GRUPO MMB" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Pilares Estratégicos (Tese de Investimento) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Tese de Investimento</h2>
            <p className="text-xl text-gray-600">Três pilares centrais que fundamentam a estratégia do GRUPO MMB</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PILARES_ESTRATEGICOS.map((pilar) => (
              <Card key={pilar.id} className="group hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{pilar.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed">{pilar.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitetura de Dois Hubs */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Arquitetura de Dois Hubs</h2>
            <p className="text-xl text-gray-600">Segregação clara entre funções de estabilidade e funções de crescimento</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hub Administrativo */}
            <Card className="group hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{HUBS.administrativo.nome}</h3>
                    <p className="text-gray-600 font-medium">{HUBS.administrativo.titulo}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{HUBS.administrativo.descricao}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-gray-900">Responsabilidades:</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {HUBS.administrativo.responsabilidades.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/plataforma">
                  <Button variant="outline" className="w-full">
                    Ver Pilares Operacionais <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hub Comercial */}
            <Card className="group hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{HUBS.comercial.nome}</h3>
                    <p className="text-gray-600 font-medium">{HUBS.comercial.titulo}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{HUBS.comercial.descricao}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-gray-900">Responsabilidades:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {HUBS.comercial.responsabilidades.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/ecossistema">
                  <Button variant="outline" className="w-full">
                    Ver Unidades de Negócio <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecossistema de Marcas */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Ecossistema Integrado</h2>
            <p className="text-xl text-gray-600">Unidades especializadas que se complementam estrategicamente</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MARCAS.map((marca) => (
              <Card key={marca.nome} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-3">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img 
                      src={marca.logo} 
                      alt={`Logo ${marca.nome}`}
                      className="max-h-14 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{marca.nome}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">{marca.papel}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{marca.descricao}</p>
                  <a href={marca.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary text-sm font-medium">
                    Visitar site <ExternalLink className="ml-1" size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/ecossistema">
              <Button size="lg" className="gradient-cta text-white">
                Entenda o Funil Integrado <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Pós-Venda */}
      <section className="py-20 gradient-cta text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Central de Pós-Venda</h2>
          <p className="text-xl text-white/90 mb-8">
            Atendimento unificado para todas as marcas do ecossistema
          </p>
          <Link href="/pos-venda">
            <Button size="lg" variant="secondary">
              Acessar Central <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
