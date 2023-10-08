//Hook Import
//Importamos los prop-types.
import { useNavigate } from "react-router-dom";

//Importamos los hooks.
import { useState } from "react";

import { newNotesService } from "../../services/notesService";

const NoteCreateForm = () => {
  const navigate = useNavigate();

  // Llamada a lo que hay en la base de datos(?)
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  //Función que crea una note/post.
  const handleCreateNote = async () => {
    try {
      setLoading(true);

      
      //Creamos un objeto formData y establecemos sus propiedades
      const formData = new FormData();
      formData.append("text", text);
      formData.append("url", url);
      formData.append("title", title);

      //Creamos la nota en la base de datos
      await newNotesService(formData);

      // Redirigimos a la página principal.
      navigate("/notes");
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
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        placeholder="Título"
        required
      />
      <label>URL:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="www.example.com"
        id="url"
        required
      />
      <label>Comentario:</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength="280"
        autoFocus
        required
      />
      <button className="registerLog" type="submit" disabled={loading}>
        Publicar
      </button>
    </form>
  );
};

export default NoteCreateForm;