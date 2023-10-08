// Importamos los prop-types.
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// Importamos los hooks.
import { useState } from 'react';
import { getToken } from '../utils/getToken';
import "../pages/RegisterPage.css"




const RegisterForm = ({ authRegister, loading }) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/users/login`; 
    navigate(path);}

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
    <div className="auth-form-container2">
        <Link to="/">
            <button className='loginh1'>WeShare!</button>
        </Link>
            <h2 className='loginh2'>Register</h2>
        <form className="register-form" onSubmit={(e) => {
                    e.preventDefault();
                    authRegister(username, email, password);
                    const token = getToken()
                    console.log(token);
                }
}>
            <label htmlFor="name">Username</label>
            <input className='registerForm' value={username} name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="User name" />
            <label htmlFor="email">Email</label>
            <input className='registerForm' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input className='registerForm' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="registerLog" disabled={loading}>Register</button>
        </form>
        <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button>
    </div>
        </>
    );
};

RegisterForm.propTypes = {
    authRegister: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default RegisterForm;
