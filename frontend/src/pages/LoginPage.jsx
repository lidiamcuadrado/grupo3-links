// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';

// Importamos los componentes.
import { Navigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {

    const { authUser, authLogin, loading } = useAuth();
    
    // Si la persona está autenticada redirigimos a la página principal.
    if (authUser) return <Navigate to="/users" />;

    return (
        <main>
            <LoginForm authLogin={authLogin} loading={loading} />
        </main>
    );
};

export default LoginPage;
