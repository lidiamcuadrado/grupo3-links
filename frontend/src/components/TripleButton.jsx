import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./tripleButton.css"
function TripleButton() {

  return (
    <ButtonGroup className="tripleButtongroup" aria-label="Basic example">
      <Link to="/notes">
      <Button onClick={''} className="triplebutton L" variant="secondary">Últimas notas</Button>
      </Link>
      <Link to="/notes/trending">
      <Button onClick={''} className="triplebutton R" variant="secondary">Tendencias</Button>
      </Link>
    </ButtonGroup>
  );
}

export default TripleButton