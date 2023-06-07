import { NativeBaseProvider, Heading, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Login() {
  return (
    <NativeBaseProvider>

    <View style={styles.container}>
      <VStack>
        <Heading>Service App</Heading>
        <Button />
        <Input />
      </VStack>
      {/* <StatusBar style="auto" /> */}
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
