import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/components/home/HomeScreen';
import SettingScreen from '@app/components/settings/SettingScreen';
import SCREEN_NAME from './ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '@app/utils/colors';
import Header from '@app/components/common/Header';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case SCREEN_NAME.HOME_SCREEN:
              iconName = 'home';
              break;
            case SCREEN_NAME.ACCOUNT_SCREEN:
              iconName = 'account';
              break;
            case SCREEN_NAME.SETTING_SCREEN:
              iconName = 'cog';
              break;
            default:
              iconName = 'home';
          }

          return (
            <Icon
              name={iconName}
              size={25}
              color={focused ? AppColors.activeTab : AppColors.inactiveTab}
            />
          );
        },
        lazy: true,
        tabBarActiveTintColor: AppColors.activeTab,
        tabBarInactiveTintColor: AppColors.inactiveTab,
      })}>
      <Tab.Screen
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          header: () => <Header noBackButton={true} />,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.ACCOUNT_SCREEN}
        component={SettingScreen}
        options={{
          tabBarLabel: 'Account',
          header: () => <Header noBackButton={true} />,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          header: () => <Header noBackButton={true} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
