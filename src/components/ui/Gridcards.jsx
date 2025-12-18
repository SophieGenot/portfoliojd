import { Card, Col, Row, ProgressBar } from "react-bootstrap";

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

