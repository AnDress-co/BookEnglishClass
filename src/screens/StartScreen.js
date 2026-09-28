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
            const textMatch = textSearch === '' ||
                clase.profesor.nombre.toLowerCase().includes(textSearch) ||
                clase.profesor.pais.toLowerCase().includes(textSearch) ||
                clase.titulo.toLowerCase().includes(textSearch) ||
                clase.nivel.toLowerCase().includes(textSearch) ||
                clase.descripcion.toLowerCase().includes(textSearch);
            return levelMatch && textMatch;            
        });        
    }, [searching, level]);

    return (
        <View style={[style.pantalla, { paddingTop: insets.top + spacing.md }]}>
            <Text style={[typography.title, style.heading]}>
                English classes
            </Text>
            <View style={style.buscador}>
                <Ionicons
                    name="search-circle"
                    size={20}
                    color={colors.colorText}                    
                />
                <TextInput
                    style={style.input}
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
                style={style.filters}
                contentContainerStyle={style.filterContent}
            >
                {
                    NIVELES.map((item) => (
                        <LevelChip
                            key={item}
                            label={item}
                            active={level === item}
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
                    paddingHorizontal: paddingLadscape,
                    paddingBottom: spacing.xxl,
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
    heading: {
        marginHorizontal: spacing.xl,
        marginTop: spacing.md,
        marginBottom: spacing.sm,
        textAlign: 'left',
        fontSize: 27,
        letterSpacing: 0,
    },
    buscador: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.colorSurface,
        borderRadius: radius.md,
        paddingHorizontal: spacing.lg,
        height: 52,
        marginTop: spacing.sm,
        marginBottom: spacing.lg,
        marginHorizontal: spacing.lg,
        borderWidth: 1,
        borderColor: colors.colorBorder,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: colors.colorText,
        paddingVertical: 0,
        marginLeft: spacing.sm,
    },
    filters: { flexGrow: 0, marginBottom: spacing.md, paddingBottom: spacing.lg, paddingTop: spacing.lg },
    filterContent: { paddingHorizontal: spacing.lg, alignItems: 'center' },
});