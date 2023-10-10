// Importamos los prop-types.
import PropTypes from 'prop-types';

// Impotamos los hooks.
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Importamos los estilos
import '../pages/LoginPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const LoginForm = ({ authLogin, loading }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/users/register`;
    navigate(path);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='auth-form-container-login'>
        <Link to='/'>
          <button className='botón-login'>WeShare!</button>
        </Link>
        <h2 className='h2-login'>Iniciar sesión</h2>
        <form
          className='login-form'
          onSubmit={(e) => {
            e.preventDefault();

            async function fetchLogin() {
              try {
                const response = await fetch('/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                  const data = await response.json();
                  // Hacer algo con los datos
                  console.log(data);
                } else  {
                  // Mostrar un toast de error si la respuesta no es exitosa
                  
                }
              } catch (error) {
                // Mostrar un toast de error si ocurre una excepción
                toast.error('¡Las credenciales son incorrectas!');
                // console.error('Error:', error);
              }
            }

            // Llamas a la función asíncrona
            fetchLogin();

            // Validar que los campos no estén vacíos
            if (!email) {
              toast.error('¡Introduce tu correo!', { position: 'top-center' });
              return;
            }

            if (!password) {
              toast.error('¡Introduce tu password!', {
                position: 'top-center',
              });
              return;
            }
            // Validar que la contraseña y el usuario son correctos.(comprobar)
            if (email !== email || password !== password)
              toast.error('¡Las credenciales son incorrectas!', {
                position: 'top-center',
              });
            return authLogin(email, password);
          }}
        >
          <label htmlFor='login-form'>Correo electrónico</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='tuemail@gmail.com'
            id='email'
            name='email'
          />

          <label htmlFor='login-form'>Contraseña</label>
          <div className='password-input-container-login'>
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
              className='password-toggle-button-login'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className='login-log' disabled={loading}>
            Iniciar Sesión
          </button>
        </form>
        <button className='link-btn' onClick={routeChange}>
          ¿No tienes cuenta? Registrate aquí.
        </button>
      </div>
      <ToastContainer
        position='top-center'
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

LoginForm.propTypes = {
  authLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
