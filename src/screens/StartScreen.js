import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NIVELES } from '../data/Clases';
import LevelChip from '../components/LevelChip';
import { colors, typography, spacing, radius } from '../theme/index';

export default function StartScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const [ level, setLevel ] = useState('Todos');
    const [searching, setSearching] = useState('');

    return (
        <View style={[style.pantalla, { paddingTop: insets.top + spacing.md }]}>
            <Text style={typography.title}>Aplicacion para clases de Ingles</Text>
            <View>
                <Ionicons 
                    name="search-circle" 
                    size={18} 
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
                            size={18} 
                            color={colors.colorText} 
                            onPress={() => setSearching('')} 
                        /> 
                    )
                }
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0 }}
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
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.colorBorder,
  },
  input: { flex: 1, fontSize: 14, color: colors.colorText, paddingVertical: 0 },
});