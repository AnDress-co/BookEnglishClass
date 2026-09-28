import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/index';

export default function LabelLevel({ level }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{level}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        backgroundColor: colors.colorSecondary,
        borderRadius: 6,
        marginBottom: spacing.sm,
    },
    text: { fontSize: 12, fontWeight: '700', color: colors.colorPrimary },
});