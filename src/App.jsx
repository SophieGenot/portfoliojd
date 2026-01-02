import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { MaNavbar} from "./components/layout/Header";
import { Mentions } from "./pages/Mentions";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/layout/Footer";
import { NotFound } from "./components/ui/NotFound";
import './style.css';
import './elements.css';


export default function App() {
  return (
    <BrowserRouter>
    <MaNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>  
      <Footer />
    </BrowserRouter>
  );
}
