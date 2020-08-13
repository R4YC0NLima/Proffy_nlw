import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.ts';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/R4YC0NLima.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Raycon Lima</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Eu sou a neto da bruxa que seus ancestrais não conseguiram queima!!!
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {''}
          <Text style={styles.priceValue}>R$50,00</Text>
        </Text>
      </View>
    </View>
  );
}

export default TeacherItem;
