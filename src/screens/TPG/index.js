import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from './styles';

const CHART_POINTS = [
    { left: '8%', bottom: 35 },
    { left: '22%', bottom: 28 },
    { left: '36%', bottom: 42 },
    { left: '50%', bottom: 22 },
    { left: '64%', bottom: 38 },
    { left: '78%', bottom: 18 },
    { left: '92%', bottom: 30 },
];

const CardHeader = ({ title }) => (
    <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Feather name="chevron-right" size={20} color={COLORS.textSecondary} />
    </View>
);

const MiniChart = () => (
    <View style={styles.chartContainer}>
        <View style={styles.chartLine} />
        {CHART_POINTS.map((point, index) => (
            <View
                key={index}
                style={[
                    styles.chartDot,
                    { left: point.left, bottom: point.bottom },
                ]}
            />
        ))}
    </View>
);

const TPG = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} activeOpacity={0.7}>
                    <Feather name="menu" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>TPG'ler</Text>
                <View style={styles.headerRight}>
                    <View style={styles.playIconWrap}>
                        <Feather name="play" size={14} color={COLORS.textPrimary} />
                    </View>
                    <View style={styles.appIcon}>
                        <Text style={styles.appIconText}>OTO{'\n'}ERP</Text>
                    </View>
                </View>
            </View>

            <View style={styles.editLinkRow}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.editLink}>TPG'leri düzenle</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <CardHeader title="Puan dağılımı" />
                    <View style={styles.emptyState}>
                        <Feather name="activity" size={28} color={COLORS.textSecondary} />
                        <Text style={styles.emptyText}>Henüz veri yok</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <CardHeader title="Kullanıcı edinmeler" />
                    <View style={styles.statsRow}>
                        <View>
                            <Text style={styles.statsLabel}>28 günlük ortalama</Text>
                            <Text style={styles.statsDate}>23 Tem 2026</Text>
                        </View>
                        <Text style={styles.statsValueRight}>0,11</Text>
                    </View>
                    <MiniChart />
                </View>

                <View style={styles.card}>
                    <CardHeader title="Kullanıcı kaybı" />
                    <View style={styles.statsRow}>
                        <View>
                            <Text style={styles.statsLabel}>28 günlük ortalama</Text>
                        </View>
                        <Text style={styles.statsValueRight}>0,25</Text>
                    </View>
                    <Text style={styles.statsValue}>0</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default TPG;
