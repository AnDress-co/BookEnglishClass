import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import DetailClassScreen from '../screens/DetailClassScreen';

const Stack = createNativeStackNavigator();

export default function ClassesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={StartScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailClass"
                component={DetailClassScreen}
                options={{ title: 'Detalle de la Clase', headerBackTitle: 'Atras' }}
            />
        </Stack.Navigator>
    );
}