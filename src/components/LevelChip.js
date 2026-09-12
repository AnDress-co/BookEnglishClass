import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme/index';

export default function LevelChip({ active, onPress, label }) {
    return (
        <Pressable
            style={(pressed) => [
                style.chip,
                active && style.chipActivo,
                pressed && { opacity: 0.7 }
            ]}
            onPress={onPress}
        >
            <Text style={[style.texto, active && style.textoActivo]}>{label}</Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    chip: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.full,
        backgroundColor: colors.colorSurface,
        borderWidth: 1,
        borderColor: colors.colorBorder,
        marginRight: spacing.sm,
        height: 32
    },
    chipActivo: {
        backgroundColor: colors.colorPrimary,
        borderColor: colors.colorPrimary,
    },
    texto: { fontSize: 14, fontWeight: '600', color: colors.colorSoftText },
    textoActivo: { color: '#ffffff', fontWeight: '600', fontSize: 15 },
});