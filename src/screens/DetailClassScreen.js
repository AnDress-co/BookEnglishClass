import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import { colors, spacing, typography, radius, shadow } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatearPrecio } from '../data/Clases';

export default function DetailClassScreen({ route, navigation }) {
    const insets = useSafeAreaInsets();
    const { dataClass } = route.params;

    return (
        <View style={[styles.pantalla, { paddingTop: insets.top + spacing.xs }]}>
            <ScrollView
                shadowVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <View style={styles.datos}>
                    <Image source={{ uri: dataClass.imagen }} resizeMode="cover" style={styles.portada} />
                    <Text></Text>
                    <View style={{ paddingHorizontal: spacing.md, gap: spacing.sm }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: '700',
                            color: colors.colorPrimary
                        }}
                        >                            
                            {dataClass.titulo}
                        </Text>
                        <Text style={{
                            textAlign: 'center', 
                            fontSize: 16, 
                            marginBottom: spacing.md
                        }}
                        >
                            {dataClass.descripcion}
                        </Text>                        
                        <Text style={styles.datoValor}>
                            <Ionicons 
                                name="book-outline"
                                size={20}
                                color={colors.colorPrimary}
                            />
                            °Nivel: {dataClass.nivel}
                        </Text>
                        <Text style={styles.datoValor}>
                            <Ionicons 
                                name="people-outline"
                                size={20}
                                color={colors.colorPrimary}
                            />
                            °Cupos: {dataClass.cupos}
                        </Text>
                        <Text style={styles.datoValor}>
                            <Ionicons 
                                name="timer-outline"
                                size={20}
                                color={colors.colorPrimary}
                            />
                            °Duración: {dataClass.duracion}
                        </Text>
                        <Text style={styles.datoValor}>
                            <Ionicons 
                                name="calendar-outline"
                                size={20}
                                color={colors.colorPrimary}
                            />
                            °Horario: {dataClass.horarios}
                        </Text>
                        <Text style={styles.precio}>Precio: {formatearPrecio(dataClass.precio)}</Text>
                    </View>
                </View>
                <View style={styles.profesor}>
                    <Image source={{ uri: dataClass.profesor.foto }} resizeMode="cover" style={styles.avatar} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.colorPrimary }}>Datos del docente:</Text>
                        <Text style={styles.profesorDato}>{dataClass.profesor.nombre}</Text>
                        <Text style={styles.profesorDato}>{dataClass.profesor.pais}</Text>
                    </View>
                </View>
                <View style={{ marginTop: spacing.md, alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.colorPrimary,
                            paddingVertical: spacing.md,
                            width: 200,
                            borderRadius: radius.lg,
                            alignItems: 'center'
                        }}
                        onPress={() => { Alert.alert('Reservar clase') }}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>Reservar clase</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.barra}>
                    <Text style={{ paddingHorizontal: spacing.xxl }}>Informacion de la clase.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla: { flex: 1, backgroundColor: colors.colorBackground },
    portada: {
        width: '100%',
        height: 250,
        padding: spacing.sm,
        borderRadius: radius.lg
    },
    datos: {
        backgroundColor: colors.colorSurface,
        borderRadius: radius.lg,
        paddingVertical: spacing.sm,
        margin: spacing.sm,
    },
    datoValor: { fontSize: 15, fontWeight: '500', color: colors.texto },
    precio: { fontSize: 18, fontWeight: '700', color: colors.colorPrimary },
    profesor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        backgroundColor: colors.colorSurface,
        borderRadius: radius.lg,
        padding: spacing.lg,
        margin: spacing.sm,
    },
    avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.colorBorder },
    profesorDato: { fontSize: 15, fontWeight: '500', color: colors.colorText },
    descripcion: { ...typography.cuerpo, color: colors.colorSoftText, lineHeight: 22, marginTop: spacing.sm },
    barra: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.colorSurface,
        paddingVertical: spacing.lg,
        paddingTop: spacing.lg
    }
});