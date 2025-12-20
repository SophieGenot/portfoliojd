import { useState } from "react";
import { Container, Card, Col, Row, Button, ListGroup, Form, Alert } from "react-bootstrap";

export function Contact() {
  // États pour chaque champ
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // État pour le message d'erreur

  const handleSubmit = (e) => {
    e.preventDefault();

    // Les champs sont tous obligatoires
    if (!nom || !email || !telephone || !sujet || !message) {
      setError("Merci de remplir tous les champs avant d'envoyer le formulaire !");
      return;
    }

    // Si tout ok
    setError(""); // efface le message
    alert("Message envoyé avec succès !");
    
    // réinitialisation de formulaire
    setNom(""); setEmail(""); setTelephone(""); setSujet(""); setMessage("");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4"> <strong>Contact</strong></h2>
      <div className="text-center mb-4">
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </div>
      <hr className="primary hrtitle" /><br />
      <Row xs={1} md={1} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Row>
                {/* Colonne 1 : Formulaire */}
                <Col md={6} className="mb-3 mb-md-0">
                  <Card.Title>Formulaire de contact</Card.Title>
                  <hr className="primary" />
                  {/* Message d'erreur */}
                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Votre nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Votre adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Votre numéro de téléphone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Sujet"
                        value={sujet}
                        onChange={(e) => setSujet(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Votre message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>

                    <Button type="submit">Envoyer</Button>
                  </Form>
                </Col>

                {/* Colonne 2 : Coordonnées + carte */}
                <Col md={6}>
                  <Card.Title>Mes coordonnées</Card.Title>
                   <hr className="primary" />
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item>John Doe</ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-map me-2"></i>
                       40 rue Laure Diebold
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-geo-alt me-2"></i>
                       69009 Lyon, France
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-phone me-2"></i>
                       10 20 30 40 50
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-envelope-at me-2"></i>
                       john.doe@gmail.com
                    </ListGroup.Item>
                  </ListGroup>
                 <div className="image-container">
                  <img src="/assets/img/adress-jd.jpg"
                  alt="plan de l'adresse de John Doe"
                  className="img-fluid" />
                 </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}