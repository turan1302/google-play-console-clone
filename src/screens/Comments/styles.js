import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1E1614',
    chip: '#2A2020',
    chipBorder: '#4A3F3D',
    textPrimary: '#F0E7E5',
    textSecondary: '#A69D9B',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerLeft: {
        width: 40,
        alignItems: 'flex-start',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: COLORS.textPrimary,
        letterSpacing: 0.2,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    playIconWrap: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: COLORS.textPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    appIconText: {
        fontSize: 7,
        fontWeight: '700',
        color: '#1A73E8',
        textAlign: 'center',
    },
    filtersRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    filterChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: COLORS.chip,
        borderWidth: 1,
        borderColor: COLORS.chipBorder,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    filterText: {
        fontSize: 13,
        color: COLORS.textPrimary,
    },
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingBottom: 80,
    },
    emptyText: {
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginTop: 16,
    },
});
