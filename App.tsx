import { NativeBaseProvider, Heading, VStack } from 'native-base';

import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignInTerms from './src/screens/SignInTerms';
import SignInCard from './src/screens/SignInCard'
import SignInFinish from './src/screens/SignInFinish';
import Login from './src/screens/Login';
import Services from './src/screens/Services';
import Profile from './src/screens/Profile';

export default function App() {
  return (
    <NativeBaseProvider>
      <Profile />
    </NativeBaseProvider>
  );
}

