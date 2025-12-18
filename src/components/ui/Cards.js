import { Container, Card, Col, Row, ProgressBar, Button, Modal, Image, ListGroup, Form } from "react-bootstrap";

export function GridCards() {
  return (
    <Row xs={1} md={1} className="g-4">
      <Col>
        <Card>
          <Card.Body>
            <Row>
              {/* Colonne 1 : À propos */}
              <Col md={6} className="mb-3 mb-md-0">
                <Card.Title><h2>À propos</h2></Card.Title>
                <Card.Img
                  variant="top"
                  src="/assets/img/john-doe-about.jpg"
                  className="mb-3"
                />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vel risus eget eros fermentum convallis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Col>

              {/* Colonne 2 : Compétences */}
              <Col md={6}>
                <Card.Title><h2>Mes compétences</h2></Card.Title>
                <h3>HTML5 90%</h3>
                <ProgressBar variant="danger" now={90} className="mb-2" />
                <h3>CSS3 80%</h3>
                <ProgressBar variant="info" now={80} className="mb-2" />
                <h3>JAVASCRIPT 70%</h3>
                <ProgressBar variant="warning" now={70} className="mb-2" />
                <h3>PHP 60%</h3>
                <ProgressBar variant="success" now={60} className="mb-3" />
                <h3>REACT 50%</h3>
                <ProgressBar now={50} className="mb-3" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export function VisitCard({ show, onClose }) { // carte de visite GitHub
  return (
    <Modal show={show} onHide={onClose} centered  dialogClassName="visit-card-modal">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <Row className="align-items-center">
          {/* Colonne image */}
          <Col xs={4} className="text-center">
            <Image
              src="/assets/img/avatar-github.jpg"
              style={{ maxWidth: '120px' }} // image plus grande
            />
          </Col>

          {/* Colonne texte */}
          <Col xs={8}>
            <p>
              <i className="bi bi-person me-2"></i>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fw-bold"
              >
                John Doe
              </a>
            </p>
            <hr className="bg-light" />
            <p>
              <i className="bi bi-geo-alt me-2"></i>
              Lyon, France
            </p>
            <hr className="bg-light" />
            <p>
              <i className="bi bi-card-text me-2"></i>
              As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.
            </p>
            <hr className="bg-light" />
            <p><i className="bi bi-box me-2"></i>Repositories : 1</p>
            <hr className="bg-light" />
            <p><i className="bi bi-people me-2"></i>Followers : 16</p>
            <hr className="bg-light" />
            <p><i className="bi bi-people me-2"></i>Following : 0</p>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

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
    <Container className="my-5">
      <h2 className="text-center mb-4">Mon offre de services</h2>
       <div className="text-center mb-4">Voici les prestations sur 
lesquelles je peux intervenir</div>
      <Row>
        {propositions.map((proposition) => (
          <Col key={propositions.id} xs={12} md={4} className="mb-4">
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
  );
}
     
export function Portfolio() { // Portfolio
  const projects = [
    { id: 1, title: "Fresh Food", 
      image: "/assets/img/portfolio/fresh-food.jpg", 
      text: "Site de vente de produit frais en ligne", 
      footer: "Site réalisé avec PHP et MySQL" },
    { id: 2, title: "Restaurant Akira", 
      image: "/assets/img/portfolio/restaurant-japonais.jpg", 
      text: "Site de vente de produit frais en ligne", 
      footer: "Site réalisé avec WordPress" },
    { id: 3, title: "Espace bien-être", 
      image: "/assets/img/portfolio/espace-bien-etre.jpg", 
      text: "Site de vente de produit frais en ligne", 
      footer: "Site réalisé avec LARAVEL" },
    { id: 4, title: "SEO", 
      image: "/assets/img/portfolio/seo.jpg", 
      text: "Amélioration du référencement d'un site e-commerce", 
      footer: "Utilisation des outils SEO" },
    { id: 5, title: "Création d'une API", 
      image: "/assets/img/portfolio/coder.jpg", 
      text: "Création d'une API RESTFULL publique", 
      footer: "PHP - SYMFONY" },
    { id: 6, title: "Maquette d'un site web", 
      image: "/assets/img/portfolio/screens.jpg", 
      text: "Création du prototype d'un site", 
      footer: "Réalisé avec Figma" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>

                <Button variant="primary" className="mt-auto">
                  Voir le projet
                </Button>
              </Card.Body>
               <Card.Footer className="text-muted text-center">
                  {project.footer}
                </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export function ContactBlock() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact</h2>
      <div className="text-center mb-4">
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </div>

      <Row xs={1} md={1} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Row>
                {/* Colonne 1 : Formulaire */}
                <Col md={6} className="mb-3 mb-md-0">
                  <Card.Title>Formulaire de contact</Card.Title>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label></Form.Label>
                      <Form.Control type="text" placeholder="Votre nom" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label></Form.Label>
                      <Form.Control type="email" placeholder="Votre adress email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label></Form.Label>
                      <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label></Form.Label>
                      <Form.Control type="text" placeholder="Sujet" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label></Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
                    </Form.Group>
                    <Button type="submit">Envoyer</Button>
                  </Form>
                </Col>

                {/* Colonne 2 : Coordonnées + carte */}
                <Col md={6}>
                  <Card.Title>Coordonnées</Card.Title>
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item><strong>Adresse :</strong> 123 rue Exemple, 75000 Paris</ListGroup.Item>
                    <ListGroup.Item><strong>Téléphone :</strong> +33 1 23 45 67 89</ListGroup.Item>
                    <ListGroup.Item><strong>Email :</strong> contact@example.com</ListGroup.Item>
                  </ListGroup>
                  <div style={{ height: "250px", backgroundColor: "#eee", textAlign: "center", lineHeight: "250px" }}>
                    Carte ici
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