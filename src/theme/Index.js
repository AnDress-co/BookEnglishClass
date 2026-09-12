import { Platform } from 'react-native';

export const colors = {
    colorBackground: '#d2d8e2',
    colorSurface: '#ffffff',
    colorPrimary: '#258beb',
    colorSecondary: '#78aeda',
    colorText: '#19253f',
    colorSoftText: '#304a6e',
    colorBorder: '#001c44',
    colorTitle: '#000000',
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
    title: { fontSize: 20, fontWeight: '800', color: colors.colorTitle },
    subTitle: { fontSize: 18, fontWeight: '700', color: colors.colorText },
    subTitleTwo: { fontSize: 15, fontWeight: '600', color: colors.colorText },
    body: { fontSize: 14, fontWeight: '400', color: colors.colorText },
}

export default { colors, spacing, radius, typography }