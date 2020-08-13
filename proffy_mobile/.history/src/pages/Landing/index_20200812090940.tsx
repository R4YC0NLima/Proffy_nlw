import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './styles.ts';

import landingImg from '../../assets/images/landing.png';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttons.Container}>
        <TouchableOpacity style={[styles.button]}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;
