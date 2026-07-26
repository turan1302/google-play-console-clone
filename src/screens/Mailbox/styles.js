import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1E1614',
    card: '#2A2020',
    textPrimary: '#F0E7E5',
    textSecondary: '#A69D9B',
    alert: '#F28B82',
    info: '#669DF6',
    unreadDot: '#F28B82',
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
    appIconSmall: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    appIconSmallText: {
        fontSize: 5,
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
        marginTop: 8,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    cardTopLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertIcon: {
        backgroundColor: COLORS.alert,
    },
    infoIcon: {
        backgroundColor: COLORS.info,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dateText: {
        fontSize: 13,
        color: COLORS.textSecondary,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.unreadDot,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.textPrimary,
        lineHeight: 22,
        marginBottom: 4,
    },
    cardBody: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 20,
    },
});
