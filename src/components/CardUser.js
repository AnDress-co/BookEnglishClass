import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { spacing, typography, colors, radius } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';

export default function CardUser({ user, onPress }) {
    return (
        <View style={style.card}>
            <View>
                <Image source={{ uri: user.foto }} resizeMode="cover" style={style.avatar}/>
            </View>
            <View>
                <Text style={[typography.subTitle, {textAlign:'center', marginBottom: spacing.md}]}>Informacion Personal:</Text>
                <Text style={style.textItem}>
                    <Text style={{ fontWeight: 'bold' }}> Nombre: </Text>
                    {user.nombre + ' ' + user.apellido}
                </Text>                
                <Text style={style.textItem}>
                    <Text style={{ fontWeight: 'bold' }}> Correo: </Text>
                    {user.correo}
                </Text>
                <Text style={style.textItem}>
                    <Text style={{ fontWeight: 'bold' }}> Telefono: </Text>
                    {user.telefono}
                </Text>
            </View>
            <View>
                <TouchableOpacity style={style.updateButton} onPress={onPress}>
                    <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 15}}>
                        Actualizar Datos {'  '}
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
    textItem: {
        marginBottom: spacing.sm,
        textAlign: 'center'
    },    
    avatar: {
        margin: spacing.xxl,
        width: 150, 
        height: 150,
        borderRadius: 100,
        backgroundColor: colors.colorSecondary 
    },
    updateButton: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: spacing.lg,
        borderRadius: radius.sm,
        alignItems: 'center',
        margin: spacing.xl,
        padding: spacing.md,
    }
});