import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1E1614',
    card: '#2A2020',
    chip: '#3A2F2D',
    textPrimary: '#F0E7E5',
    textSecondary: '#A69D9B',
    success: '#4CAF50',
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
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.textPrimary,
        marginBottom: 12,
    },
    chipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    chip: {
        backgroundColor: COLORS.chip,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    chipText: {
        fontSize: 13,
        color: COLORS.textPrimary,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: 16,
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    versionNumber: {
        fontSize: 36,
        fontWeight: '400',
        color: COLORS.textPrimary,
        letterSpacing: -0.5,
    },
    rolloutRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    rolloutPercent: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.textPrimary,
    },
    checkCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: COLORS.success,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBottomRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    timestamp: {
        fontSize: 13,
        color: COLORS.textSecondary,
    },
});
