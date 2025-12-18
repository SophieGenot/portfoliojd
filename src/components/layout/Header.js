import {
  Navbar as BootstrapNavBar, Container, Nav, Card, Button } from "react-bootstrap";

export function MaNavbar() {
  return (
    <BootstrapNavBar expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <BootstrapNavBar.Brand href="/">John Doe</BootstrapNavBar.Brand>

        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavBar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavBar.Collapse>
      </Container>
    </BootstrapNavBar>
  );
}

export function CardProfile({ onOpenVisitCard }) {
  return (
    <Container className="mt-4">
      <Card className="text-center card-background">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
          <Card.Title className="text-white">
            Bonjour, je suis John Doe
          </Card.Title>
          <Card.Text className="text-white">
            <h1>Développeur web full stack</h1>
          </Card.Text>
          <Button variant="danger"  onClick={onOpenVisitCard}
          >En savoir plus</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
