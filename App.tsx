import { NativeBaseProvider, Heading, VStack } from 'native-base';

import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';
import SignInTerms from './src/screens/SignInTerms';
import SignInCard from './src/screens/SignInCard'

export default function App() {
  return (
    <NativeBaseProvider>
      <SignInCard />
    </NativeBaseProvider>
  );
}

