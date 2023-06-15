import { NativeBaseProvider, Heading, VStack } from 'native-base';

import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}

