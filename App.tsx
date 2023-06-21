import { NativeBaseProvider, Heading, VStack } from 'native-base';

import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';
import Terms from './src/screens/Terms';

export default function App() {
  return (
    <NativeBaseProvider>
      <Terms />
    </NativeBaseProvider>
  );
}

