// Importamos los hooks.
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';
import "./Home.css"
// Importamos los componentes.
import NoteAll from '../components/NoteAll';
import TripleButton from '../components/tripleButton';

const TrendingPage = () => {
    
    const { authUser } = useAuth();
    const { notes, likeNotesById, deleteNotesById } = useNotes(true);
    const [isTrending] = useState(false);
    
    return (
        <main className='main-list'>
            <div>
            <TripleButton isTrending={isTrending} />
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
                                isTrending={isTrending} 
                            />
                        );
                    })
                )}
            </div>
        </main>
    );
  }
export default TrendingPage;
