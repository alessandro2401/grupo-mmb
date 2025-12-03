import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CONTATO } from "@/data/grupo-mmb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos à disposição para esclarecer dúvidas e fornecer informações sobre nossos serviços
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Endereço", value: CONTATO.endereco },
                  { icon: Phone, label: "Telefone", value: CONTATO.telefone },
                  { icon: Mail, label: "E-mail", value: CONTATO.email },
                  { icon: Clock, label: "Horário", value: CONTATO.horario }
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
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
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input id="assunto" value={formData.assunto} onChange={(e) => setFormData({...formData, assunto: e.target.value})} required />
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea id="mensagem" rows={5} value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} required />
                  </div>
                  <Button type="submit" className="w-full gradient-cta text-white" size="lg">
                    Enviar Mensagem
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