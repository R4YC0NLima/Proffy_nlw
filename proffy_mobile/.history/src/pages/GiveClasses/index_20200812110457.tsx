import React from 'react';
import {View, ImageBackground} from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles.ts';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImage} styles>
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;
