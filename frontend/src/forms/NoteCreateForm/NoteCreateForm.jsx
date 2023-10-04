//Hook Import
import { useState } from "react";
import { notesPropTypes } from "../../utils/customPropTypes";
import { newNotesService } from "../../services/notesService";
import "./NoteCreateForm.css";

const NoteCreateForm = ({ addNote }) => {
  const [text, setText] = useState("");
  const [setLoading] = useState(false);

  const handleCreateNote = async () => {
    try {
      setLoading(true);
      //Creamos un objeto formData y establecemos sus propiedades
      const formData = new FormData();
      formData.append("text", text);

      //Creamos la nota en la base de datos
      const body = await newNotesService(formData);

      //Actualizamos el State con la nueva nota/enlace
      addNote(body.data.note);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="note-create-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateNote();
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength="280"
        autoFocus
        required
      />
    </form>
  );
};

NoteCreateForm.propTypes = {
  addNote: notesPropTypes.func.isRequired,
};

export default NoteCreateForm;
