//Hook Import
//Importamos los prop-types.
import { useNavigate } from "react-router-dom";

//Importamos los hooks.
import { useState } from "react";

import { newNotesService } from "../../services/notesService";

import "./NoteCreateForm.css";

const NoteCreateForm = () => {

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [setLoading] = useState(false);

  //Función que crea una note/post.
  const handleCreateNote = async () => {
    try {
      setLoading(true);
      //Creamos un objeto formData y establecemos sus propiedades
      const formData = new FormData();
      formData.append("text", text);

      //Creamos la nota en la base de datos
      await newNotesService(formData);

      

    // Redirigimos a la página principal.
    navigate('/');
} catch (err) {
    alert(err.message);
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


export default NoteCreateForm;
