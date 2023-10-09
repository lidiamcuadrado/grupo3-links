// Importamos los hooks.
import { useContext } from 'react';

// Importamos el contexto.
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
    return useContext(AuthContext)
}

