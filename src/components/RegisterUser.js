import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { spacing, typography, colors, radius } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterUser({onPress}) {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    return (
        <View style={style.card}>
            <View>
                <View style={{margin: spacing.md}}>
                    <Text style={style.titleRegister}>
                        Bienvenido
                        <Ionicons name='people-circle' size={30} color={colors.colorPrimary}/>
                    </Text>
                    <Text style={style.textItem}>Registra tu cuenta aqui:</Text>
                </View>
                <Text style={style.textItem}>Documento:</Text>            
                <TextInput
                    style={style.input}
                    value={id}
                    onChangeText={setId}                    
                    autoComplete={false}
                    autoCorrect={false}
                />
                <Text style={style.textItem}>Nombre:</Text>            
                <TextInput
                    style={style.input}
                    value={name}
                    onChangeText={setName}                    
                    autoComplete={false}
                    autoCorrect={false}
                />
                <Text style={style.textItem}>Apellido:</Text>            
                <TextInput
                    style={style.input}
                    value={lastName}
                    onChangeText={setLastName}                    
                    autoComplete={false}
                    autoCorrect={false}
                />
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
                <TouchableOpacity style={style.registerButton} onPress={onPress}>
                    <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 15}}>
                        Registrarse {'  '}
                        <Ionicons name='finger-print-outline' size={20} color={'#ffff'}/>
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
    titleRegister: {
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
    registerButton: {
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