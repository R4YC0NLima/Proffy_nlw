import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles.ts';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}>
        <Text>Para começar, você precisa se cadastrar como professor na </Text>
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;
