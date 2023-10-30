import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';
import Service from './src/screens/ServicesList';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
      {/* <Service /> */}
    </NativeBaseProvider>
  );
}

