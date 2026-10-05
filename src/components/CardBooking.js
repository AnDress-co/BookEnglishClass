import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors, radius, spacing } from '../theme/index';
import { formatearFecha } from '../data/Clases';
import { Ionicons } from '@expo/vector-icons';
import { formatearPrecio } from '../data/Clases';

export default function CardBooking({ booking, onPress }) {
    return (
        <View style={style.container}>
            <View style={style.CardBooking}>
                <Text style={typography.subTitle}>{booking.titulo}</Text>
                <Text style={typography.body}>
                    <Text style={{ fontWeight: 'bold' }}>Maestro: </Text>
                    {booking.profesor}
                </Text>
                <Text style={typography.body}>
                    <Text style={{ fontWeight: 'bold' }}>Precio: </Text>
                    {formatearPrecio(booking.precio)}
                </Text>
                <Text style={typography.body}>
                    <Text style={{ fontWeight: 'bold' }}>Horario: </Text>
                    {booking.horario}
                </Text>
                <Text style={typography.body}>
                    <Text style={{ fontWeight: 'bold' }}>Reservada: </Text>
                    {formatearFecha(booking.creadoEn)}
                </Text>     
            </View>            
            <TouchableOpacity onPress={onPress} style={style.CancelButton}>
                <Text style={style.TextCancelButton}>                    
                    <Ionicons name="trash" size={35} color={colors.colorSurface}/>
                </Text>
            </TouchableOpacity>        
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',        
        alignItems: 'stretch',
        marginBottom: spacing.md,        
    },
    CardBooking: {
        width: '75%',        
        padding: spacing.md,
        backgroundColor: colors.colorSurface,
        borderTopLeftRadius: radius.sm,
        borderBottomLeftRadius: radius.sm,         
    },
    CancelButton: {        
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',        
        backgroundColor: colors.colorError,        
        borderTopRightRadius: radius.sm,
        borderBottomRightRadius: radius.sm,
    },    
});