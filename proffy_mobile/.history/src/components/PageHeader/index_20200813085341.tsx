import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.ts';

function PageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}></View>
    </View>
  );
}

export default PageHeader;
