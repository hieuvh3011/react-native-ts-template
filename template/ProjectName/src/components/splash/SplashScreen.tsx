import SCREEN_NAME from '@app/route/ScreenName';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

interface Props {
  content: string;
}

const SplashScreen = (props: Props) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(SCREEN_NAME.LOGIN_SCREEN));
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Text>{props.content}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
