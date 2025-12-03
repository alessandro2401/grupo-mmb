import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, AlertCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function PosVenda() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Central de Pós-Venda</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos aqui para ajudar você com boletos, sinistros e qualquer dúvida sobre sua proteção veicular
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: FileText, title: "2ª Via de Boleto", desc: "Solicite a segunda via do seu boleto de forma rápida e fácil" },
              { icon: AlertCircle, title: "Abrir Sinistro", desc: "Registre seu sinistro e acompanhe todo o processo" },
              { icon: Phone, title: "Suporte 24h", desc: "Atendimento disponível 24 horas por dia, 7 dias por semana" }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Formulário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" value={formData.telefone} onChange={(e) => setFormData({...formData, telefone: e.target.value})} required />
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea id="mensagem" rows={5} value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} required />
                  </div>
                  <Button type="submit" className="w-full gradient-cta text-white" size="lg">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}