import { Platform } from 'react-native';

export const colors = {
    colorBackground: '#d2d8e2',
    colorSurface: '#FFFFFF',
    colorPrimary: '#258beb',
    colorText: '#172033',
    colorSoftText: '#64748B',
    colorBorder: '#001c44',
};

export const spacing = {
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

export default {colors, spacing, radius, typography}