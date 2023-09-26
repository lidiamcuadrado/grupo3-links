// importamos las constantes
import { TOKEN_LOCAL_STORAGE_KEY } from './constants'

// función que obtiene un token del localstorage
export const getToken = () => {
  const authToken = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  return authToken ? authToken : null;
}