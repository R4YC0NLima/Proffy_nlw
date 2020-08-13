import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles.ts';

function TeacherList() {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        {isFiltersVisible && (
          
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
