import AppColors from '@app/utils/colors';
import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

type Props = {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  textStyle?: object;
  style?: object;
};

const AppButton: React.FC<Props> = (props: Props) => {
  const {style, text, onPress, textStyle, ...rest} = props;
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '15@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5@ms',
    backgroundColor: AppColors.primary,
  },
  text: {
    color: AppColors.buttonText,
  },
});

AppButton.defaultProps = {
  text: 'default text of button',
  style: {},
  textStyle: {},
};

export default AppButton;
