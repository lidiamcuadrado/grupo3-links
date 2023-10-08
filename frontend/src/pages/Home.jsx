// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';
import "./Home.css"
// Importamos los componentes.
import NoteAll from '../components/NoteAll';
import TripleButton from '../components/tripleButton';

const NotesSearchPage = () => {
    
    const { authUser } = useAuth();
    const { notes, likeNotesById, deleteNotesById } =
        useNotes();
    
    return (
        <main className='main-list'>
            <div>
            <TripleButton/>
            </div>
            <div className="tweet-list">
                {authUser && notes?.length > 0 && (
                    notes.map((note) => {
                        return (
                            <NoteAll                
                                key={note.id}
                                authUser={authUser}
                                note={note}
                                likeNotesById={likeNotesById}
                                deleteNotesById={deleteNotesById}
                            />
                        );
                    })
                )}
            </div>
        </main>
    );
                }
export default NotesSearchPage;
