import {StackActions} from '@react-navigation/native';
import {navigationRef} from './MainNavigator';

export function getCurrentRouteName() {
  return navigationRef.current?.getCurrentRoute()?.name;
}

export function navigate(name: never, params: never) {
  navigationRef.current?.navigate({name, params});
}

export function replace(name: never, params: never) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  navigationRef.current?.goBack();
}
