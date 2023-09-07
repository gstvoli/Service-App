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
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !senha){
      return Alert.alert('Entrar', 'Informe o e-mail e senha!');
    }

    try{
      setIsLoading(true);
      
      const response = await api.post('/login', { email, senha });

      // localStorage.setItem('userEmail', email);
      // localStorage.setItem('userPass', senha);
      console.log('Resposta do servidor:', response.data);

      setErrorMessage('');
      setIsLoading(false);

      navigation.navigate('services')
    
    } catch (error : any){
      if (error.response){
        setIsLoading(false);
        console.log('Resposta do servidor:', error.response.data);    
        setErrorMessage(error.response.data.error);    
        Alert.alert('Entrar', errorMessage);
  
      } else {
        console.error('Erro na requisição:', error.message);
        setErrorMessage('Ocorreu um erro ao realizar o login. Por favor, tente novamente mais tarde.');       
      }
    }
  }

  function openRegister(){
    navigation.navigate('signinstart')
  }

  return (
    <View style={styles.container}>
    {/*  <View colors={['#00ADB5', '#FFF']} locations={[0 , 0.41]} style={styles.container}> */}
      <VStack mb={20}>
        <Ellipse />
        <Heading pt={2} mt={-20} color='#FFF' textAlign='center' fontSize={28}>Faça seu login!</Heading>
      </VStack>

      {/* <Text mb={20} bold fontSize="3xl" color="#444" px={5}>a</Text> */}

      <Input placeholder="Seu e-mail" value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" my={2}/>
      <Input placeholder="Sua senha" value={senha} onChangeText={text => setSenha(text)} secureTextEntry my={2}/>

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