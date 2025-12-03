import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold text-gray-900">Página Não Encontrada</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button size="lg" className="gradient-cta text-white">
            <Home className="mr-2" /> Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}