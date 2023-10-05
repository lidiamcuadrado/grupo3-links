// Importamos los prop-types.
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utils/customPropTypes';
import LikeVote from '../LikeVoteButton';
// Importamos los hooks.
import { useState } from 'react';

// Importamos los servicios.
import {
    newVoteService,
    deleteNotesService,
} from '../../services/notesService';

// Importamos los estilos.
import './NoteFooter.css';

const NotesFooter = ({
    authUser,
    noteId,
    owner,
    likes,
    likedByMe,
    likeNotesById,
    deleteNotesById,
}) => {
    const [loading, setLoading] = useState(false);

    // Función que modifica un like.
    const handleLikeNotes = async () => {
        try {
            setLoading(true);

            // Si existe un like previo eliminamos el like, de lo contrario lo creamos.
            const method = likedByMe ? 'delete' : 'post';

            // Modificamos el like en la base de datos.
            await newVoteService(noteId, method);

            // Modificamos el array de tweets en el State.
            likeNotesById(noteId);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Función que elimina el tweet.
    const handleDeleteNotes = async () => {
        if (confirm('¿Deseas eliminar el note?')) {
            try {
                setLoading(true);

                // Eliminamos el tweet en la base de datos.
                await deleteNotesService(noteId);

                // Modificamos el array de tweets en el State.
                deleteNotesById(noteId);
            } catch (err) {
                alert(err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <footer className="tweet-footer">
            <div>
                <LikeVote
                    className={`heart ${likedByMe && 'like'}`}
                    onClick={() => {
                        // Si estamos logeados y loading no está establecido a true permitimos
                        // al usuario crear o eliminar el like.
                        authUser && !loading && handleLikeNotes();
                    }}
                ></LikeVote>
                <p>{likes}</p>
            </div>
            {owner && (
                <button onClick={() => handleDeleteNotes()}>Eliminar</button>
            )}
        </footer>
    );
};

NotesFooter.propTypes = {
    authUser: userPropTypes,
    noteId: PropTypes.number.isRequired,
    owner: PropTypes.bool,
    likes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool,
    likeNotesById: PropTypes.func.isRequired,
    deleteNotesById: PropTypes.func.isRequired,
};

export default NotesFooter;

