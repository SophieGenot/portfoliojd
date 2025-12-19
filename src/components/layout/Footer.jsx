import { Container, Row, Col, Nav, Button } from "react-bootstrap";

const socialLinks = [
  { href: "https://github.com/SophieGenot", icon: "bi-github", label: "GitHub" },
  { href: "https://twitter.com/tonprofil", icon: "bi-twitter", label: "Twitter" },
  { href: "https://www.linkedin.com/in/sophie-g%C3%A9not-73bb3a1b4/", icon: "bi-linkedin", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-light py-0 fixed-bottom w-100 z-3">
      <Container>
        <Row>
          {/* SECTION 1 – Réseaux sociaux */}
          <Col xs={12} md={4} className="text-start">
            <h4>John Doe</h4>
            <ul className="list-unstyled mt-2">
              <li>40 rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>john.doe@gmail.com</li>
            </ul>

            <div className="d-flex justify-content-start gap-2 mt-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="link"
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="p-0"
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon} fs-4 social-icon`}></i>
                </Button>
              ))}
            </div>
          </Col>

          {/* SECTION 2 – Services */}
          <Col xs={12} md={4} className="text-start">
            <h4>Liens utiles</h4>
            <ul className="list-unstyled mt-2 liens-utiles">
              <li><Nav.Link href="#home">Home</Nav.Link></li>
              <li><Nav.Link href="#services">Services</Nav.Link></li>
              <li><Nav.Link href="#portfolio">Portfolio</Nav.Link></li>
              <li><Nav.Link href="#contact">Me contacter</Nav.Link></li>
              <li><Nav.Link href="#mentions">Mentions légales</Nav.Link></li>
            </ul>
          </Col>

          {/* SECTION 3 – À propos */}
          <Col xs={12} md={4} className="text-start">
            <h4>Mes dernières réalisations</h4>
            <ul className="list-unstyled mt-2 liens-utiles">
              <li><Nav.Link href="#portfolio">Fresh Food</Nav.Link></li>
              <li><Nav.Link href="#portfolio">Restaurant Akira</Nav.Link></li>
              <li><Nav.Link href="#portfolio">Espace bien-être</Nav.Link></li>
              <li><Nav.Link href="#portfolio">SEO</Nav.Link></li>
              <li><Nav.Link href="#portfolio">Création d'une API</Nav.Link></li>
              <li><Nav.Link href="#portfolio">Maquette d'un site</Nav.Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
