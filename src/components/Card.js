import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { typography, colors } from '../theme/Index';
import LabelLevel from './LabelLevel';
import { formatearPrecio } from '../data';

export default function Card({ dataClass, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image source={{uri: dataClass.image}}/>
            <View>
                <LabelLevel nivel={dataClass.nivel}/>
                <Text style={styles.title}>{dataClass.titulo}</Text>
                <Text>{dataClass.nivel}</Text>
                <Text>{dataClass.profesor.nombre}</Text>
                <Text> {formatearPrecio(dataClass.precio)} </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: typography.size.l,
        fontWeight: typography.weight.bold,
        color: colors.colorText
    }
});