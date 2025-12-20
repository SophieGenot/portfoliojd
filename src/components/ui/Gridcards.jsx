import { Card, Col, Row, ProgressBar, Container } from "react-bootstrap";

export function GridCards() {
  return (
    <Container className="my-5">
    <Row xs={1} md={1} className="g-4">
      <Col>
        <Card>
          <Card.Body>
            <Row>
              {/* Colonne 1 : À propos */}
              <Col md={6} className="mb-3 mb-md-0">
                <Card.Title><h2>À propos</h2></Card.Title>
                <hr className="primary" />
                <Card.Img
                  variant="top"
                  src="/assets/img/john-doe-about.jpg"
                  className="mb-3"
                />
                <Card.Text>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vel risus eget eros fermentum convallis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.</p>
                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vel risus eget eros fermentum convallis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.</p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vel risus eget eros fermentum convallis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.</p>
                </Card.Text>
              </Col>

              {/* Colonne 2 : Compétences */}
              <Col md={6}>
                <Card.Title><h2>Mes compétences</h2></Card.Title>
                <hr className="primary" />
                <div>HTML5 90%</div>
                <ProgressBar variant="danger" now={90} className="mb-2" />
                <div>CSS3 80%</div>
                <ProgressBar variant="info" now={80} className="mb-2" />
                <div>JAVASCRIPT 70%</div>
                <ProgressBar variant="warning" now={70} className="mb-2" />
                <div>PHP 60%</div>
                <ProgressBar variant="success" now={60} className="mb-3" />
                <div>REACT 50%</div>
                <ProgressBar now={50} className="mb-3" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}

