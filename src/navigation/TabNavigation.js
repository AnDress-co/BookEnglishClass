import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StartScreen from '../screens/StartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={StartScreen}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={BookingScreen}
                options={{ 
                    title: 'Mis reservas',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="library" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{ 
                    title: 'Perfil de usuario',
                    tabBarIcon: ({ color, size}) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                 }}
            />            
        </Tab.Navigator>
    );
}