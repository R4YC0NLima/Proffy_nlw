import React from 'react';
import {View, ScrollView} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
      <ScrollView>
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
