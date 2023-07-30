import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignInTerms from './src/screens/SignInTerms';
import SignInCard from './src/screens/SignInCard';
import SignInFinish from './src/screens/SignInFinish';
import Login from './src/screens/Login';
import Services from './src/screens/Services';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignInTerms" component={SignInTerms} />
        <Stack.Screen name="SignInCard" component={SignInCard} />
        <Stack.Screen name="SignInFinish" component={SignInFinish} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const express = require('express');

// const routes = express.Router();
