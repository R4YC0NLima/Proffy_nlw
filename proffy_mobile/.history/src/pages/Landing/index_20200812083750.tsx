import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles.ts';

import landingImg from '../../assets/images/landing.png';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      Text
    </View>
  );
}

export default Landing;
