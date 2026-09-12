import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { colors, spacing, typography, radius, shadow } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LevelChip from '../components/LevelChip';
import useResponsive from '../hooks/useResponsive';

export default function DetailClassScreen({ route, navigation }) {
    const insets = useSafeAreaInsets();
    const { dataClass } = route.params;

    return (
        <View style={styles.pantalla}>
            <ScrollView
                shadowVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Image source={{ uri: dataClass.imagen }} resizeMode="cover" style={styles.portada} />
                /*
                    Para el Martes:
                    La foto del profesor y al lado el nombre y apellido del profesor
                    Precio
                    Duracion
                    Cupos
                    Horario
                    Boton que se llame reservar clase
                */
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla: { flex: 1, backgroundColor: colors.colorBackground },
    portada: { width: '100%', backgroundColor: colors.colorSoftText },
    datos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.colorSurface,
        borderRadius: radius.lg,
        paddingVertical: spacing.lg,
    },
    dato: { alignItems: 'center', gap: 2 },
    datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
    profesor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        backgroundColor: colors.colorSurface,
        borderRadius: radius.lg,
        padding: spacing.lg,
    },
    avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.colorBorder },
    profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.colorText },
    descripcion: { ...typography.cuerpo, color: colors.colorSoftText, lineHeight: 22, marginTop: spacing.sm },
    barra: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.colorSurface,
        borderTopWidth: 1,
        borderTopColor: colors.colorBorder,
        paddingVertical: spacing.lg,
        paddingTop: spacing.lg
    },
    precio: { fontSize: 18, fontWeight: '800', color: colors.colorPrimary },
});