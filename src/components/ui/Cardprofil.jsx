import { Card, Button, Container } from "react-bootstrap";

export function CardProfile({ onOpenVisitCard }) {
  return (
    <Container className="my-5">
      <Card className="text-center card-background rounded-0">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <Card.Title className="text-white">
           <h2>Bonjour, je suis John Doe</h2> 
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