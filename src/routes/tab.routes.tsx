import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator} = createBottomTabNavigator();

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignInTerms from '../screens/SignInTerms';
import SignInCard from '../screens/SignInCard';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import Services from '../screens/Services';
import Profile from '../screens/Profile';


export function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Home" component={Home} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="SignIn" component={SignIn} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="SignInTerms" component={SignInTerms} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="SignInCard" component={SignInCard} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="SignInFinish" component={SignInFinish} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="Login" component={Login} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="Services" component={Services} />
        <Screen name="Profile" component={Profile}/>
      {/* </Stack.Navigator> */}
    </Navigator>
  );
}

