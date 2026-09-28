import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKING_STORAGE_KEY = '@booking_mg24';

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);

    // Funcion de cargar.
    useEffect(() => {
        const load = async () => {
            try {
                const saved = await AsyncStorage.getItem(BOOKING_STORAGE_KEY);
                if(saved != null) {
                    setBooking(JSON.parse(save));
                }
            }catch(error){
                console.log('Ocurrio un error al cargar la informacion: ', error);
            }finally{
                setLoading(false);
            }
        }
        load();
    }, []);

    //Guardar cada vez que cambie el arreglo de reservas.
    useEffect(() => {
        if(loading) return;
        AsyncStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(booking)).catch((error) => console.log('Error guardando reservas: ', error));
    }, [booking, loading]);

    const addBooking = useCallback((clase, schedule) => {
        const newBooking = {
            id: clase.id + '-' + schedule,
            titulo: clase.title,
            profesor: clase.profesor.nombre + ' ' + clase.profesor.apellido,
            precio: clase.precio,
            schedule,
            creadoEn: new Date().toISOString
        }
        let result = {ok: true}
        setBooking((prev) => {
            if(prev.some((r) => r.id === newBooking.id)){
                result = {ok: false}
                return prev;
            }
            return [newBooking, ...prev]
        });
    }, []);

}//Esta llave es la que cierra la funcion de Provider.