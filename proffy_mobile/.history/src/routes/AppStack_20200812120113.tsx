import React from 'react';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
// import StudyTabs from '../pages/StudyTabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Landing" component={Landing} />
        <AppStack.Screen name="GiveClasses" component={GiveClasses} />
        <AppStack.Screen name="Study" component={StudyTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
