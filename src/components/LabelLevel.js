import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme/index';

export default function LabelLevel({ level }) {
    return (
        <View style={styles.container}>
            <Text style={[typography.subTitle, { textAlign: 'right' }]}> {level} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'auto',
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorBorder,
        borderRadius: 6,
        marginBottom: spacing.sm
    }
});