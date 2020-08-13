import React from 'react';

import {createBottomNavigation} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomNavigation();

export default function Routes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="GiveClasses" component={GiveClasses} />
    </Navigator>
  );
}
