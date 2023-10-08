// Importamos los hooks.
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Importamos los servicios.
import { getNotesService, getTrendingNotesService } from '../services/notesService';

export const useNotes = () => {
    const [notes, setNotes] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [isTrending] = useState(false);

    useEffect(() => {
        // Realizamos una petición para obtener los tweets.
        const fetchNotes = async () => {
            try {
        setLoading(true);
        let body;
        if (!isTrending) {
        body = await getNotesService(searchParams);
        } else {
        body = await fetchTrendingNotes();
        }
        setNotes(body.data.notes);
    } catch (err) {
        alert(err.message);
    } finally {
        setLoading(false);
    }
    };

    const fetchTrendingNotes = async () => {
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

  // Llamamos a la función correspondiente según el valor de isTrending
    if (isTrending) {
    fetchTrendingNotes();
    } else {
        // Llamamos a la función anterior únicamente si el usuario está logueado.
        fetchNotes();
    }
    }, [isTrending, searchParams]);
    // Función que permite agregar o eliminar un like en el State.
    const likeNotesById = (noteId) => {
        // Obtenemos un nuevo array donde modificamos exclusivamente el tweet en cuestión.
        const newNotes = notes.map((currentNotes) => {
            // Si el id del tweet actual coincide con el tweet del id sobre el que queremos agregar
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

            // Retornamos el tweet.
            return currentNotes;
        });

        // Actualizamos los tweets con el nuevo array.
        setNotes(newNotes);
    };

    // Función que permite eliminar un tweet en el State.
    const deleteNotesById = (noteId) => {
        // Creamos un nuevo array en el que eliminamos únicamente el tweet en cuestión.
        const newNotes = notes.filter(
            (currentNotes) => currentNotes.id !== noteId
        );

        // Actualizamos los tweets.
        setNotes(newNotes);
    };

    return {
        notes,
        searchParams,
        setSearchParams,
        likeNotesById,
        deleteNotesById,
        loading,
    };
};
