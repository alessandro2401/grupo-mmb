import { Card, CardContent } from "@/components/ui/card";
import { HUBS, PILARES_OPERACIONAIS } from "@/data/grupo-mmb";
import { Building2, Users, ArrowRight, Shield, TrendingUp, Cpu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Arquitetura() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Arquitetura Organizacional</h1>
            <p className="text-2xl text-white/95 font-semibold mb-4">
              Modelo de Dois Hubs
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              A governança do GRUPO MMB é estruturada a partir da segregação clara entre funções 
              de estabilidade e funções de crescimento, organizadas em dois grandes hubs operacionais, 
              eliminando sobreposições, conflitos de interesse e fragilidades regulatórias.
            </p>
          </div>
        </div>
      </section>

      {/* Visão Geral da Arquitetura */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Segregação Funcional Estratégica</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A arquitetura de dois hubs permite que o GRUPO MMB opere com eficiência máxima, 
              separando claramente as responsabilidades de governança, controle e estabilidade 
              (Hub Administrativo) das responsabilidades de tração comercial, vendas e crescimento 
              (Hub Comercial).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Essa separação não é apenas organizacional, mas também <strong>regulatória e jurídica</strong>, 
              garantindo conformidade com as exigências da SUSEP e da Lei Complementar 213 de 2025, 
              além de fortalecer a governança e reduzir riscos operacionais.
            </p>
          </div>

          {/* Diagrama Visual dos Hubs */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Hub Administrativo */}
            <Card className="border-2 border-primary/30 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-primary/20">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="text-primary" size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{HUBS.administrativo.nome}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{HUBS.administrativo.titulo}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{HUBS.administrativo.descricao}</p>
                
                <div className="space-y-3">
                  <p className="font-bold text-sm text-gray-900 uppercase tracking-wide">Responsabilidades Centralizadas:</p>
                  <div className="grid gap-2">
                    {HUBS.administrativo.responsabilidades.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Shield className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/plataforma">
                    <Button className="w-full" size="lg">
                      Ver Pilares Operacionais <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Hub Comercial */}
            <Card className="border-2 border-primary/30 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-primary/20">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{HUBS.comercial.nome}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{HUBS.comercial.titulo}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{HUBS.comercial.descricao}</p>
                
                <div className="space-y-3">
                  <p className="font-bold text-sm text-gray-900 uppercase tracking-wide">Responsabilidades Comerciais:</p>
                  <div className="grid gap-2">
                    {HUBS.comercial.responsabilidades.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/ecossistema">
                    <Button className="w-full" size="lg">
                      Ver Unidades de Negócio <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios da Arquitetura */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefícios da Segregação Funcional</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Eficiência Operacional</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A centralização de funções administrativas permite diluição de custos fixos e 
                    ganhos de escala. Crescimento das unidades de negócio não implica aumento 
                    proporcional de despesas estruturais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Mitigação de Riscos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Separação clara entre governança e operação comercial reduz riscos regulatórios, 
                    jurídicos e operacionais. Facilita auditorias e fortalece a conformidade.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Foco Estratégico</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cada hub pode se concentrar em suas competências centrais sem distrações. 
                    O Hub Administrativo foca em estabilidade; o Hub Comercial foca em crescimento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">Escalabilidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Novas unidades de negócio podem ser adicionadas ao ecossistema sem necessidade 
                    de replicar estruturas administrativas, acelerando a expansão.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Operacionais do Hub Administrativo */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Pilares Operacionais do Hub Administrativo</h2>
            <p className="text-xl text-gray-600">
              Três áreas especializadas que garantem a excelência operacional do ecossistema
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILARES_OPERACIONAIS.map((pilar, index) => {
              const icons = [TrendingUp, Shield, Cpu];
              const Icon = icons[index];
              
              return (
                <Card key={pilar.id} className="group hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pilar.titulo}</h3>
                      <p className="text-sm font-semibold text-primary mb-3">{pilar.subtitulo}</p>
                      <p className="text-gray-700 leading-relaxed text-sm">{pilar.descricao}</p>
                    </div>
                    <Link href={`/plataforma#${pilar.id}`}>
                      <Button variant="outline" className="w-full">
                        Saiba mais <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
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
