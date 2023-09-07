import { createDrawerNavigator } from '@react-navigation/drawer';

const { Screen, Navigator} = createDrawerNavigator();

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignInTerms from '../screens/SignInTerms';
import SignInCard from '../screens/SignInCard';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import Services from '../screens/ServiceList';
import Profile from '../screens/Profile';


export function DrawerRoutes() {
  return (
    <Navigator>
        <Screen name="Home" component={Home}/>
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

