// Importamos los prop-types.
import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";
// Importamos los hooks.
import { useState } from 'react';

const LoginForm = ({ authLogin, loading }) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/users/register`; 
    navigate(path);}

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
          <div className="auth-form-container">
            <h1>WeShare!</h1>
            <h2>Login</h2>
              <form className="login-form" onSubmit={(e) => {
                    e.preventDefault();
                    authLogin(email, password);
                }}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="log" disabled={loading}>LogIn</button>
              </form>
            <button className="link-btn" onClick={routeChange}>Dont have an account? Register here.</button>
          </div>
        </>
    );
};

LoginForm.propTypes = {
    authLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default LoginForm;
