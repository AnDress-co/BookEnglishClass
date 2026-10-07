import React, { createContext, useMemo, useCallback, use } from 'react';
import useStorage from '../hooks/useStorage';

const USER_STORAGE_KEY = '@user_mg23';


export const UserContext = createContext(null);

export function UserProvider({ children }) {    
    const { value: registeredUser, ready, update } = useStorage(USER_STORAGE_KEY, []);

    const addUser = useCallback(async(user) => {

        if(!ready) return false;

        const newUser = {
            id: user.id,
            foto: user.foto,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            telefono: user.telefono,
            isRegister: user.isRegister
        };                        

        const success = await update(newUser);
        
        return success;
            
    }, [ready, update]);

    const contextValue = useMemo(() => ({
        registeredUser,
        ready,
        addUser,
    }), [registeredUser, ready, addUser]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}