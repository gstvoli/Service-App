import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import Home from '../screens/Home';
import SignInStart from '../screens/SignInStart';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import Services from '../screens/Services';
import ServicesList from '../screens/ServiceList';
import Profile from '../screens/Profile';
import Register from '../screens/Register';

export function TabRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor:"#00ADB5", height: 52, paddingBottom: 2}}}>
        <Screen name="home" component={Home} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}} />
        <Screen name="signinstart" component={SignInStart} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="register" component={Register} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signinfinish" component={SignInFinish} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="login" component={Login} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="services" component={Services} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="serviceslist" component={ServicesList} options={{ tabBarLabel: 'Serviços', tabBarLabelStyle : { color: '#fff', fontSize: 14, fontWeight: 'bold'},
        tabBarIcon: ({ focused }) => (
            <Feather
              name={'clipboard'}
              size={25}
              color={focused ? '#FFC700' : '#fff'}
            />
          )
        }} />
        <Screen name="profile" component={Profile} options={{ tabBarLabel: 'Perfil', tabBarLabelStyle: {color: '#fff', fontSize: 14, fontWeight: 'bold'} ,
        tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={25}
              color={focused ? '#FFC700' : '#fff'}
            />
          )
        }}/>
      {/* </Stack.Navigator> */}
    </Navigator>
  );
}

