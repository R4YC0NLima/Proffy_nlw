import React from 'react';
import {StatusBar} from 'react-native';
import Landing from './src/pages/Landing';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="status" />
    </>
  );
}
