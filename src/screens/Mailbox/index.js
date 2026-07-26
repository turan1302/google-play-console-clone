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

const NotificationCard = ({
    type = 'info',
    showAppIcon = false,
    date,
    unread = false,
    title,
    body,
}) => (
    <View style={styles.card}>
        <View style={styles.cardTopRow}>
            <View style={styles.cardTopLeft}>
                <View
                    style={[
                        styles.iconCircle,
                        type === 'alert' ? styles.alertIcon : styles.infoIcon,
                    ]}
                >
                    <Feather
                        name={type === 'alert' ? 'alert-circle' : 'info'}
                        size={16}
                        color="#FFFFFF"
                    />
                </View>
                {showAppIcon && (
                    <View style={styles.appIconSmall}>
                        <Text style={styles.appIconSmallText}>OTO{'\n'}ERP</Text>
                    </View>
                )}
            </View>
            <View style={styles.dateRow}>
                <Text style={styles.dateText}>{date}</Text>
                {unread && <View style={styles.unreadDot} />}
            </View>
        </View>
        {title ? <Text style={styles.cardTitle}>{title}</Text> : null}
        <Text style={styles.cardBody}>{body}</Text>
    </View>
);

const Mailbox = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} activeOpacity={0.7}>
                    <Feather name="menu" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Gelen Kutusu</Text>
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
                <Text style={styles.sectionTitle}>Önemli</Text>
                <NotificationCard
                    type="alert"
                    date="6 Tem 09:30"
                    unread
                    title="Uygulama yayın durumunuzla ilgili önemli bir güncelleme var"
                    body="Lütfen uygulama ayarlarınızı kontrol edin ve gerekli işlemleri en kısa sürede tamamlayın."
                />

                <Text style={styles.sectionTitle}>Diğer tüm öğeler</Text>
                <NotificationCard
                    showAppIcon
                    date="21 Tem 18:33"
                    title="Yeni sürüm yayınlandı"
                    body="1.0.5 sürümü kullanıcılara sunuldu. Mağaza sayfasında görünmesi birkaç saat sürebilir."
                />
                <NotificationCard
                    date="17 Tem 05:30"
                    unread
                    title="Politika güncellemesi hakkında bilgilendirme"
                    body="Google Play politikalarında yapılan son değişiklikleri incelemenizi öneririz."
                />
            </ScrollView>
        </View>
    );
};

export default Mailbox;
