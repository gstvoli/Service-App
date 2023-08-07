import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';
import { TabRoutes } from './tab.routes'
import { DrawerRoutes } from './drawer.routes'

import SignIn from "../screens/SignIn";

export function Routes(){
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');

  
  if(loading){
    // return <Loading />
  }

  return(
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}