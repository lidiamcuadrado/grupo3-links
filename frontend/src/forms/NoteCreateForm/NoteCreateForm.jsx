import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { newNotesService } from "../../services/notesService";
import "react-toastify/dist/ReactToastify.css";
import "./NoteCreateForm.css";

const NoteCreateForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateNote = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("text", text);
      formData.append("url", url);
      formData.append("title", title);

      await newNotesService(formData);

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
        maxLength="25"
        placeholder="Título"
        required
      />
      <label>URL:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="www.ejemplo.com"
        id="url"
        required
      />
      <label>Comentario:</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength="280"
        placeholder="Escribe un breve comentario..."
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
