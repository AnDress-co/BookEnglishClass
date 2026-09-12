import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NIVELES, CLASES } from '../data/Clases';
import LevelChip from '../components/LevelChip';
import { colors, typography, spacing, radius } from '../theme/index';
import Card from '../components/Card';
import EmptyState from '../components/EmptyState';
import useResponsive from '../hooks/useResponsive';

export default function StartScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const { colums, paddingLadscape } = useResponsive()
    const [level, setLevel] = useState('Todos');
    const [searching, setSearching] = useState('');
    const results = useMemo(() => {
        const textSearch = searching.trim().toLowerCase();
        return CLASES.filter((clase) => {
            const levelMatch = level === 'Todos' || clase.nivel === level;
            const textMatch = textSearch ||
                textSearch === '' ||
                clase.profesor.nombre.toLowerCase().includes(textSearch) ||
                clase.titulo.toLowerCase().includes(textSearch) ||
                clase.descripcion.toLowerCase().includes(textSearch) ||
                clase.profesor.apellido.toLowerCase().includes(textSearch);
            return levelMatch && textMatch;
        });
    }, [searching, level]);

    return (
        <View style={[style.pantalla, { paddingTop: insets.top + spacing.md }]}>
            <Text style={[typography.title, { marginBottom: spacing.md, marginTop: spacing.md, textAlign: 'center' }]}>
                English classes
            </Text>
            <View style={style.buscador}>
                <Ionicons
                    name="search-circle"
                    size={20}
                    color={colors.colorText}
                />
                <TextInput
                    value={searching}
                    onChangeText={setSearching}
                    placeholder="Buscar clases..."
                    autoComplete={false}
                    autoCorrect={false}
                />
                {
                    searching.length > 0 && (
                        <Ionicons
                            name="close-circle"
                            size={20}
                            color={colors.colorText}
                            onPress={() => setSearching('')}
                        />
                    )
                }
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, paddingBottom: spacing.xxl }}
            >
                {
                    NIVELES.map((item) => (
                        <LevelChip
                            key={item}
                            label={item}
                            active={item}
                            onPress={() => setLevel(item)}
                        />
                    ))
                }
            </ScrollView>

            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        dataClass={item}
                        onPress={() => navigation.navigate('DetailClass', { dataClass: item })}
                    />
                )}
                contentContainerStyle={{
                    paddingLadscape,
                    flexGrow: 1
                }}
                numColumns={colums}
                ListEmptyComponent={() => (
                    <EmptyState
                        icon="search-circle-outline"
                        tittle="No se encontraron resultados"
                        message="Intenta con otra busqueda o nivel"
                        onAction={() => {
                            setLevel('Todos');
                            setSearching('');
                        }}
                    />
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    pantalla: { flex: 1, backgroundColor: colors.colorBackground },
    buscador: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        backgroundColor: colors.colorSurface,
        borderRadius: radius.md,
        paddingHorizontal: spacing.lg,
        height: 40,
        marginTop: spacing.lg,
        marginBottom: spacing.lg,
        marginHorizontal: spacing.lg,
        borderColor: colors.colorBorder,
    },
    input: { flex: 1, fontSize: 14, color: colors.colorText, paddingVertical: 0 },
});