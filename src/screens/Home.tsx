import { Heading, VStack, Text, Link, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import { LinearGradient as View} from "expo-linear-gradient";
// import { SafeAreaView as View } from 'react-native-safe-area-context';

import { Button } from '../components/Button';

import { useNavigation } from '@react-navigation/native'; 

import Logo from '../imgs/logo.svg';

export default function Login() {
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('SignIn')   
  }

  return (
    <View colors={['#63DADF', '#248A8E']} locations={[0 , 0.8]} style={styles.container}>
      <VStack style={styles.box}>
        <Heading fontSize="5xl" mb={16} color="#fff">Service App</Heading>
        <Logo />
        <Button title='Entrar' color='#000' mt={16} mb={12} />

        <Text color="#fff" fontSize="lg" bold mb={3.5}>Ainda não tem uma conta?</Text>
          <Link onPress={openScreen}>
            <Text color="#fff" fontSize="xl" bold letterSpacing="xl" borderBottomWidth={4} borderBottomColor='#fff' pb={1.5} width={200} textAlign="center">Cadastre-se aqui!</Text>
          </Link>
      </VStack>
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
