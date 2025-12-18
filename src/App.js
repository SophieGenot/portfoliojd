import { useState } from "react";
import { MaNavbar, CardProfile } from "./components/layout/Header";
import { GridCards, VisitCard, Portfolio, Services, ContactBlock } from "./components/ui/Cards";
import { AccordionM } from "./components/ui/Accordion";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const [showVisitCard, setShowVisitCard] = useState(false);
  return (
    <>
      <MaNavbar />
      <CardProfile onOpenVisitCard={() => setShowVisitCard(true)}/>
      <GridCards />
      <AccordionM />
      <VisitCard  show={showVisitCard} onClose={() => setShowVisitCard(false)}/>
      <Services />
      <Portfolio />
      <ContactBlock />
      <Footer />
    </>
  );
}
