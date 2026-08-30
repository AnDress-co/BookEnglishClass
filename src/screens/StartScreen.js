import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NIVELES } from '../data/Clases';
import LevelChip from '../components/LevelChip';
import { colors } from '../theme/Index';    

export default function StartScreen({ navigation }) {
    const [ level, setLevel ] = useState('Todos');
    const [searching, setSearching] = useState('');

    return (
        <View style={{ flex: 1, paddingTop: useSafeAreaInsets().top, paddingHorizontal: 16 }}>
            <Text>Aplicacion de reservas para clases de ingles</Text>
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