// Importamos los hooks.
import { useAuth } from "../hooks/useAuth";
import { useNotes } from "../hooks/useNotes";
import "./Home.css";
// Importamos los componentes.
import NoteAll from "../components/NoteAll";
import TripleButton from "../components/tripleButton";
import { useEffect } from "react";

const NotesSearchPage = () => {
  const { authUser } = useAuth();
  const { notes, likeNotesById, deleteNotesById, setIsTrending } = useNotes();

  useEffect(() => {
    // Establecemos a true el valor isTrending para obtener el listado de notas trending.
    setIsTrending(false);
  }, [setIsTrending]);
  
  return (
    <main className="main-list">
      <div>
        <TripleButton />
      </div>
      <div className="notes-list">
        {authUser &&
          notes?.length > 0 &&
          notes.map((note) => {
            return (
              <div key={note.id}>
              <NoteAll
                key={note.id}
                authUser={authUser}
                note={note}
                likeNotesById={likeNotesById}
                deleteNotesById={deleteNotesById}
              />
              </div>
            );
          })}
      </div>
    </main>
  );
};
export default NotesSearchPage;
