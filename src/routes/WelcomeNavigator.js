import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Platform } from 'react-native';
import TPG from '../screens/TPG';
import Versions from '../screens/Versions';
import Mailbox from '../screens/Mailbox';
import Comments from '../screens/Comments';

const Tab = createBottomTabNavigator();

const TAB_BAR_BG = '#1E1614';
const TAB_COLOR_ACTIVE = '#FFFFFF';
const TAB_COLOR_INACTIVE = '#A69D9B';
const TAB_PILL_ACTIVE = '#5D3F3A';

const TAB_ICONS = {
    TPG: { family: 'feather', name: 'activity' },
    Versions: { family: 'material', name: 'rocket-launch-outline' },
    Mailbox: { family: 'feather', name: 'inbox' },
    Comments: { family: 'feather', name: 'message-square' },
};

const renderTabIcon = (routeName, focused, color) => {
    const icon = TAB_ICONS[routeName] ?? { family: 'feather', name: 'circle' };

    const IconComponent =
        icon.family === 'material' ? MaterialCommunityIcons : Feather;

    if (focused) {
        return (
            <View
                style={{
                    backgroundColor: TAB_PILL_ACTIVE,
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <IconComponent name={icon.name} size={22} color={TAB_COLOR_ACTIVE} />
            </View>
        );
    }

    return <IconComponent name={icon.name} size={22} color={color} />;
};

const WelcomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="TPG"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = [];

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR_ACTIVE,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    tabBarLabelStyle: {
                        fontWeight: '500',
                        fontSize: 12,
                        marginTop: 2,
                    },
                    tabBarIcon: ({ focused, color }) =>
                        renderTabIcon(route.name, focused, color),
                    tabBarStyle: tabBarHidden.includes(routeName)
                        ? { display: 'none' }
                        : {
                            backgroundColor: TAB_BAR_BG,
                            borderTopWidth: 0,
                            height: Platform.OS === 'ios' ? 88 : 72,
                            paddingTop: 8,
                            paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                            elevation: 0,
                        },
                };
            }}
        >
            <Tab.Screen
                name="TPG"
                component={TPG}
                options={{ tabBarLabel: "TPG'ler" }}
            />
            <Tab.Screen
                name="Versions"
                component={Versions}
                options={{ tabBarLabel: 'Sürümler' }}
            />
            <Tab.Screen
                name="Mailbox"
                component={Mailbox}
                options={{ tabBarLabel: 'Gelen Kutusu' }}
            />
            <Tab.Screen
                name="Comments"
                component={Comments}
                options={{ tabBarLabel: 'Yorumlar' }}
            />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;
