import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage(key, initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const [ ready, setReady ] = useState(false);

    useEffect(() => {
        let active = true; //Indica si el componente sigue activo para evitar actualizar el estado después de desmontarse.

        AsyncStorage.getItem(key)
        .then((saving) => {
            if(active && saving !== null) {
                setValue(JSON.parse(saving));
            }
        })
        .catch((error) => console.log('Error leyendo el storage: ' + key, error))
        .finally(() => active && setReady(true));

        return() => {
            active = false;
        }
    }, [key]);

    const update = useCallback(
        async (newValue) => {

            if(!ready) return false;

            const nextValue = typeof newValue === 'function' ? newValue(value) : newValue;            

            try {
                await AsyncStorage.setItem(key, JSON.stringify(nextValue));
                setValue(nextValue);
                return true;
            }catch(error) {
                console.log('Error guardando en el storage: ' + key, error);
                return false;
            }

        }, [key, ready, value]
    );

    return { 
        value, 
        ready, 
        update 
    };
}