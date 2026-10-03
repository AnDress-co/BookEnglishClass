import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailClassScreen from '../screens/DetailClassScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function ClassesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={TabNavigation}
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