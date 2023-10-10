import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../utils/getToken";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages/RegisterPage.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = ({ authRegister, loading }) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    // Validar que los campos no estén vacíos
    if (!username || !email || !password) {
      toast.error("Faltan campos", { position: "top-center" });
      return;
    }

    try {
      // Realiza la lógica de registro aquí...
      const registrationResult = await authRegister(username, email, password);

      if (registrationResult.success) {
        // El registro fue exitoso, muestra el mensaje de éxito
        toast.success("Registro exitoso. Redirigiendo al inicio de sesión...", {
          position: "top-center",
        });

        // Redirigir al usuario al inicio de sesión después del éxito
        setTimeout(() => {
          navigate("/users/login");
        }, 3000); 
      } else {
        // El registro falló, muestra un mensaje de error
        let errorMessage = "Hubo un error en el registro";
        if (registrationResult.code === "EMAIL_ALREADY_REGISTERED") {
          errorMessage = "El correo electrónico ya está registrado en el servidor";
        }
        toast.error(errorMessage, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Hubo un error en el registro", {
        position: "top-center",
      });
    }
  };

  const routeChange = () => {
    let path = `/users/login`;
    navigate(path);
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
            authRegister(username, email, password);
            const token = getToken();
            console.log(token);
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
