import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/Index';

export default function LabelLevel({ level }) {
    return (
        <View style={[styles.container, { backgroundColor: colors.colorBackground}]}>
            <Text style={styles.text}> {level} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'auto',
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderWidth: 1
    },
    text: {fontSize: 11, fontWeight: '700', color: colors.colorText, letterSpacing: 0.3}    
});