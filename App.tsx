import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';
import Service from './src/screens/Service';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Routes /> */}
      <Service />
    </NativeBaseProvider>
  );
}

