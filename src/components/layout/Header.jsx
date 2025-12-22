import { Navbar as BootstrapNavBar, Container, Nav } from "react-bootstrap";

export function MaNavbar() {
  return (
    <BootstrapNavBar expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container fluid>
        <BootstrapNavBar.Brand href="/">John Doe</BootstrapNavBar.Brand>

        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavBar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mentions">Mentions légales</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           
          </Nav>
        </BootstrapNavBar.Collapse>
      </Container>
    </BootstrapNavBar>
  );
}


