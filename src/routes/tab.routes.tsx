import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator} = createBottomTabNavigator();

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignInStart from '../screens/SignInStart';
import SignInTerms from '../screens/SignInTerms';
import SignInCard from '../screens/SignInCard';
import SignInFinish from '../screens/SignInFinish';
import Login from '../screens/Login';
import Services from '../screens/Services';
import Profile from '../screens/Profile';
import { CadastroData } from '../@types/Tipos';

export function TabRoutes() {
    const [data, setData] = useState<CadastroData>({
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      senha: ''
    });

  return (
    <Navigator screenOptions={{ headerShown: false  }}>
        <Screen name="home" component={Home} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}} />
        <Screen name="signinstart" component={SignInStart} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signin" component={() => <SignIn data={data} handleChange={setData}/>} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signinterms" component={SignInTerms} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signincard" component={SignInCard} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="signinfinish" component={SignInFinish} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null }}/>
        <Screen name="login" component={Login} options={{ tabBarStyle:{display: 'none'}, tabBarButton: props => null}}/>
        <Screen name="services" component={Services} />
        <Screen name="profile" component={Profile}/>
      {/* </Stack.Navigator> */}
    </Navigator>
  );
}

