import { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Alert } from "react-native";
import { Checkbox, Text, VStack, HStack, Link, Heading } from "native-base";
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Ellipse from '../imgs/ellipse3.svg';

import { Input } from "../components/Input";
import { Button as CButton } from "../components/Button";

import api from "../services/api";

export default function Login(){
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  async function handleLogin() {
    if (!email || !senha){
      return Alert.alert('Entrar', 'Informe o e-mail e senha!');
    }

    setIsLoading(true);
    try{
      const response = await api.post('users', { email, senha });

      localStorage.setItem('userEmail', response.data.name);
      localStorage.setItem('userPass', senha);

      navigation.navigate('Services')
    } catch (e: any){
      console.log(e.code)
      console.log(e.message)
      console.log(e.name)
      alert('Falha no login! Tente novamente!')
    }
  }

  function openRegister(){
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
    {/*  <View colors={['#00ADB5', '#FFF']} locations={[0 , 0.41]} style={styles.container}> */}
      {/* <TitleEllipse title="Entrar"/> */}
      <VStack>
          <Ellipse />
          <Heading pt={2} mt={-20} color='#FFF' textAlign='center' fontSize={28}>Faça seu login!</Heading>
        </VStack>

      <Text mb={20} bold fontSize="3xl" color="#444" px={5}></Text>

      <Input placeholder="Seu e-mail" onChangeText={setEmail} my={2}/>
      <Input placeholder="Sua senha" secureTextEntry onChangeText={setSenha} my={2}/>

      <HStack>
        <Checkbox value="test" mt={2}>
          <Text bold>Lembrar Login</Text>  

          <Link ml={12}>
            <Text bold>Esqueceu sua senha?</Text>
          </Link>
        </Checkbox>
      </HStack>

      <CButton mt={6} mb={6} color={"#FFF"} bgColor={"#00ADB5"} title={"Entrar"} w="full" onPress={handleLogin}/>

      {/* <Text bold fontSize="md" >ou</Text>
      
      <HStack mt={3}>
        <Button borderRadius="full" w={120}>
          <Text bold color="#FFF">Google Play</Text>
        </Button>

        <Button borderRadius="full" w={120}>
          <Text bold color="#FFF">Apple ID</Text>
        </Button>
      </HStack> */}
      
      <Text color="#444" bold fontSize="lg" my={1}>Ainda não tem uma conta?</Text>

      <Link onPress={openRegister}>
        <Text color="#00ADB5" bold fontSize="lg" borderBottomWidth={4} borderBottomColor='#00ADB5' my={1} px={4} pb={1}>Cadastre-se agora!</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  }
})