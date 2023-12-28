import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';
import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';


import 'react-native-gesture-handler';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black})
  return (
    <NativeBaseProvider>
      {fontsLoaded ? <Routes /> : <Loading />}
      {/* <Service /> */}
    </NativeBaseProvider>
  );
}

