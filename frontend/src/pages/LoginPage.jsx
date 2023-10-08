// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';
// Importamos los componentes.
import { Navigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import './RegisterPage.css'

const LoginPage = () => {

    const { authUser, authLogin, loading } = useAuth();
    
    // Si la persona está autenticada redirigimos a la página principal.
    if (authUser) return <Navigate to="/notes" />;

    return (
        <main className='registerMain'>
            <LoginForm authLogin={authLogin} loading={loading} />
        </main>
    );
};
LoginForm.propTypes = {
    authLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default LoginPage;
