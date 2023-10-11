import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../utils/getToken";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages/RegisterPage.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = ({ authRegister, loading }) => {

  let navigate = useNavigate();
  
  const routeChange = () => {
    let path = `/users/login`;
    navigate(path);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    // Validar que los campos no estén vacíos
    if (!username || !email || !password) {
      toast.error("Faltan campos", { position: "top-center" });
      return;
    }

    // Resto de la lógica de registro
    authRegister(username, email, password);
    const token = getToken();
    console.log(token);
  };

  return (
    <>
      <div className="auth-form-container2">
        <Link to="/">
          <button className="loginh1">WeShare!</button>
        </Link>
        <h2 className="loginh2">Registro</h2>
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <label htmlFor="name">Usuario</label>
          <input
            className="register-form"
            value={username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
            id="name"
            placeholder="Nombre de usuario"
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            className="register-form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="tucorreo@gmail.com"
            id="email"
            name="email"
          />
           <label htmlFor='register-form'>Contraseña</label>
          <div className='password-input-container-register'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder='********'
              id='password'
              name='password'
            />
            <button
              type='button'
              onClick={toggleShowPassword}
              className='password-toggle-button-register'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="registerLog" disabled={loading}>
            Registrarse
          </button>
        </form>
        <button className="link-btn" onClick={routeChange}>
          ¿Ya tienes una cuenta? Inicia sesión aquí.
        </button>
      </div> 
      <ToastContainer
        position="top-center"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

RegisterForm.propTypes = {
  authRegister: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RegisterForm;
