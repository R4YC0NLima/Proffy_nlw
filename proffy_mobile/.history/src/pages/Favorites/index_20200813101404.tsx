import React from 'react';
import {View, ScrollView} from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles.ts';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos" />

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

export default Favorites;
