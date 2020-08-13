import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/pages/Landing';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
