import { Col, Row, Button, Modal, Image } from "react-bootstrap";

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