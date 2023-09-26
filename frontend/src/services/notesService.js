// importamos la función que retorna el token
import { getToken } from "../utils/getToken";

// importamos la variable de entorno de la URL
const baseURL = import.meta.env.VITE_API_URL;

// petición para publiación de una nota
export const newNoteService = async (formData) => {
  const token = getToken();
  
  const res = await fetch(`${baseURL}/notes`, {
    method: "post",
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  
  const body = await res.json();
  
  return body;
};

// eliminar una nota
export const deleteNoteService = async (notesId) => {
  const token = getToken();

  const res = await fetch(`${baseURL}/notes/${notesId}`, {
    method: "delete",
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  return body;
};

// dar voto y quitarlo a una nota
export const newVoteService = async (notesId, method) => {
  const token = getToken();
  
  const res = await fetch(`${baseURL}/notes/${notesId}/upVotes`, {
    method,
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();
  
  return body;
};

// lista de enlaces
export const getNotesService = async (searchParams) => {
  const token = getToken();

  const res = await fetch(`${baseURL}/getNotes?${searchParams}`, {
    headers: token ? { Authorization: token } : {},
  });

  const body = await res.json();

  return body;
};
