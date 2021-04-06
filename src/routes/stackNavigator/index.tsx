
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {Home, NextInput} from '@src/screens'

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="nextInput" component={NextInput} />
        </Stack.Navigator>
  )
}

export default StackNavigator