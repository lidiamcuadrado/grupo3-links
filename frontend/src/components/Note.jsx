import Card from 'react-bootstrap/Card';
import './Note.css'
import { useState, useEffect } from 'react'
import LikeVote from './LikeVoteButton';

function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Obtener los datos de las notas desde la base de datos
    fetch('/notes') // Ruta para obtener las notas
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <Card className='NoteContainer' key={notes.id}>
          <Card.Header className='NoteHeader'>
            <img className='NoteAvatar' src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Fpng%2F19896008-masculino-usuario-avatar-icono-en-plano-diseno-estilo-persona-senales-ilustracion&psig=AOvVaw1OE_JCKfT6kDPAqRECNWN6&ust=1696332792536000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiD1Z2i14EDFQAAAAAdAAAAABAE"} />
            <a className='UserNameNote'>pepemarras</a>
            <LikeVote />
          </Card.Header>
          <Card.Body className='CardBody'>
            <Card.Subtitle className="mb-2 text-muted">note titulo</Card.Subtitle>
            <Card.Text className='NoteText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet numquam. Sit nesciunt harum sed sint nisi perferendis
            </Card.Text>
            <button className='NoteLink' href="#">Note link</button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Note;