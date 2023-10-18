import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail'

import type { TStackParamList } from './types'

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<TStackParamList>();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail1" component={Detail} options={{ title: 'Details Screen 1' }} />
          <Stack.Screen name="Detail2" component={Detail} options={{ title: 'Details Screen 2' }} />
          <Stack.Screen name="Error" component={Detail} options={{ title: 'Error Screen' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
