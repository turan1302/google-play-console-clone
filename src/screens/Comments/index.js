import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from './styles';

const FILTERS = ['Tarih aralığı', 'Puan', 'Yanıt durumu'];

const Comments = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} activeOpacity={0.7}>
                    <Feather name="menu" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Yorumlar</Text>
                <View style={styles.headerRight}>
                    <View style={styles.playIconWrap}>
                        <Feather name="play" size={14} color={COLORS.textPrimary} />
                    </View>
                    <View style={styles.appIcon}>
                        <Text style={styles.appIconText}>OTO{'\n'}ERP</Text>
                    </View>
                </View>
            </View>

            <View style={styles.filtersRow}>
                {FILTERS.map((label) => (
                    <TouchableOpacity key={label} style={styles.filterChip} activeOpacity={0.7}>
                        <Text style={styles.filterText}>{label}</Text>
                        <Feather name="chevron-down" size={16} color={COLORS.textPrimary} />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.emptyState}>
                <Feather name="message-square" size={28} color={COLORS.textSecondary} />
                <Text style={styles.emptyText}>
                    Uygulamanızda henüz herhangi bir abonelik yok
                </Text>
            </View>
        </View>
    );
};

export default Comments;
