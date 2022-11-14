import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import SplashScreen from '../screens/splash/Splash';
import AvailableDevice from '../screens/ListOfAvailableDevice/AvailableDevice';
import PrintFile from '../screens/PrintFile/PrintFile'
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AvailableDevice" component={AvailableDevice} />
        <Stack.Screen name="PrintFile" component={PrintFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;