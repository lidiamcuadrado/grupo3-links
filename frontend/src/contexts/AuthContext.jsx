// Importamos los prop-types.
import PropTypes from "prop-types";

// Importamos la función que crea un contexto y los hooks.
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importamos los servicios.
import {
  getPrivateProfile,
  signInService,
  signUpService,
  updateProfileService,
  updateAvatarService,
} from "../services/authService.js";

// Importamos las constantes.
import { TOKEN_LOCAL_STORAGE_KEY } from "../utils/constants";

// Importamos la función que retorna el token.
import { getToken } from "../utils/getToken";

// Creamos el contexto de autenticación.
export const AuthContext = createContext(null);

// Creamos el componente provider del contexto.
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Función que retorna los datos del usuario.
    const fetchUser = async () => {
      try {
        setLoading(true);

        const body = await getPrivateProfile();
        setAuthUser(body.data.user);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Obtenemos el token.
    const authToken = getToken();

    // Si existe token buscamos los datos del usuario.
    if (authToken) fetchUser();
  }, [isAuthenticated]);

  // Función que registra a un usuario en la base de datos.
  const authRegister = async (username, email, password) => {
    try {
      setLoading(true);

      await signUpService(username, email, password);

      // Una vez registrados redirigimos a la página de login.
      navigate("/users/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función que logea a un usuario retornando un token.
  const authLogin = async (email, password) => {
    try {
      setLoading(true);

      const body = await signInService(email, password);

      // Almacenamos el token en el localStorage. Dado que la variable token es un string no es
      // necesario usar JSON.stringify.
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, body.data.token);
      // Indicamos que el usuario está autorizado.
      setIsAuthenticated(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función de logout.
  const authLogout = () => {
    // Eliminamos el token del localStorage.
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);

    // Establecemos el usuario a null y isAuthenticated a false.
    setAuthUser(null);
    setIsAuthenticated(false);
    navigate("/users/login");
  };

  // Función que actualiza los datos del usuario.
  const authUpdateProfile = async (userId, username, email, password) => {
    try {
      setLoading(true);

      await updateProfileService(userId, username, email, password);

      // Establecer los nuevos valores en el State de authUser.
      if (username) {
        setAuthUser({
          ...authUser,
          username,
        });
      }

      if (email)
        setAuthUser({
          ...authUser,
          email,
        });
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Función que actualiza el avatar del usuario.
  const authUpdateAvatar = async (userId, avatar) => {
    try {
      setLoading(true);

      const body = await updateAvatarService(userId, avatar);

      // Establecer la URL del avatar en el State de authUser.
      setAuthUser({
        ...authUser,
        avatar: "La URL al nuevo avatar: body.avatar",
      });
    } catch (error) {
      console.error("Error updating avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUpdateProfile,
        authUser,
        isAuthenticated,
        authRegister,
        authUpdateAvatar,
        authLogin,
        authLogout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
