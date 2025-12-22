import { useState } from "react";
import { MaNavbar } from "./components/layout/Header";
import { CardProfile } from "./components/ui/Cardprofil";
import { VisitCard } from "./pages/Visitcard";
import { Skills } from "./components/ui/Skills";
import { LegalesMentions } from "./components/ui/LegalesMentions";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/layout/Footer";
import './style.css';
import './elements.css';


export default function App() {
  const [showVisitCard, setShowVisitCard] = useState(false);
  return (
    <>
      <section id="home">
      <MaNavbar />
      <CardProfile onOpenVisitCard={() => setShowVisitCard(true)}/>   
      </section>  
      <VisitCard  show={showVisitCard} onClose={() => setShowVisitCard(false)}/>
      <Skills />
      <LegalesMentions />
      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="services">
        <Services />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}
