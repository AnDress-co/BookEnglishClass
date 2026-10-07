import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { spacing, typography, colors, radius } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';

export default function UpdateUser ({registeredUser, onUpdate}) {    
    const [email, setEmail] = useState(registeredUser.correo);
    const [phone, setPhone] = useState(registeredUser.telefono);

    const handleUpdate = () => {
        const user = {
            id: registeredUser.id,
            foto: 'https://res.cloudinary.com/exs3lgp6/image/upload/v1791170243/Perfil.jpg',
            nombre: registeredUser.nombre,
            apellido: registeredUser.apellido,
            correo: email,
            telefono: phone,
            isRegister: true
        }

        onUpdate(user);
    }    

    return (
        <View style={style.card}>
            <View>
                <View style={{margin: spacing.md}}>
                    <Text style={style.title}>
                        Actualizar datos {' '}
                        <Ionicons name='layers-outline' size={25} color={colors.colorPrimary}/>
                    </Text>                    
                </View>                
                <Text style={style.textItem}>Correo:</Text>            
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}                    
                    autoComplete={false}
                    autoCorrect={false}
                />
                <Text style={style.textItem}>Telefono:</Text>            
                <TextInput
                    style={style.input}
                    value={phone}
                    onChangeText={setPhone}                    
                    autoComplete={false}
                    autoCorrect={false}
                />
            </View>
            <View>
                <TouchableOpacity style={style.updateButton} onPress={handleUpdate}>
                    <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 15}}>
                        Guardar Cambios {'  '}
                        <Ionicons name='pencil' size={20} color={'#ffff'}/>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',        
        backgroundColor: colors.colorSurface,
        borderRadius: radius.sm,
        margin: spacing.xxl,        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.colorPrimary,
        margin: spacing.xxl,
    },
    textItem: {        
        marginBottom: spacing.xs,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    updateButton: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: spacing.lg,
        borderRadius: radius.sm,
        alignItems: 'center',
        margin: spacing.xl,
        padding: spacing.md,
    },
    input: {        
        color: colors.colorText,
        height: 35,        
        borderRadius: radius.sm,
        borderColor: colors.colorPrimary,
        borderWidth: 0.5,
        marginBottom: spacing.xs,
        paddingLeft: spacing.xs,
    },
});