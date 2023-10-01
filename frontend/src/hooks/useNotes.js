//Importamos los hooks.
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//Importamos los servicios.
import { getNotesService } from '../services/notesService';

export const useNotes = () => {
  const [notes, setNotes] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Realizamos una petición para obtener los posts.
    const fetchNotes = async () => {
      try {
        setLoading(true);

        const body = await getNotesService();

        setNotes(body.data.notes);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
    //Llamamos a la función anterior.
    fetchNotes();
  }, []);

  return {
    notes,
    searchParams,
    setSearchParams,
    loading,
  };
};
