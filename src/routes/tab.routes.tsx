import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import Home from '../screens/Home';
import SignInStart from '../screens/SignInStart';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import ServicesList from '../screens/ServicesList';
import Service from '../screens/Service';
import Main from '../screens/Main';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Order from '../screens/Order';
import OrderFinish from '../screens/OrderFinish';
import OrderList from '../screens/OrderList';
import OrderDetails from '../screens/OrderDetails';

export function TabRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor:"#00ADB5", height: 52, paddingBottom: 2}}} backBehavior='history'>
        <Screen name="home" component={Home} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}} />
        <Screen name="signinstart" component={SignInStart} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="register" component={Register} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signinfinish" component={SignInFinish} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="login" component={Login} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="servicesList" component={ServicesList} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="service" component={Service} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="order" component={Order} options={{ tabBarButton: props => null}}/> 
        <Screen name="orderfinish" component={OrderFinish} options={{ tabBarButton: props => null}}/> 
        <Screen name="orderdetails" component={OrderDetails} options={{ tabBarButton: props => null}}/> 
        <Screen name="main" component={Main} options={{ tabBarLabel: 'Serviços', tabBarLabelStyle : { color: '#fff', fontSize: 14, fontWeight: 'bold'},
        tabBarIcon: ({ focused }) => (
            <Feather
              name={'clipboard'}
              size={25}
              color={focused ? '#FFC700' : '#fff'}
            />
          )
        }} />
        <Screen name="orderlist" component={OrderList} options={{ tabBarLabel: 'Pedidos', tabBarLabelStyle : { color: '#fff', fontSize: 14, fontWeight: 'bold'},
        tabBarIcon: ({ focused }) => (
            <Feather
              name={'book'}
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

