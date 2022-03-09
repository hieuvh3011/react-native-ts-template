import AppColors from '@app/utils/colors';
import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {vs, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
type Props = {
  leftComponent?: JSX.Element;
  centerText?: string;
  rightComponent?: JSX.Element;
  style?: object;
  noBackButton?: boolean;
  noMenuButton?: boolean;
  iconColor?: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const {
    leftComponent,
    centerText,
    rightComponent,
    style,
    iconColor,
    noBackButton,
    noMenuButton,
    ...rest
  } = props;

  const getHeaderHeight = (): number => {
    return getStatusBarHeight() + vs(45);
  };

  const renderDefaultLeftComponent = (): JSX.Element => {
    if (noBackButton) {
      return <View style={styles.iconContainer} />;
    }
    return (
      <Pressable style={styles.iconContainer}>
        <Icon
          name="arrow-left"
          size={ms(20)}
          color={iconColor ?? AppColors.buttonText}
        />
      </Pressable>
    );
  };

  const renderDefaultRightComponent = (): JSX.Element => {
    if (noMenuButton) {
      return <View style={styles.iconContainer} />;
    }
    return (
      <Pressable style={styles.iconContainer}>
        <Icon
          name="dots-vertical"
          size={ms(20)}
          color={iconColor ?? AppColors.buttonText}
        />
      </Pressable>
    );
  };

  return (
    <View
      style={[styles.container, {height: getHeaderHeight()}, style]}
      {...rest}>
      {leftComponent ?? renderDefaultLeftComponent()}
      <Text style={styles.text}>{centerText}</Text>
      {rightComponent ?? renderDefaultRightComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight(),
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: ms(40),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: ms(15),
    color: AppColors.buttonText,
  },
});

Header.defaultProps = {
  centerText: 'Default Header Text',
  style: {},
  noBackButton: false,
  noMenuButton: true,
  leftComponent: undefined,
  rightComponent: undefined,
};

export default Header;
