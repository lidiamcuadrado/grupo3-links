//Importamos los prop-types.
import PropTypes from 'prop-types';

//Importamos estilos.
import './NoteBody.css';

//URL base del API.
const baseURL = import.meta.env.VITE_API_URL;

const NoteBody = ({ text, image }) => {
  return (
    <div className='note-body'>
      <p>{NoteBody.text}</p>
      {image && (
        <img src={`${baseURL}/${image}`} alt='imagen adjunta al post' />
      )}
    </div>
  );
};
NoteBody.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default NoteBody;
