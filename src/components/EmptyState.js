import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/index';
import { Ionicons } from '@expo/vector-icons';

export default function EmptyState({ icon = 'calendar-outline', tittle, message, onAction }) {
    return (
        <View style={styles.contenedor}>
            <View style={styles.circulo}>
                <Ionicons name={icon} size={34} color={colors.primario} />
            </View>
            <Text style={styles.titulo}>{tittle}</Text>
            <Text style={styles.mensaje}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.xxl,
    },
    circulo: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: colors.primarioSuave,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.lg,
    },
    titulo: { fontSize: 17, fontWeight: '700', color: colors.texto, textAlign: 'center' },
    mensaje: {
        fontSize: 14,
        color: colors.textoSuave,
        textAlign: 'center',
        marginTop: spacing.sm,
        lineHeight: 20,
    },
});