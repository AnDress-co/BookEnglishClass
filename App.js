import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClassesStack from './src/navigation/ClassesStack';
import { DefaultTheme } from '@react-navigation/native';
import { colors } from './src/theme/Index';


const temaNavegacion = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.colorBackground,
    card: colors.colorSurface,
    primary: colors.colorPrimary,
    text: colors.colorText,
    border: colors.colorBorder,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={temaNavegacion}>
        <StatusBar style="dark"/>
        <ClassesStack />
      </NavigationContainer>        
    </SafeAreaProvider>  
  );
}
