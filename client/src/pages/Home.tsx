import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PILARES, MARCAS } from "@/data/grupo-mmb";
import { ArrowRight, TrendingUp, Shield, Cpu, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hub Administrativo e de Pós-Venda
              </h1>
              <p className="text-xl text-white/90">
                O Grupo MMB é o centro de excelência operacional que gerencia o pós-venda de 7 marcas do ecossistema de proteção veicular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/plataforma">
                  <Button size="lg" variant="secondary">
                    Conheça Nossa Plataforma <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/pos-venda">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Central de Pós-Venda
                  </Button>
                </Link>
              </div>
            </div>
            <img src="/images/hero-home.png" alt="Grupo MMB" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Plataforma Operacional</h2>
            <p className="text-xl text-gray-600">Três pilares integrados que garantem excelência</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "MMB FinOps", desc: "Gestão financeira rigorosa", id: "finops" },
              { icon: Shield, title: "MMB Ops", desc: "Operações e pós-venda eficientes", id: "ops" },
              { icon: Cpu, title: "MMB Tech", desc: "Tecnologia e segurança de dados", id: "tech" }
            ].map(({ icon: Icon, title, desc, id }) => (
              <Card key={id} className="group hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                  <Link href={`/plataforma#${id}`}>
                    <Button variant="link" className="p-0">Saiba mais <ArrowRight className="ml-1" size={16} /></Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Nosso Ecossistema</h2>
            <p className="text-xl text-gray-600">7 marcas especializadas em proteção veicular</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MARCAS.map((marca) => (
              <Card key={marca.nome} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{marca.nome}</h3>
                  <p className="text-gray-600 text-sm">{marca.descricao}</p>
                  <a href={marca.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary text-sm font-medium">
                    Visitar site <ExternalLink className="ml-1" size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/ecossistema">
              <Button size="lg" className="gradient-cta text-white">Conheça Todas as Marcas <ArrowRight className="ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-cta text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Precisa de Suporte?</h2>
          <p className="text-xl text-white/90 mb-8">Nossa Central de Pós-Venda está pronta para atender você</p>
          <Link href="/pos-venda">
            <Button size="lg" variant="secondary">Acessar Central de Pós-Venda <ArrowRight className="ml-2" /></Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}