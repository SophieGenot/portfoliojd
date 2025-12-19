import { Col, Row, Button, Modal } from "react-bootstrap";

export function VisitCard({ show, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      dialogClassName="visit-card-modal"
    >
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light p-0">
        <Row className="g-0">
          {/* Colonne image */}
          <Col md={6} className="visitcard-image-col">
            <img
              src="/assets/img/avatar-github.jpg"
              alt="Avatar GitHub"
              className="visitcard-image"
            />
          </Col>

          {/* Colonne texte */}
          <Col md={6} className="p-4">
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

            <hr />

            <p>
              <i className="bi bi-geo-alt me-2"></i>
              Lyon, France
            </p>

            <hr />

            <p>
              <i className="bi bi-card-text me-2"></i>
              As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.
            </p>

            <hr />

            <p><i className="bi bi-box me-2"></i> Repositories : 1</p>
            <hr />
            <p><i className="bi bi-people me-2"></i> Followers : 16</p>
            <hr />
            <p><i className="bi bi-people me-2"></i> Following : 0</p>
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