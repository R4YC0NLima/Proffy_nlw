import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.ts';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image styles={stylews.avatar} />
      </View>
    </View>
  );
}

export default TeacherItem;
