import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {CreateStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Landing" component={} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;