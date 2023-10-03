// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';

// Importamos los componentes.
import NoteAll from '../components/NoteAll';

const NotesSearchPage = () => {
    const { authUser } = useAuth();
    const { notes, likeNotesById, deleteNotesById } =
        useNotes();

    return (
        <main>
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
