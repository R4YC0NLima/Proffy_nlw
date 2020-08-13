import React from 'react';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
// import StudyTabs from './StudyTabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Navigator = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        {/* <AppStack.Screen name="Study" component={StudyTabs} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
