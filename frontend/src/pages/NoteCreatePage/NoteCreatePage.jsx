import { useAuth } from '../../hooks/useAuth';


// Importamos los componentes.
import { Navigate } from 'react-router-dom';

//Importamos el formulario.
import NoteCreateForm from '../../forms/NoteCreateForm/NoteCreateForm';


const NoteCreatePage = () => {
  const { authUser } = useAuth();

  

  //Puede que esté duplicado porque un usuario no registrado n puede entrar en ninguna parte de la plataforma. Es posible que esta funcionalidad ya esté implementada den App.jsx
  if (!authUser) return <Navigate to='/' />;

  return (
    <main>
      <h2>¿Qué quieres compartir? 🤔</h2>
      <NoteCreateForm />
    </main>
  );
};

export default NoteCreatePage;
