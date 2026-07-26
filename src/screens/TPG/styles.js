import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1E1614',
    card: '#2A2020',
    textPrimary: '#F0E7E5',
    textSecondary: '#A69D9B',
    accent: '#F28B82',
    chartLine: '#8AB4F8',
    chartDot: '#669DF6',
    headerBorder: '#3A2E2C',
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
    editLinkRow: {
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    editLink: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.accent,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        gap: 12,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.textPrimary,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        gap: 12,
    },
    emptyText: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    statsLabel: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginBottom: 4,
    },
    statsDate: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    statsValue: {
        fontSize: 36,
        fontWeight: '400',
        color: COLORS.textPrimary,
        letterSpacing: -0.5,
    },
    statsValueRight: {
        fontSize: 36,
        fontWeight: '400',
        color: COLORS.textPrimary,
        textAlign: 'right',
    },
    chartContainer: {
        height: 80,
        marginTop: 8,
        position: 'relative',
    },
    chartLine: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: COLORS.chartLine,
        opacity: 0.6,
    },
    chartDot: {
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.chartDot,
    },
});
