import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos" />

      <ScrollView
        style={styles.teacherList}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
          {
            favorites.map((teacher: Teacher) => {
              return (
                <TeacherItem key={teacher.id} teacher={teacher} favorited />
              )
            })
         }
      </ScrollView>
    </View>
  );
}

export default Favorites;
