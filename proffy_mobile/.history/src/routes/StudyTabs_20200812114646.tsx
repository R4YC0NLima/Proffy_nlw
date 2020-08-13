import React from 'react';

import {createBottomNavigation} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomNavigation();

export default function Routes() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Landing" component={Landing} />
      <AppStack.Screen name="GiveClasses" component={GiveClasses} />
    </AppStack.Navigator>
  );
}