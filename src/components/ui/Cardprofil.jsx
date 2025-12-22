import { Card, Button, Container } from "react-bootstrap";

export function CardProfile({ onOpenVisitCard }) {
  return (
    <Container className="my-5">
      <Card className="text-center card-background rounded-0">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <Card.Title as="h2" className="text-white">
           Bonjour, je suis John Doe
          </Card.Title>
          <Card.Title as="h1" className="text-white">
            Développeur web full stack
          </Card.Title>
          <Button variant="danger"  onClick={onOpenVisitCard}
          >En savoir plus</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}