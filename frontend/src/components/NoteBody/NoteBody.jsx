// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './NoteBody.css';


const NoteBody = ({ title, text, url }) => {
    return (
        <div className="tweet-body">
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={url}>URL link</button>
            
        </div>
    );
};

NoteBody.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default NoteBody;
