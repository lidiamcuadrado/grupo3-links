// Importamos los prop-types.
import PropTypes from 'prop-types';
import { notePropTypes, userPropTypes } from '../../../utils/customPropTypes';

// Importamos los componentes.
import NoteHeader from './NoteHeader/NoteHeader';
import NoteBody from './NoteBody/NoteBody';
import NoteFooter from './NoteFooter/NoteFooter';

// Importamos los estilos.
import './NoteListItem.css';

const NoteListItem = ({ authUser, note, likeNoteById, deleteNoteById }) => {
    return (
        <li className="note">
            <NoteHeader
                username={note.username}
                createdAt={note.createdAt}
            />
            <NoteBody note={note.text} image={note.image} />
            <NoteFooter
                authUser={authUser}
                noteId={note.id}
                owner={note.owner}
                votes={note.likes}
                likedByMe={note.likedByMe}
                likeNoteById={likeNoteById}
                deleteNoteById={deleteNoteById}
            />
        </li>
    );
};

NoteListItem.propTypes = {
    authUser: userPropTypes,
    note: notePropTypes,
    likeNoteById: PropTypes.func.isRequired,
    deleteNoteById: PropTypes.func.isRequired,
};

export default NoteListItem;
