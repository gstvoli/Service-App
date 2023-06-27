import { NativeBaseProvider, Heading, VStack } from 'native-base';

import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';
import SignInTerms from './src/screens/SignInTerms';
import SignInCard from './src/screens/SignInCard'
import SignInFinish from './src/screens/SignInFinish';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignInFinish />
    </NativeBaseProvider>
  );
}

