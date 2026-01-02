import { OverlayTrigger, Tooltip} from 'react-bootstrap';

// Composant Link qui accepte une URL externe
const Link = ({ id, children, title, url }) => (
  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
    <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
  </OverlayTrigger>
);

export function TextLM() {
  // renderLink prend maintenant l'URL
  const renderLink = (id, title, children, url) => <Link id={id} title={title} url={url}>{children}</Link>;

  return (
    <div>
    <p>
      Ce site a été réalisé par Sophie Génot, étudiante au{' '}
      {renderLink(
        "t-1",
        "Centre Européen de formation",
        "Centre Européen de formation",
        "https://www.centre-europeen-formation.fr"
      )}{' '}
    </p>
    <p>
      <em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site</em>{' '}
      {renderLink(
        "t-2",
        "Pixabay",
        "Pixabay",
        "https://pixabay.com"
      )}{' '}
    </p>
    <p>
      <em>La favicon de ce site a été fournie par</em>{' '}
      {renderLink(
        "t-3",
        "Flaticon - Freepik",
        "Flaticon",
        "https://www.flaticon.com"
      )}.
    </p>
    </div>
  );
}