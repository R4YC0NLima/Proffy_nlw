import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput style={styles.input} placeholder="Qual o dia?" />

          <View style={styles.inputGroup}>
            <<i class="fa fa-street-view" aria-hidden="true"></i>
          </View>
        </View>
        
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
