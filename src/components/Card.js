import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { typography, colors, radius, spacing } from '../theme/index';
import LabelLevel from './LabelLevel';
import { formatearPrecio } from '../data/Clases';

export default function Card({ dataClass, onPress }) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image style={styles.imagen} source={{ uri: dataClass.imagen }} />
            <View>
                <LabelLevel level={dataClass.nivel} />
                <Text style={[typography.title, { textAlign: 'center', paddingBottom: spacing.sm }]}>{dataClass.titulo}</Text>
                <Text style={typography.subTitleTwo}>Maestro: {dataClass.profesor.nombre}</Text>
                <Text style={typography.subTitleTwo}>Precio: {formatearPrecio(dataClass.precio)} </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    imagen: { width: '100%', height: 200, borderRadius: radius.md, marginBottom: spacing.sm },
    card: {
        backgroundColor: colors.colorSecondary,
        borderRadius: radius.md,
        padding: spacing.sm,
        margin: spacing.md,
    }
});