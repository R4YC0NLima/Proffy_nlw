import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.ts';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image styles={styles.avatar} source={{ }} />
      </View>
    </View>
  );
}

export default TeacherItem;
