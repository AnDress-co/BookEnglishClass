import React, { createContext, useMemo, useCallback } from 'react';
import useStorage from '../hooks/useStorage';

const BOOKING_STORAGE_KEY = '@booking_mg24';

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {    
    const { value: booking, ready, update } = useStorage(BOOKING_STORAGE_KEY, []);

    const addBooking = useCallback(async(clase, schedule) => {

        if(!ready) return false;

        const newBooking = {
            id: clase.id + '-' + schedule,
            titulo: clase.titulo,
            profesor: clase.profesor.nombre,
            precio: clase.precio,
            schedule,
            creadoEn: new Date().toISOString()
        };                        

        const success = await update((prev) => {
            if(prev.some((r) => r.id === newBooking.id)){
                return prev;
            }
            return [...prev, newBooking];
        });
        
        return success;
            
    }, [ready, update]);

    const removeBooking = useCallback(async(id) => {
        if(!ready) return false;
        const success = await update((prev) => prev.filter((r) => r.id !== id));
        return success;
    });

    const contextValue = useMemo(() => ({
        booking,
        ready,
        addBooking,
        removeBooking
    }), [booking, ready, addBooking, removeBooking]);

    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
}