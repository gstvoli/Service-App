import { Heading, VStack, Text, Link, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Logo from '../imgs/logo.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { color } from 'native-base/lib/typescript/theme/styled-system';

export default function Login() {
  return (
    <View style={styles.container}>
      <VStack style={styles.box}>
        <Heading fontSize="5xl" mb={16} color="#fff">Service App</Heading>
        <Logo />
        <Button title='Entrar' color='#000' mt={16} mb={12} />

        <Text color="#fff" fontSize="lg" fontWeight="bold" mb={3.5}>Ainda não tem uma conta?</Text>
        <Link><Text color="#fff" fontSize="xl" fontWeight="bold" letterSpacing="xl" borderBottomWidth={4} borderBottomColor='#fff' pb={1.5} width={200} textAlign="center">Cadastre-se aqui!</Text></Link>
      </VStack>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CB6BB',
    alignItems: 'center',
    justifyContent: 'center'
  },

  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    paddingTop: 30
  }
});
