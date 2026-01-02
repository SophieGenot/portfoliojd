import { useEffect, useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";

export function VisitCard({ show, onClose }) {
  const [profile, setProfile] = useState(null);
useEffect(() => {
  fetch("https://api.github.com/users/SophieGenot")
    .then((response) => response.json())
    .then((data) => {
      const fetchedProfile = {
        name: data.name || data.login,
        githubUrl: data.html_url,
        location: data.location,
        description: data.bio,
        repositories: data.public_repos,
        followers: data.followers,
        following: data.following,
        avatar: data.avatar_url,
      };

      setProfile(fetchedProfile);
    })
    .catch((error) => {
      console.error(
        "Erreur lors du chargement du profil GitHub :",
        error
      );
    });
}, []);

 if (!profile) {
    return (
      <Modal show={show} centered>
        <Modal.Body className="text-center bg-dark text-light">
          Chargement du profil GitHub...
        </Modal.Body>
      </Modal>
    );
  }

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