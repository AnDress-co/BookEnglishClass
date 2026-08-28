import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Ionicos } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NIVELES } from '../data';
import LevelChip from '../components/LevelChip';

export default function StartScreen({ navigation }) {
    const [ level, setLevel ] = useState('Todos');
    const [searching, setSearching] = useState();

    return (
        <view>
            <Text>Aplicacion de reservas para clases de ingles</Text>
            <View>
                <Ionicos 
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
                        <Ionicos 
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
                            label={item}
                            active={item}
                            onPress={() => setLevel(item)}
                        />
                    ))
                }
            </ScrollView>
        </view>
    );
}