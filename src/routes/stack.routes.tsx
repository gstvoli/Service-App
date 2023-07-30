import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();



type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  SignIn: undefined,
  SignInTerms: undefined,
  SignInCard: undefined,
  SignInFinish: undefined,
  Login: undefined,
  Services: undefined,
  Profile: undefined; 
};

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignInTerms from '../screens/SignInTerms';
import SignInCard from '../screens/SignInCard';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import Services from '../screens/Services';
import Profile from '../screens/Profile';


export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignInTerms" component={SignInTerms} />
        <Screen name="SignInCard" component={SignInCard} />
        <Screen name="SignInFinish" component={SignInFinish} />
        <Screen name="Login" component={Login} />
        <Screen name="Services" component={Services} />
        <Screen name="Profile" component={Profile} />
      {/* </Stack.Navigator> */}
    </Navigator>
  );
}
// const express = require('express');

// const routes = express.Router();
