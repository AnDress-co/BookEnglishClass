import { useWindowDimensions } from 'react-native';

export default function useResponsive() {
    const { width, height } = useWindowDimensions();
    const isTablet = width >= 768;
    const isLandscape = width > height;
    return {
        width,
        height,
        isLandscape,
        isTablet,
        columns: isTablet ? 2 : 1,
        broad: isTablet ? 320 : Math.min(width * 0.72, 300),
        paddingLadscape: isTablet ? 32 : 16
    };
}