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
          <TextInput style={styles.input} placeholder="Qual a matéria?" placeholderTextColor="#c1" />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da Semana</Text>
              <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1" />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput style={styles.input} placeholder="Qual horário?" placeholderTextColor="#c1" />
            </View>
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
