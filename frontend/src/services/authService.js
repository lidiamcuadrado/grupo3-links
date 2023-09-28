// importamos la función que retorna el token
import { getToken } from "../utils/getToken";

// importamos la variable de entorno de la URL
const baseURL = import.meta.env.VITE_API_URL;

// petición para registro de usuario
export const signUpService = async (username, email, password) => {
  const res = await fetch(`${baseURL}/users/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  return body;
};
// otra para el login de usuario
export const signInService = async (email, password) => {
  const res = await fetch(`${baseURL}/users/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const body = await res.json();

  return body;
};
// // otra para obtener el perfil privado de un usuario
export const getPrivateProfile = async () => {
  const token = getToken();

  const res = await fetch(`${baseURL}/`, {
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  return body;
};
// otra más para el cambio de perfil
export const updateProfileService = async (
  userId,
  username,
  email,
  password
) => {
  const res = await fetch(`${baseURL}/users/${userId}/profile`, {
    method: "PUT", // Usamos el método PUT para actualizar el perfil.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  return body;
};
