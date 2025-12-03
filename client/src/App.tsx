import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Plataforma from "./pages/Plataforma";
import Ecossistema from "./pages/Ecossistema";
import PosVenda from "./pages/PosVenda";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/plataforma"} component={Plataforma} />
      <Route path={"/ecossistema"} component={Ecossistema} />
      <Route path={"/pos-venda"} component={PosVenda} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/contato"} component={Contato} />
      <Route path={"/privacidade"} component={Privacidade} />
      <Route path={"/termos"} component={Termos} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
