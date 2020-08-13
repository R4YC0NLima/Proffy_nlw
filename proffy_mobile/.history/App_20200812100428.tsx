import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
