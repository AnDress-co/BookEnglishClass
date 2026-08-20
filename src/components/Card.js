import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { colors, expacing, radius, typography } from '../theme';
import LabelLevel from './LabelLevel';

export default function Card({ dataClass, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image source={{uri: dataClass.image}}/>
            <View>
                <LabelLevel level={dataClass.level} />
            </View>
        </Pressable>
    );
}