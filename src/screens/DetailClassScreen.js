import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, TouchableOpacity, Button } from 'react-native';
import { colors, spacing, typography, radius } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatearPrecio } from '../data/Clases';
import LabelLevel, { LabelLebel } from '../components/LabelLevel'

export default function DetailClassScreen({ route, navigation }) {
    const insets = useSafeAreaInsets();
    const { dataClass } = route.params;
    const [places, setPlaces] = useState(dataClass.cupos);

    const deductPlace = () => {
        if (places > 0) {
            setPlaces(places - 1);
            Alert.alert("Reserva exitosa", "Has reservado un cupo para esta clase.");
        } else {
            Alert.alert("No hay cupos disponibles", "Lo sentimos, no hay cupos disponibles para esta clase.");
        }

    };

    const viewAlert = () => {
        Alert.alert(
            "Confirmación",
            "¿Estás seguro de continuar?",
            [
                { text: "No", onPress: () => Alert.alert("Reserva cancelada", "No se ha reservado ningún cupo.") },
                { text: "Sí", onPress: () => deductPlace() }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={[styles.pantalla, { paddingTop: insets.top + spacing.xs }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.datos}>
                    <Image source={{ uri: dataClass.imagen }} resizeMode="cover" style={styles.portada} />
                    <View style={styles.classInfo}>
                        <Text style={styles.title}>{dataClass.titulo}</Text>
                        <Text style={styles.descripcion}>{dataClass.descripcion}</Text>
                        <View style={styles.details}>
                            <Text style={styles.datoValor}>
                                <Ionicons
                                    name="book-outline"
                                    size={18}
                                    color={colors.colorPrimary}
                                />
                                {'  '}Nivel: {dataClass.nivel}
                            </Text>
                            <Text style={styles.datoValor}>
                                <Ionicons
                                    name="people-outline"
                                    size={18}
                                    color={colors.colorPrimary}
                                />
                                {'  '}Cupos: {places}
                            </Text>
                            <Text style={styles.datoValor}>
                                <Ionicons
                                    name="timer-outline"
                                    size={18}
                                    color={colors.colorPrimary}
                                />
                                {'  '}Duración: {dataClass.duracion} Horas
                            </Text>
                            <View>
                                <Text style={[styles.datoValor, {marginBottom: spacing.md}]}>
                                    <Ionicons
                                        name="calendar-outline"
                                        size={18}
                                        color={colors.colorPrimary}
                                    />
                                    {'  '}Horarios:                                    
                                </Text>
                                {
                                    dataClass.horarios.map((item) => (                                        
                                        <LabelLevel key={item} level={item}/>
                                    ))
                                }
                            </View>
                        </View>
                        <Text style={styles.precio}>{formatearPrecio(dataClass.precio)}</Text>
                    </View>
                </View>
                <View style={styles.profesor}>
                    <Image source={{ uri: dataClass.profesor.foto }} resizeMode="cover" style={styles.avatar} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.profesorTitulo}>Tu docente</Text>
                        <Text style={styles.profesorDato}>{dataClass.profesor.nombre}</Text>
                        <Text style={styles.profesorPais}>{dataClass.profesor.pais}</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        style={styles.reserveButton}
                        onPress={() => { viewAlert(); }}
                    >
                        <Text style={styles.reserveButtonText}>Reservar clase</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla: { flex: 1, backgroundColor: colors.colorBackground },
    scrollContent: { paddingBottom: spacing.xxl },
    portada: {
        width: '100%',
        height: 238,
    },
    datos: {
        backgroundColor: colors.colorSurface,
        borderRadius: radius.sm,
        overflow: 'hidden',
        margin: spacing.lg,
        borderWidth: 1,
        borderColor: colors.colorBorder,
    },
    classInfo: { padding: spacing.lg },
    title: { fontSize: 23, lineHeight: 29, fontWeight: '800', color: colors.colorText },
    descripcion: { ...typography.body, color: colors.colorSoftText, lineHeight: 22, marginTop: spacing.sm },
    details: { gap: spacing.md, marginTop: spacing.lg },
    datoValor: { fontSize: 14, fontWeight: '600', color: colors.colorText },
    precio: { fontSize: 20, fontWeight: '800', color: colors.colorPrimary, marginTop: spacing.lg },
    profesor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        backgroundColor: colors.colorSurface,
        borderRadius: radius.sm,
        padding: spacing.lg,
        marginHorizontal: spacing.lg,
        borderWidth: 1,
        borderColor: colors.colorBorder,
    },
    avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: colors.colorSecondary },
    profesorTitulo: { fontSize: 12, fontWeight: '700', color: colors.colorSoftText, marginBottom: spacing.xs },
    profesorDato: { fontSize: 16, fontWeight: '700', color: colors.colorText },
    profesorPais: { fontSize: 13, color: colors.colorSoftText, marginTop: spacing.xs },
    actionContainer: { marginTop: spacing.lg, marginHorizontal: spacing.lg },
    reserveButton: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: spacing.lg,
        borderRadius: radius.sm,
        alignItems: 'center',
    },
    reserveButtonText: { color: colors.colorSurface, fontSize: 16, fontWeight: '700' },   
});