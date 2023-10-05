//Importamos hooks.
import { useNotes } from '../../hooks/useNotes';

//Importamos los componentes.
import NoteListItem from '../../components/NoteListItem/NoteListItem';
import NoteSearchForm from '../../forms/NoteSearchFound/NoteSearchForm';

//Importamos estilos.
import './NoteSearchPage.css';


const NoteSearchPage = () => {
  const { notes, setSearchParams, loading } = useNotes();

  return (
    <main>
      <NoteSearchForm setSearchParams={setSearchParams} loading={loading} />

      <h2>Listado de Posts</h2>

      <ul className='note-list'>
        {notes?.length > 0 ?
          notes.map((note) => {
            return <NoteListItem key={note.id} note={note} />
          }) : <li className='no-notes'>
                ¡No se ha encontrado ningún post! 😅
            </li>}
      </ul>
    </main>
  );
};
export default NoteSearchPage;
