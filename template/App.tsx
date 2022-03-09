import MainNavigator from '@app/route/MainNavigator';
import React from 'react';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <MainNavigator />
    </>
  );
};

export default App;
