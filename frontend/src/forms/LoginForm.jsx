// Importamos los prop-types.
import PropTypes from 'prop-types';

// Impotamos los hooks.
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

// Importamos los estilos
import '../pages/LoginPage.css';

const LoginForm = ({ authLogin, loading }) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/users/register`; 
    navigate(path);}

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
          <div className="auth-form-container-login">
          <Link to="/">
            <button className='botón-login'>WeShare!</button>
          </Link>
            <h2 className='h2-login'>Iniciar sesión</h2>
              <form className="login-form" onSubmit={(e) => {
                    e.preventDefault();
                    authLogin(email, password);
                }}>
                <label htmlFor="login-form">Correo electrónico</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="tuemail@gmail.com" id="email" name="email" />
                <label htmlFor="login-form">Contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="login-log" disabled={loading}>Iniciar Sesión</button>
              </form>
            <button className="link-btn" onClick={routeChange}>¿No tienes cuenta? Registrate aquí.</button>
          </div>
        </>
    );
};

LoginForm.propTypes = {
    authLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default LoginForm;

