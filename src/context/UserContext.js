import React, { createContext, useMemo, useCallback } from 'react';
import useStorage from '../hooks/useStorage';

const USER_STORAGE_KEY = '@user_mg24';


export const UserContext = createContext(null);

export function UserProvider({ children }) {    
    const { value: user, ready, update } = useStorage(USER_STORAGE_KEY, []);

    const addUser = useCallback(async(usuario) => {

        if(!ready) return false;

        const newUser = {
            id: user.id,
            foto: user.photo,
            nombre: user.name,
            apellido: user.lastName,
            correo: user.email,
            telefono: user.phone
        };                        

        const success = await update(newUser);
        
        return success;
            
    }, [ready, update]);

    const contextValue = useMemo(() => ({
        user,
        ready,
        addUser,        
    }), [user, ready, addUser]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}