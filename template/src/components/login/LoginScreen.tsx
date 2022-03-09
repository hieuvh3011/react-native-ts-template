import SCREEN_NAME from '@app/route/ScreenName';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '../common/AppButton';

type Props = {};

const LoginScreen: React.FC<Props> = ({...rest}) => {
  const navigation = useNavigation<any>();

  const goToBottomTab = () => navigation.navigate(SCREEN_NAME.BOTTOM_TAB);

  return (
    <View style={styles.container} {...rest}>
      <Text>Login Screen</Text>
      <AppButton style={styles.button} text={'Login'} onPress={goToBottomTab} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    marginTop: '10@vs',
    borderRadius: '10@ms',
  },
});

export default LoginScreen;
