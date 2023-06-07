import { NativeBaseProvider, Heading, VStack } from 'native-base';
import Login from './src/screens/Login';




export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}

