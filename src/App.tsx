import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

type RootStackParamList = {
  Login: undefined;
  Home: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element  => <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name={'Login'} component={LoginScreen} />
    <Stack.Screen name={'Home'} component={Home} />
  </Stack.Navigator>
</NavigationContainer>

export default App;
