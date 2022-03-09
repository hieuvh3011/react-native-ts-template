import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SCREEN_NAME from './ScreenName';
import LoginScreen from '@app/components/login/LoginScreen';
import BottomTab from './BottomTab';
import SplashScreen from '@app/components/splash/SplashScreen';
import {createNavigationContainerRef} from '@react-navigation/native';

type RootStackParamList = {
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN_NAME.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAME.BOTTOM_TAB} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
