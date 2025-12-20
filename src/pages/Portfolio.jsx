import { Container, Card, Col, Row, Button } from "react-bootstrap";

export function Portfolio() { 
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
  <div>
    <img
      src="/assets/img/banner.jpg"
      alt="Bannière"
      className="img-fluid w-100"
      style={{ maxHeight: '400px', objectFit: 'cover' }} />
      
    <Container className="my-5">
      <h2 className="text-center mb-4"><strong>Portfolio</strong></h2>
      <div className="text-center mb-4">Voici quelques-unes de mes réalisations</div>
      <hr className="primary hrtitle" /> <br />
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title} />

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
  </div>
  );
}