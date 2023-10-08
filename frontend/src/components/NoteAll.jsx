// Importamos los prop-types.
import PropTypes from 'prop-types';
import { userPropTypes, notesPropTypes } from '../utils/customPropTypes';

import "./NoteAll.css"
// Importamos los componentes.
import NoteHeader from '../components/NoteHeader/NoteHeader';
import NoteBody from '../components/NoteBody/NoteBody';
import NoteFooter from '../components/NoteFooter/NoteFooter';


const Home = ({ authUser, note, likeNotesById, deleteNotesById, isTrending }) => {

    return (
        <div className="note">
            <NoteHeader
                username={note.username}
                avatar={note.avatar}
                createdAt={note.createdAt}
            />
            <NoteBody 
                text={note.text}
                url={note.url}  
                title={note.title}/>
            <NoteFooter
                authUser={authUser}
                noteId={note.id}
                owner={note.owner}
                votes={note.votes}
                likedByMe={note.likedByMe}
                likeNotesById={likeNotesById}
                deleteNotesById={deleteNotesById}
                isTrending={isTrending}
            />
        </div>
    );
};

// Validamos las props.
Home.propTypes = {
    authUser: userPropTypes,
    notes: notesPropTypes,
    likeNotesById: PropTypes.func.isRequired,
    deleteNotesById: PropTypes.func.isRequired,
    isTrending: PropTypes.bool.isRequired,
};

export default Home;
