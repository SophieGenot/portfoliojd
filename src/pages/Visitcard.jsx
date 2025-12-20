import { useEffect, useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";

export function VisitCard({ show, onClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // simulation d'une récupération de données au chargement
    const fetchedProfile = {
      name: "John Doe",
      githubUrl: "https://github.com/SophieGenot",
      location: "Lyon, France",
      description:
        "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
      repositories: 1,
      followers: 16,
      following: 0,
      avatar: "/assets/img/avatar-github.jpg",
    };

    setProfile(fetchedProfile);
  }, []); //  exécuté qu'une seule fois

  if (!profile) return null;

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
              src={profile.avatar}
              alt="Avatar GitHub"
              className="visitcard-image"
            />
          </Col>

          {/* Colonne texte */}
          <Col md={6} className="p-4 visitcard-text">
            <p>
              <i className="bi bi-person me-2"></i>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fw-bold"
              >
                {profile.name}
              </a>
            </p>

            <hr />

            <p>
              <i className="bi bi-geo-alt me-2"></i>
              {profile.location}
            </p>

            <hr />

            <p>
              <i className="bi bi-card-text me-2"></i>
              {profile.description}
            </p>

            <hr />

            <p><i className="bi bi-box me-2"></i> Repositories : {profile.repositories}</p>
            <hr />
            <p><i className="bi bi-people me-2"></i> Followers : {profile.followers}</p>
            <hr />
            <p><i className="bi bi-people me-2"></i> Following : {profile.following}</p>
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