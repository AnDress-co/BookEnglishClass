import { Platform } from 'react-native';

export const colors = {
    colorBackground: '#f3f6f2',
    colorSurface: '#ffffff',
    colorPrimary: '#176b5b',
    colorSecondary: '#e4efe9',
    colorAccent: '#e87957',
    colorText: '#1b302b',
    colorSoftText: '#66756f',
    colorBorder: '#dce5df',
    colorTitle: '#172a26',
    colorError: '#eb3b06',
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
    title: { fontSize: 22, fontWeight: '800', color: colors.colorTitle },
    subTitle: { fontSize: 17, fontWeight: '700', color: colors.colorText },
    subTitleTwo: { fontSize: 14, fontWeight: '600', color: colors.colorText },
    body: { fontSize: 14, fontWeight: '400', color: colors.colorText },
}

export default { colors, spacing, radius, typography }