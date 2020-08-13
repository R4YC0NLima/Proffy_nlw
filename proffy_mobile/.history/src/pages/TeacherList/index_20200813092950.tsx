import React from 'react';
import {View} from 'react-native';

import PageHeader from '../../components/PageHeader';
import PageHeader from '../../components/PageHeader';
import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <TeacherItem />
    </View>
  );
}

export default TeacherList;
