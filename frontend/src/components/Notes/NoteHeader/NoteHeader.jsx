// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './NoteHeader.css';
const baseURL = import.meta.env.VITE_API_URL;

const NoteHeader = ({ username, avatar }) => {
    return (
        <header className="tweet-header">
            <p>@{username}</p>
            {avatar && (
                <img
                    src={`${baseURL}/${avatar}`}
                    alt="Imagen adjunta al note"
                />
            )}

        </header>
    );
};

NoteHeader.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

export default NoteHeader;
