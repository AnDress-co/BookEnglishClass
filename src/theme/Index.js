import { Platform } from 'react-native';

export const colors = {
    colorBackground: '#4ce0c8',
    colorSurface: '#ffffff',
    colorText: '#050f3b',
    colorBorder: '#aadadd',    
}

export const expacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
}

export const radius = {
    sm: 8,
    md: 14,
    lg: 20,
    full: 9999
}

export const typography = {
    title: {fontSize: 24, fontWeight: '800', color: colors.colorText},
}

export default {colors, expacing, radius, typography}