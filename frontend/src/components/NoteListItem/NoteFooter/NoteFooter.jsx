//Importamos los prop-types.
import PropTypes from 'prop-types';

//Importamos estilos.
import './NoteFooter.css';

const NoteFooter = ({ noteId, votes, votedByMe }) => {
  return (
    <footer className='note-footer'>
      <div>
        <div className={`heart ${votedByMe && 'vote'}`}></div>
        <p>{votes}</p>
      </div>
    </footer>
  );
};
NoteFooter.propTypes = {
  noteId: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  votedByMe: PropTypes.bool.isRequired,
};

export default NoteFooter;
