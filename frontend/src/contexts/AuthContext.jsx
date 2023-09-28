// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos la función que crea un contexto y los hooks.
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importamos los servicios.
import {
    getPrivateProfile,
    signInService,
    signUpService,
} from '../services/authService';

// Importamos las constantes.
import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

// Importamos la función que retorna el token.
import { getToken } from '../utils/getToken';

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
    const authRegister = async (
        username,
        email,
        password
        
    ) => {
        try {
            setLoading(true);


            await signUpService(username, email, password);

            // Una vez registrados redirigimos a la página de login.
            navigate('/users/login');
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
    };

    return (
        <AuthContext.Provider
            value={{
                authUser,
                isAuthenticated,
                authRegister,
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
