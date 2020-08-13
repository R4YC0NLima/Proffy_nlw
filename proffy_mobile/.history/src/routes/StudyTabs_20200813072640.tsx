import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

// const {Navigator, Screen} = createBottomNavigation();
const Tab = createBottomNavigation();

function StudyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TeacherList" component={TeacherList} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default StudyTabs;
