import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

// const {Navigator, Screen} = createBottomNavigation();
const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontFamily: 'Archivo-Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{tabBarLabel: 'Proffys', tabBarIcon}} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}

export default StudyTabs;
