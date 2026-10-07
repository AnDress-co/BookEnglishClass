import react, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CardUser from '../components/CardUser';
import RegisterUser from '../components/RegisterUser';
import UpdateUser from '../components/UpdateUser';
import { spacing } from '../theme';
import { UserContext } from '../context/UserContext';

export default function ProfileScreen() {
    
    const { registeredUser, addUser } = useContext(UserContext);
    const [ isRegister, setIsRegister ] = useState(registeredUser.isRegister || false);
    const [ isUpdate, setIsUpdate] = useState(false);

    const handleProfile = async (user) => {
        const registration = await addUser(user);
        const successMessage = isUpdate ? "Se realizo la actualizacion de forma exitosa." : "Se realizo el registro de forma exitosa.";        

        if(registration) {
            Alert.alert("Operacion exitosa", successMessage);
            setIsRegister(user.isRegister);
            if(isUpdate) setIsUpdate(false);
        } else {
            Alert.alert("Operacion fallida", "No se realizo la operacion.");
        }
    };

    return (
        <View style={style.container}>
            { !isRegister && <RegisterUser onRegister={handleProfile}/>}
            { (isRegister && !isUpdate) && <CardUser user={registeredUser} onPress={() => {setIsUpdate(true)}}/>}
            { isUpdate && <UpdateUser registeredUser={registeredUser} onUpdate={handleProfile}/>}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        margin: spacing.xxl
    }
});