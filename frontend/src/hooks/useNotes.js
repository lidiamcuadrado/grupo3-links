// Importamos los hooks.
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Importamos los servicios.
import {
  getNotesService,
  getTrendingNotesService,
} from "../services/notesService";

export const useNotes = () => {
  const { authUser } = useAuth();

  const [notes, setNotes] = useState();
  const [isTrending, setIsTrending] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Realizamos una petición para obtener los note.
    const fetchNotes = async () => {
        console.log('Notas normales')
      try {
        setLoading(true);

        const body = await getNotesService(searchParams);
       
        setNotes(body.data.notes);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchTrendingNotes = async () => {
        console.log('Notas trending')
      try {
        setLoading(true);

        const body = await getTrendingNotesService(searchParams);

        setNotes(body.data.notes);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Si el usuario está logeado y 
    if (authUser && isTrending) {
      fetchTrendingNotes();
    } else if (authUser) {
      fetchNotes();
    }
  }, [isTrending, searchParams, authUser]);
  // Función que permite agregar o eliminar un like en el State.
  const likeNotesById = (noteId) => {
    // Obtenemos un nuevo array donde modificamos exclusivamente el note en cuestión.
    const newNotes = notes.map((currentNotes) => {
      // Si el id del note actual coincide con el note del id sobre el que queremos agregar
      // o eliminar el like lo modificamos.
      if (currentNotes.id === noteId) {
        // Invertimos el valor de likedByMe.
        const likedByMe = !currentNotes.likedByMe;

        // Incrementamos o decrementamos los votes en 1 en función del valor de likedByMe.
        const votes = likedByMe
          ? currentNotes.votes + 1
          : currentNotes.votes - 1;

        return {
          ...currentNotes,
          likedByMe,
          votes,
        };
      }

      // Retornamos el note.
      return currentNotes;
    });

    // Actualizamos los note con el nuevo array.
    setNotes(newNotes);
  };

  // Función que permite eliminar un note en el State.
  const deleteNotesById = (noteId) => {
    // Creamos un nuevo array en el que eliminamos únicamente el note en cuestión.
    const newNotes = notes.filter((currentNotes) => currentNotes.id !== noteId);

    // Actualizamos los note.
    setNotes(newNotes);
  };

  return {
    notes,
    isTrending,
    setIsTrending,
    searchParams,
    setSearchParams,
    likeNotesById,
    deleteNotesById,
    loading,
  };
};
