import { useState } from "react";
import { CardProfile } from "../components/ui/Cardprofil";
import { VisitCard } from "../components/ui/Visitcard";
import { Skills } from "../components/ui/Skills";

export function Home() {
  const [showVisitCard, setShowVisitCard] = useState(false);

  return (
    <>
      <CardProfile onOpenVisitCard={() => setShowVisitCard(true)} />
      <VisitCard show={showVisitCard} onClose={() => setShowVisitCard(false)} />
      <Skills />
    </>
  );
}
