import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.ts';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
            styles={styles.avatar}
            source={{uri: 'https://avatars1.githubusercontent.com/u/49953505?s=460&u=f3ce52353b9c6eb766d4a8c850f000d3f2a07f6b&v=4' }} />
      </View>
    </View>
  );
}

export default TeacherItem;
