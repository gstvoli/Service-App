import { NativeBaseProvider, Heading, VStack, Text, Link, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Logo from '../imgs/logo.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Login() {
  return (
    <View style={styles.container}>
      <VStack style={styles.box}>
        <Heading fontSize="xl" py={25} >Service App</Heading>
        <Logo />
        <Button/>

        <Text>Ainda não tem uma conta?</Text>
        <Link>Cadastre-se aqui!</Link>
        <Input />
      </VStack>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63DADF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    paddingTop: 30
  }
});
