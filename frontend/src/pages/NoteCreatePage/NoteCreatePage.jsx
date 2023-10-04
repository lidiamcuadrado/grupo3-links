import { useAuth } from "../../hooks/useAuth";

// Importamos los componentes.
import { Navigate } from "react-router-dom";

import NoteCreateForm from "../../forms/NoteCreateForm/NoteCreateForm";
import { useNotes } from "../../hooks/useNotes";

const NoteCreatePage = () => {
  const { authUser } = useAuth();

  const { addNote } = useNotes();

  //Puede que esté duplicado porque un usuario no registrado n puede entrar en ninguna parte de la plataforma. Es posible que esta funcionalidad ya esté implementada den App.jsx
  if (!authUser) return <Navigate to="/home" />;

  return (
    <main>
      <h2>¿Qué quieres compartir? 🤔</h2>
      <NoteCreateForm addNote={addNote} />
    </main>
  );
};

export default NoteCreatePage;
