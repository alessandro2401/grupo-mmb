import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackToMainButton() {
  return (
    <a 
      href="https://www.administradoramutual.com.br/" 
      className="inline-block"
    >
      <Button 
        variant="outline" 
        size="sm"
        className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar ao Site Principal
      </Button>
    </a>
  );
}
