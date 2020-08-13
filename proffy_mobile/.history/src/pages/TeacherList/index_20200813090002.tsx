import React from 'react';
import {View, Text} from 'react-native';

import PAgeHeader from '../../components/PageHeader';
import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader />
    </View>
  );
}

export default TeacherList;
