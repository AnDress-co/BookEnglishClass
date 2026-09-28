import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { typography, colors, radius, spacing } from '../theme/index';
import LabelLevel from './LabelLevel';
import { formatearPrecio } from '../data/Clases';

export default function Card({ dataClass, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={onPress}
        >
            <Image style={styles.imagen} source={{ uri: dataClass.imagen }} />
            <View style={styles.info}>
                <LabelLevel level={dataClass.nivel} />
                <Text style={styles.title}>{dataClass.titulo}</Text>
                <Text style={styles.teacher}>Maestro: {dataClass.profesor.nombre}</Text>
                <Text style={styles.price}>{formatearPrecio(dataClass.precio)}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    imagen: { width: '100%', height: 184 },
    card: {
        backgroundColor: colors.colorSurface,
        borderRadius: radius.sm,
        overflow: 'hidden',
        margin: spacing.md,
        borderWidth: 1,
        borderColor: colors.colorBorder,
        elevation: 2,
        shadowColor: '#19352d',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    cardPressed: { opacity: 0.92, transform: [{ scale: 0.99 }] },
    info: { padding: spacing.lg, alignItems: 'flex-start' },
    title: { ...typography.subTitle, fontSize: 18, marginBottom: spacing.xs },
    teacher: { ...typography.body, color: colors.colorSoftText },
    price: { ...typography.subTitleTwo, color: colors.colorPrimary, marginTop: spacing.sm },
});