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

const CHIPS = ['Telefonlar ve tabletler', 'ChromeOS', 'Android XR'];

const Versions = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} activeOpacity={0.7}>
                    <Feather name="menu" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sürümler</Text>
                <View style={styles.headerRight}>
                    <View style={styles.playIconWrap}>
                        <Feather name="play" size={14} color={COLORS.textPrimary} />
                    </View>
                    <View style={styles.appIcon}>
                        <Text style={styles.appIconText}>OTO{'\n'}ERP</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.sectionTitle}>Üretim</Text>

                <View style={styles.chipsRow}>
                    {CHIPS.map((label) => (
                        <View key={label} style={styles.chip}>
                            <Text style={styles.chipText}>{label}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.card}>
                    <View style={styles.cardTopRow}>
                        <Text style={styles.versionNumber}>1.0.5</Text>
                        <View style={styles.rolloutRow}>
                            <Text style={styles.rolloutPercent}>%100</Text>
                            <View style={styles.checkCircle}>
                                <Feather name="check" size={14} color="#FFFFFF" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBottomRow}>
                        <Text style={styles.timestamp}>21 Tem 2026 17:03</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Versions;
