// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';
import "./RegisterPage.css"

// Importamos los componentes.
import { Navigate } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';

const RegisterPage = () => {
    const { authUser, authRegister, loading } = useAuth();

    // Si la persona está autenticada redirigimos a la página principal.
    if (authUser) return <Navigate to="/notes" />;

    return (
        <main className='registerMain'>
            <RegisterForm authRegister={authRegister} loading={loading} />
        </main>
    );
};

export default RegisterPage;
