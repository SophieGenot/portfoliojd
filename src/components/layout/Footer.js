import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4 position-md-fixed bottom-0 w-100 z-3">
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
            <div className="d-flex justify-content-start gap-3 mt-2">
              <i className="bi bi-github fs-4 social-icon"></i>
              <i className="bi bi-twitter fs-4 social-icon"></i>
              <i className="bi bi-linkedin fs-4 social-icon"></i>
            </div>
          </Col>

          {/* SECTION 2 – Services */}
          <Col xs={12} md={4} className="text-start">
            <h4>Liens utiles</h4>
            <ul className="list-unstyled mt-2 liens-utiles">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </Col>

          {/* SECTION 3 – À propos */}
          <Col xs={12} md={4} className="text-start">
            <h4>Mes dernières réalisations</h4>
            <ul className="list-unstyled mt-2">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
