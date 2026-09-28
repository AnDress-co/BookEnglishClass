import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage(key, initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const [ ready, setReady ] = useState(false);

    useEffect(() => {
        let active = true; //Bandera para saber si estoy guardando o montando el componente.

        AsyncStorege.getItem(key)
        .then((saving) => {
            if(active && saving !== null) {
                setValue(JSON.parse(saving));
            }
        })
        .catch((error) => console.log('Error reading from storage: ' + key, error))
        .finally(() => active && setReady(true));

        return() => {
            active = false;
        }
    }, [key]);

    const update = useCallback(
        async (newValue) => {
            setValue(newValue);
            try{
                await AsyncStorage.setItem(key, JSON.stringify(newValue));
            }catch(error){
                console.log('Error guardand: ' + key, error);
            }
        }, [key]
    );
}