import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Ionicos } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';
import { TextInput } from 'react-native/types_generated/index';

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
                            onPress={() => setBusqueda('')} 
                        /> 
                    )
                }
            </View>
        </view>
    );
}