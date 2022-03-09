import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

interface Props {
  content: string;
}

const SettingScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
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

export default SettingScreen;
