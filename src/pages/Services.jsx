import { Container, Card, Col, Row } from "react-bootstrap";

export function Services() { // Offre de services
  const propositions = [
    { id: 1, 
      title: "UX Design", 
      text: `L'UX Design est une discipline qui consiste à concevoir des produits 
(sites web, applications mobiles, logiciels, objets connectés, etc.)
en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience 
utilisateur la plus fluide et agréable possible.`,
      icon: "bi bi-brush" },
    { id: 2, 
      title: "Développement web", 
      text: `Le développement de sites web consiste à créer des sites internet 
en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
et des frameworks (React, Angular, etc.)`,
      icon: "bi bi-code-slash" },
    { id: 3, 
      title: "Référencement", 
      text: `Le référencement naturel (SEO) est une technique qui consiste à optimiser 
un site web pour le faire remonter dans les résultats des moteurs de recherche 
(Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.`,
      icon: "bi bi-search" },
  ];
return (
  <div>
    <img
      src="/assets/img/banner.jpg"
      alt="Bannière"
      className="img-fluid w-100"
      style={{ maxHeight: '400px', objectFit: 'cover' }} />
   
    <Container className="my-5">
      <h2 className="text-center mb-4"><strong>Mon offre de services</strong></h2>
       <div className="text-center mb-4">Voici les prestations sur 
lesquelles je peux intervenir</div>
       <hr className="primary hrtitle" /><br />
      <Row>
        {propositions.map((proposition) => (
          <Col key={proposition.id} xs={12} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  height: "200px",      // Hauteur de la zone icône
                  fontSize: "5rem",     // Taille de l'icône
                  backgroundColor: "#f0f0f0" // Couleur de fond optionnelle
                }}
              >
                <i className={proposition.icon}></i>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proposition.title}</Card.Title>
                <Card.Text>{proposition.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
}