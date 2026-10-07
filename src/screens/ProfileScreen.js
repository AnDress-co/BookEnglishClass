import react, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardUser from '../components/CardUser';
import RegisterUser from '../components/RegisterUser';
import { spacing } from '../theme';

export default function ProfileScreen() {
    
    const [ isRegister, setRegister ] = useState(false);

    const newUser = {
        id: '1013462094',
        foto: 'https://res.cloudinary.com/exs3lgp6/image/upload/v1791170243/Perfil.jpg',
        nombre: 'Marlon',
        apellido: 'Gomez',
        correo: 'MarlonGomez@gmail.com',
        telefono: '3066348019'
    }

    return (
        <View style={style.container}>
            { !isRegister && <RegisterUser onPress={() => {}}/>}
            { isRegister && <CardUser user={newUser} onPress={() => {}}/>}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        margin: spacing.xxl
    }
});