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
        <View style={styles.}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
