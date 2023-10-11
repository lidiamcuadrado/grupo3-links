// Importamos los prop-types.
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utils/customPropTypes';
import defaultAvatar from '../../../public/img/jpg/usuario.png'
// Importamos los estilos.
import './NoteHeader.css';
const baseURL = import.meta.env.VITE_API_URL;

const NoteHeader = ({ username, avatar, createdAt }) => {
    const avatarImage = avatar ? `${baseURL}/${avatar}` : defaultAvatar;
    return (
        <header className="note-header">
            { (
                <img
                    src={avatarImage}
                    alt="Imagen adjunta al note"
                    
                />
            )}
            <p>@{username}</p>
            <time className='createdAt'>
                {new Date(createdAt).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                })}
            </time>
        </header>
    );
};

NoteHeader.propTypes = {
    authUser: userPropTypes,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

export default NoteHeader;
