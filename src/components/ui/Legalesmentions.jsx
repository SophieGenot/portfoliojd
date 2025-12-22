import { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { TooltipInCopyExample } from './TooltipInCopyExample';

export function LegalesMentions() {
  const [ , ] = useState(window.innerWidth <= 768);
  const [activeKeys, setActiveKeys] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setActiveKeys(mobile ? [] : ['0']);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
  <Container className="my-5" id="mentions">
    <Accordion
      alwaysOpen
      activeKey={activeKeys}
      onSelect={(eventKey) => setActiveKeys(eventKey)}>
        <h2 className="text-center mb-4"><strong>Mentions légales</strong></h2>
        <hr className="primary hrtitle" /> <br />
      <Accordion.Item eventKey="0">
        <Accordion.Header>Éditeur du site</Accordion.Header>
        <Accordion.Body>
             John Doe<br />
          <i className="bi bi-map me-2"></i>
          40 rue Laure Diebold<br />
          <i className="bi bi-geo-alt me-2"></i>
          69009 Lyon, France<br />
          <i className="bi bi-phone me-2"></i>
          10 20 30 40 50<br />
          <i className="bi bi-envelope-at me-2"></i>
          john.doe@gmail.com
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
             alwaysdata<br />
          91 Rue du Faubourg Saint-Honoré, 75008 Paris<br />
          <i className="bi bi-globe"   ></i> 
           <a href="https://www.alwaysdata.com/fr/"
            target="_blank"
            rel="noopener noreferrer">
            https://www.alwaysdata.com/fr/
          </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
            Crédits
            <TooltipInCopyExample />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
  );
}
