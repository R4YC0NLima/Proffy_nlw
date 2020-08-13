import React from 'react';

import {createBottomNavigation} from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomNavigation();

export default function Routes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
      {/* <Screen name="GiveClasses" component={GiveClasses} /> */}
    </Navigator>
  );
}
