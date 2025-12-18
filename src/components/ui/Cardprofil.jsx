import { Container, Card, Button } from "react-bootstrap";

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