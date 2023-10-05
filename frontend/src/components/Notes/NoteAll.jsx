// Importamos los prop-types.
import PropTypes from 'prop-types';
import { userPropTypes, notesPropTypes } from '../../utils/customPropTypes';

import "./Notes/Home.css"

// Importamos los componentes.
import NoteHeader from '.Notes/NoteHeader/NoteHeader';
import NoteBody from '.Notes/NoteBody/NoteBody';
import NoteFooter from '../components/Notes/NoteFooter/NoteFooter';



const Home = ({ authUser, note, likeNotesById, deleteNotesById }) => {
    return (
        <div className="note">
            <NoteHeader
                username={note.username}
                avatar={note.avatar}
            />
            <NoteBody text={note.text}
                      url={note.url}  
                      title={note.title}/>
            <NoteFooter
                authUser={authUser}
                noteId={note.id}
                likes={note.likes}
                likedByMe={note.likedByMe}
                likeNotesById={likeNotesById}
                deleteNotesById={deleteNotesById}
            />
        </div>
    );
};

// Validamos las props.
Home.propTypes = {
    authUser: userPropTypes,
    notes: notesPropTypes,
    likedByMe: PropTypes.bool,
    likeNotesById: PropTypes.func.isRequired,
    deleteNotesById: PropTypes.func.isRequired,
};

export default Home;
