//Importamos los prop-types.
import PropTypes from "prop-types";

//Importamos estilos.
import './NoteHeader.css';

const NoteHeader = ({ username, createdAt }) => {
  return (
    <header className='note-header'>
      <p>@{username}</p>
      <time>
        {new Date(createdAt).toLocaleDateString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })}
      </time>
    </header>
  );
};
NoteHeader.propTypes = {
    username: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteHeader;