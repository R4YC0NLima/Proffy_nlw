// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/Landing';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Landing" component={Landing} />
        {/* <AppStack.Screen name="Detail" component={Detail} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
