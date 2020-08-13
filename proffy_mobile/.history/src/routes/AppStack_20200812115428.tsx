import React from 'react';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import GiveClasses from '../pages/GiveClasses';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Landing" component={Landing} />
        <AppStack.Screen name="GiveClasses" component={GiveClasses} />
        <AppStack.Screen name="StudyTabs" component={StudyTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
